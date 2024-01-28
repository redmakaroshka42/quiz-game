// // Timer.js
// import React, { useEffect, useState } from 'react';

// const Timer = ({ initialTime, onTimeout }) => {
//   const [time, setTime] = useState(initialTime);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//       if (time === 0) {
//         onTimeout();
//       }
//     };
//   }, [time, onTimeout]);

//   return <p>Time: {time} seconds</p>;
// };

// export default Timer;
