import React, { useState, useEffect } from 'react';

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateQuestion = () => {
  const num1 = generateRandomNumber(1, 10);
  const num2 = generateRandomNumber(1, 10);
  const operator = ['+', '-', '*'][generateRandomNumber(0, 2)];

  let answer;
  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      break;
  }

  return `${num1} ${operator} ${num2}`;
};

const App = () => {
  const [question, setQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [timer, setTimer] = useState(0); // Set initial timer to 0
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameStarted) {
      setQuestion(generateQuestion());
      setTimer(10);
    }
  }, [gameStarted]);

  useEffect(() => {
    if (timer > 0 && gameStarted) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : prevTimer));
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timer, gameStarted]);

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleEndGame = () => {
    setGameStarted(false);
    setScore(0);
    setQuestion('');
    setUserAnswer('');
    setFeedback('');
    setTimer(0);
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();

    if (parseInt(userAnswer, 10) === eval(question)) {
      setScore(score + 1);
      setFeedback('Correct!');
      setTimer(timer + 4);
    } else {
      setScore(0);
      setFeedback(`Incorrect. The correct answer is ${eval(question)}. Try again!`);
    }

    setQuestion(generateQuestion());
    setUserAnswer('');
  };

  const handleTimeout = () => {
    setGameStarted(false); // Close the game when time runs out
    setScore(0);
    setFeedback(`Time's up! The correct answer is ${eval(question)}. Try again!`);
    setTimer(0);
  };

  return (
    <div className="App">
      <h1>Math Quiz Game</h1>
      <p>Score: {score}</p>
      <p>Time: {timer} seconds</p>
      {gameStarted ? (
        <>
          <p>{question}</p>
          <form onSubmit={handleAnswerSubmit}>
            <label>
              Your Answer:
              <input type="number" value={userAnswer} onChange={handleInputChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
          <p>{feedback}</p>
          <button onClick={handleEndGame}>End Game</button>
        </>
      ) : (
        <button onClick={handleStartGame}>Start Game</button>
      )}
    </div>
  );
};

export default App;