// import React, { useState } from 'react';

// const AnswerForm = ({ onSubmit }) => {
//   const [userAnswer, setUserAnswer] = useState('');

//   const handleInputChange = (e) => {
//     setUserAnswer(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(userAnswer);
//     setUserAnswer('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Your Answer:
//         <input type="number" value={userAnswer} onChange={handleInputChange} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default AnswerForm;