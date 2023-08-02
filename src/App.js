// import React, {useState,  useRef } from "react";
// import ReactPlayer from "react-player";

// const buttonStyle = {
//   display: "flex",
//   gap: "20px",
// };
// const App = () => {
  
//   const [url, setUrl] = useState("https://www.youtube.com/watch?v=zKvLB-N2RdA");
//   const [speed, setSpeed] = useState(1);
//   const inputRef = useRef();
//   // console.log(inputRef.current.type);
//   // console.log(inputRef.current.placeholder);
  
//   const chnageUrl = () => {
//     const apple = document.getElementById("text").value;
//     console.log(apple);
//     setUrl(apple);
//     inputRef.current.placeholder = "fuck uou a";
//     console.log(inputRef.current.placeholder);
//   };

//   return (
//     <div>
//       <div>
//         <Player url={url} speed={speed} />
//       </div>
//       <div style={buttonStyle}>
//         <button
//           type="button"
//           onClick={() => {
//             setSpeed(1);
//           }}
//         >
//           1
//         </button>
//         <button
//           type="button"
//           onClick={() => {
//             setSpeed(1.5);
//           }}
//         >
//           1.5
//         </button>
//         <button
//           type="button"
//           onClick={() => {
//             setSpeed(2);
//           }}
//         >
//           2
//         </button>
//       </div>

//       <div>
//         <textarea id="text" cols={30} rows={5} placeholder="paste you url here" ref={inputRef}></textarea>
//         <button type="button" onClick={chnageUrl}>
//           try it
//         </button>
//       </div>
//     </div>
//   );
// };
// const Player = (props) => {
//   return (
//     <ReactPlayer
//       url={props.url}
//       playbackRate={props.speed}
//       loop={true}
//       controls={true}
//       muted={true}
//       playing ={true}
//     />
//   );
// };

// Player.defaultProps = {
//   url: "https://www.youtube.com/watch?v=zKvLB-N2RdA",
// };

// export { Player };
// export default App;



import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
