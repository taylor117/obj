import React, { useState, useEffect } from 'react';
import './Pages.css';
import { API } from 'aws-amplify';
import { listPages } from '../../graphql/queries';

function PageList({ currentDate }) {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = ({});

  useEffect(() => {
    fetchPages();
  }, []);

  async function fetchPages() {
    const apiData = await API.graphql({ query: listPages });
    setNotes(apiData.data.listPages.items);
  }

  function startPage() {
    setCurrentPage({
        title: ''
    })
  }

  return (
    <div className="page-list">
      <h1>My Online Bullet Journal</h1>
      {currentPage == {} ? <button onClick={console.log(currentPage)}> Current Page </button> : <button onClick={startPage}> Start Page! </button> }
    </div>
  );
}

export default PageList;