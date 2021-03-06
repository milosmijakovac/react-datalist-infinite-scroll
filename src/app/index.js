import React, { useState } from "react";

import DataTable from "./datatable";
import json from "../data/photos.json";

function pageData({data, per = 50, page = 1}) {
  return data.slice(per * (page - 1), per * page);
}

const App = () => {
  const [state, setState] = useState({
    photos: pageData({ data: json }),
    loading: false,
    page: 1
  });
 

  function loadMore() {
    if (state.loading) return;
    setState(prev => ({
      ...prev,
      loading: true
    }));
    setState(prev => ({
      photos: [
        ...prev.photos,
        ...pageData({ data: json, page: prev.page + 1 })
      ],
      loading: false,
      page: prev.page + 1
    }));
  }

  return (
    <DataTable
      loadMore={loadMore}
      items={state.photos}
      renderHead={() => (
        <>
          <th>ID</th>
          <th>Album Id</th>
          <th>Title</th>
          <th>Thumbnail</th>
        </>
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
