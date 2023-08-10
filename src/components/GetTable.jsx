import React, { useState, useEffect } from 'react'

function DynamoDBTable() {
  const [data, setData] = useState(null)
  const [tableName, setTableName] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/dynamoDB')
      .then((res) => res.json())
      .then((result) => {
        setData(result.data)
        setTableName(result.tableName)
        setLoading(false)
      })
      .catch((err) => {
        console.error('An error occurred:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center pt-10 text-lg font-semibold text-blue-500">
        Loading...
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex justify-center pt-10 text-lg font-semibold text-red-600">
        Error fetching data
      </div>
    )
  }

  return (
    <div className="m-5 p-2 bg-white border border-gray-200 rounded shadow text-lg font-mono">
      <h2 className="text-xl mb-2">Table: {tableName}</h2>
      {renderObject(data, true)}
    </div>
  )
}

function renderObject(obj, isRoot = false) {
  return (
    <div className="pl-4">
      {isRoot && <span className="text-blue-600">{`{`}</span>}
      <ul className="list-inside">
        {Object.keys(obj).map((key) => (
          <li key={key}>
            <span className="text-red-600">"{key}"</span>
            <span className="text-gray-600">:</span>{' '}
            {typeof obj[key] === 'object' ? (
              <>
                <span className="text-blue-600">{`{`}</span>
                {renderObject(obj[key])}
                <span className="text-blue-600">{`}`}</span>
              </>
            ) : (
              <span className="text-green-600">
                {obj[key].S ||
                  obj[key].N ||
                  obj[key].B ||
                  JSON.stringify(obj[key])}
              </span>
            )}
          </li>
        ))}
      </ul>
      {isRoot && <span className="text-blue-600">{`}`}</span>}
    </div>
  )
}

export default DynamoDBTable
