
import './App.css';
import Button from './components/Button/Button';
import { useState } from 'react';
const DUMMY_QUESTIONS=[
  {
    question:"Who is the father of our nation?",
    option1:"Mahatma Gandhi",
    option2:"Jawaharlal Nehru",
    option3:"Donald Trump",
    option4:"Barrack Obama",
    correct:1,
  },
  {
    question:"Who is the father of our nation?",
    option1:"Mahatma Gandhi",
    option2:"Jawaharlal Nehru",
    option3:"Donald Trump",
    option4:"Barrack Obama",
    correct:1,
  },
  {
    question:"Who is the father of our nation?",
    option1:"Mahatma Gandhi",
    option2:"Jawaharlal Nehru",
    option3:"Donald Trump",
    option4:"Barrack Obama",
    correct:1,
  },
  {
    question:"Who is the father of our nation?",
    option1:"Mahatma Gandhi",
    option2:"Jawaharlal Nehru",
    option3:"Donald Trump",
    option4:"Barrack Obama",
    correct:1,
  }
]
function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerQuestion = () => {
    // Handle question answering logic here
  };

  const handleShowResults = () => {
    // Handle showing quiz results logic here
  };

  return (
    <div className="App">
      <h1>Quizz App</h1>
       { !quizStarted ? (
        <button onClick={handleStartQuiz}>Start Quiz</button>
      ) : (
        <>
        
          <Button onClick={handleShowResults}>Show Results</Button>
        </>
      )}
    </div>
  );
}

export default App;
