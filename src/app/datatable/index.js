import React from 'react'

const DataTable = ({items, renderHead, renderRow}) => {
  return (
    <table>
      <thead>
        <tr>
          {renderHead()}
        </tr>
      </thead>

      <tbody>
        {
          items.map((row) => renderRow(row))
        }
      </tbody>
    </table>
  )
}

export default DataTable
