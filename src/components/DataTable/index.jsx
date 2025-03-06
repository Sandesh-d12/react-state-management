import React from 'react';
import "./DataTable.css"

const DataTable = ({columns,data}) => {
  console.log(data)
  return (
    <table>
    <thead>
      <tr>
        {columns
          ?.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>;
          })}
      </tr>
    </thead>
    <tbody>
      {data?.length > 0 ? 
      data
        ?.sort((a, b) => a - b)
        ?.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item?.id}</td>
              <td>{item?.title}</td>
              <td>{item?.body}</td>
              {item.gender && <td>{item?.gender}</td> }
              {item.contact && <td>{item?.contact}</td> }
            </tr>
          );
        }) : <>No results found</>}
    </tbody>
  </table>
  )
}

export default DataTable
