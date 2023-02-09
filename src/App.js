import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import Table from "./components/Table";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:3001/players").then((response) => {
      setPlayers(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      {
        // first group - Players
        Header: "Players",
        // First group columns
        columns: [
          {
            Header: "First Name",
            accessor: "fName",
          },
          {
            Header: "Last Name",
            accessor: "lName",
          },
          {
            Header: "Ranking",
            accessor: "ranking",
          },
        ],
      },
    ],
    []
  );
  console.log(players);
  return (
    <div className="App">
      <Table columns={columns} data={players} />
    </div>
  );
}

export default App;
