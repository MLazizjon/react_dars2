// import "./App.css";
// // import Header from "./components/header/Header";
// // import Home from "./components/home/Home";
// // import Card from "./components/card/Card";
// // import Card from './components/card/Card'
// import { useState } from "react";

// function App() {
//   const [name,setName] = useState("ahror")

//   const handleClick =()=>{
//     setName("doniyor")

//   }

//   const [events,setEvents]=useState([
//     {title:"ahror alimov",id:1},
//     {title:"doni yor alimov",id:2},
//     {title:"match:manchester",id:3}
//   ])

//   const handleDelete =(id)=>{
//     setEvents((prev) =>{
//       return prev.filter((event) =>{
//         return event.id !==id
//       })
//     })
//   }

//   return (
//     <div className="App">
//       <h1>my name {name}</h1>
//       <button onClick={handleClick}>change</button>

//       {events.map((event)=>{
//         return(
//           <div key={event.id}>
//             <h2>{event.title}</h2>
//             <button onClick={()=>handleDelete(event.id)}>Delete</button>

//           </div>

//         )
//       })}

//       {/* <Header />
//       <Home />
//       <Card/> */}

//     </div>
//   );
// }

// export default App;

// ? 2
import "./components/";
import React from "react";
// import Title from "./components/Title";
import { useState } from "react";
// import Title from "./components/Title.jsx";
import Title from "./Title"


const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [events, setEvents] = useState([
    { title: "ahror's birhher", id: 1 },
    { title: "doniyor live", id: 2 },
    { title: "match: manchester united vs barcelona", id: 3 },
  ]);

  const handleDelete = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  let subtile = "All events well be here:";
  return (
    <div>
      <Title title="Akhror Kingdom events" subtile={subtile} />
      {showContent ? (
        <button onClick={() => setShowContent(false)}>Hide content</button>
      ) : (
        <button onClick={() => setShowContent(true)}>Show content</button>
      )}
      {showContent && (
        <div>
          {events.length === 0 && <h3>No content yet</h3>}
          {events.map((event) => (
            <div key={event.id}>
              <h2>{event.title}</h2>
              <button onClick={() => handleDelete(event.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setShowModal(true)}>Show modal</button>
      <button onClick={() => setShowModal(false)}>close</button>
      bu
    </div>
  );
};

export default App;
