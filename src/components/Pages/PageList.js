import React, { useState, useEffect } from 'react';
import './Pages.css';
import { API } from 'aws-amplify';
import { listPages } from '../../graphql/queries';
import Page from './Page'

function PageList({ currentDate }) {
  const [pages, setPages] = useState([]);
  const [startPage, setStartPage] = useState(false);

//   useEffect(() => {
//       console.log('re-render')
//     fetchPages();
//   }, []);

  async function fetchPages() {
    const apiData = await API.graphql({ query: listPages });
    setPages(apiData.data.listPages.items);
  }

  return (
    <div className="page-list">
      <h1>My Online Bullet Journal</h1>
      {startPage ? <Page /> : <button onClick={() => setStartPage(true)}> Start Page! </button> }
    </div>
  );
}

export default PageList;