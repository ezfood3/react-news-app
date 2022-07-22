// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [todo, setTodo] = useState(null);

//   // const onClick = (e) => { // Promise
//   //   axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
//   //     setTodo(res.data);
//   //   });
//   // };

//   const onClick = async (e) => {
//     // async / await
//     try {
//       const res = await axios.get(
//         // https://newsapi.org/v2/top-headlines?country=kr&apiKey=596090be385a4779a0e02804a3699209
//         "https://newsapi.org/v2/top-headlines?country=jp&category=sports&apiKey=596090be385a4779a0e02804a3699209"
//       );
//       setTodo(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <>
//       <div>
//         <div>
//           <button onClick={onClick}>todo 정보 로드</button>
//         </div>
//         {todo && (
//           <textarea
//             rows={7}
//             value={JSON.stringify(todo, null, 2)}
//             readOnly={true}
//           ></textarea>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
