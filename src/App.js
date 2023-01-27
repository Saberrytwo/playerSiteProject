import React, {useState, useEffect} from 'react';
import axios from "axios";
import Table from "./components/Table";

const baseURL = "http://localhost:3001/players";

const Example = () => {
  const [post, setPost] = React.useState(null);

  const [player, setPlayer] = useState({
    fName : "",
    lName : "",
    ranking : "",
    imgUrl : ""

  }

  )
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  function setPlayerList(){
    
  }

  //look at the stuff Anna sends you, and make it happen
  const theadData = ["Player ID", "First Name", "Last Name", "Ranking", "Image"];
  console.log(post);
  const tbodyData = [
  {
    id: "1",
    items: ["John", "john@email.com", "01/01/2021"]
  },
  {
    id: "2",
    items: ["Sally", "sally@email.com", "12/24/2020"]
  },
  {
    id: "3",
    items: ["Maria", "maria@email.com", "12/01/2020"]
  },
  ]
    return (
        <div>
            <Table theadData={theadData} tbodyData={tbodyData} />
        </div>
    );
};

export default Example;
// // App.js

// import axios from "axios";
// import React, { useMemo, useState, useEffect } from "react";

// import Table from "./Table";
// import "./App.css";

// function App() {
//   /* 
//     - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
//     - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
//   */

//   const columns = useMemo(
//     () => [
//       {
//         // first group - TV Show
//         Header: "TV Show",
//         // First group columns
//         columns: [
//           {
//             Header: "Name",
//             accessor: "show.name",
//           },
//           {
//             Header: "Type",
//             accessor: "show.type",
//           },
//         ],
//       },
//       {
//         // Second group - Details
//         Header: "Details",
//         // Second group columns
//         columns: [
//           {
//             Header: "Language",
//             accessor: "show.language",
//           },
//           {
//             Header: "Genre(s)",
//             accessor: "show.genres",
//           },
//           {
//             Header: "Runtime",
//             accessor: "show.runtime",
//           },
//           {
//             Header: "Status",
//             accessor: "show.status",
//           },
//         ],
//       },
//     ],
//     []
//   );

//   // data state to store the TV Maze API data. Its initial value is an empty array
//   const [data, setData] = useState([]);

//   // Using useEffect to call the API once mounted and set the data
//   useEffect(() => {
//     (async () => {
//       const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
//       setData(result.data);
//     })();
//   }, []);

//   return (
//     <div className="App">
//       <Table columns={columns} data={data} />
//     </div>
//   );
// }
// export default App;