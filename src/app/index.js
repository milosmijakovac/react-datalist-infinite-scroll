import React from "react";
import DataTable from "./datatable";
import json from '../data/photos.json'

const App = () => {

  function get50(data) {
    return data.slice(0, 50)
  }
  
  return (
    <DataTable
    items={get50(json)}
      renderHead={() => (
        <tr>
          <th>ID</th>
          <th>Album Id</th>
          <th>Title</th>
          <th>Thumbnail</th>
        </tr>
      )}
      renderRow={row => (
        <tr>
          <td>{row.id}</td>
          <td>{row.albumId}</td>
          <td>{row.title}</td>
          <td>
            <img src={row.thumbnailUrl} />
          </td>
        </tr>
      )}
    />
  );
};

export default App;
