

import React from "react";
import { useState } from 'react'

export default function App() {

  const quiz_data = [
    {
      question: "what is jim's favorite pokemon?",
      correct_1: "turtwig",
      hint: "generation 4 starter"
    },
    {
      question: "who is the other founder of asianadventuretime?",
      correct_1: "whostomle",
      correct_2: "tom",
      correct_3: "tommy",
      correct_4: "tom le",
      correct_5: "whos tom le",
      hint: "one of jim's cousin"
    },
    {
      question: "which pokemon go content creator did jim meet?",
      correct_1: "trainer tips",
      correct_2: "trainertips",
      hint: "he gives great tips"
    },
    {
      question: "jim's first official dance crew was with?",
      correct_1: "shelly true dance",
      correct_2: "shelly true dance academy",
      correct_3: "shelly true",
      hint: "there were girls.."
    },
    {
      question: "who is jim's go-to super smash bros character?",
      correct_1: "ness",
      hint: "pk fire!"
    },
    {
      question: "who was the first dance crew to inspire jim to dance?",
      correct_1: "status quo",
      hint: "america's best dance crew season 1"
    },
    {
      question: "who is jim's all-time favorite dance crew?",
      correct_1: "quest crew",
      hint: "america's best dance crew season 3"
    },
    {
      question: "what was jim's high school graduation celebration?",
      correct_1: "backflip",
      correct_2: "back flip",
      correct_3: "flip",
      hint: "he stuck the landing"
    },
    {
      question: "name one of three professional bboys that jim has met.",
      correct_1: "roxrite",
      correct_2: "bboy roxrite",
      correct_3: "pocket",
      correct_4: "bboy pocket",
      correct_5: "zeku",
      correct_6: "bboy zeku",
      hint: "one was met in CO, two were met in FL"
    },
    {
      question: "jim fractured his wrist performing which powermove?",
      correct_1: "jack hammer",
      correct_2: "jackhammer",
      correct_3: "jackhammers",
      correct_4: "jack hammers",
      hint: "involved a beanie"
    },
    {
      question: "jim started with a 'D', but passed with an 'A' in what science college course?",
      correct_1: "microbiology",
      correct_2: "micro-biology",
      correct_3: "microbio",
      hint: "it was small"
    },
    {
      question: "what is jim's favorite gym-day? (use a '/')",
      correct_1: "back/bicep",
      correct_2: "back/bi",
      correct_3: "bicep/back",
      correct_4: "bic/back",
      hint: "upper body movements"
    },
    {
      question: "where does jim like to find/buy his clothes from?",
      correct_1: "thrift store",
      correct_2: "thrift stores",
      correct_3: "goodwill",
      correct_4: "arc",
      hint: "saves me money"
    },
    {
      question: "name one of two subscriptions that jim pays for.",
      correct_1: "vasa",
      correct_2: "spotify",
      hint: "gym and music"
    },
    {
      question: "jim's first job was where?",
      correct_1: "panda",
      correct_2: "panda express",
      hint: "all-time favorite restaurant"
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);

  const correctAnswerText = ['correct', 'nice!', "how'd you know", 'incredible'];
  const wrongAnswerText = ['incorrect', 'bruh', "you're bad", 'nope..'];

  function displayEasyQuizDescription() {
    document.querySelector('.quiz-description').style.opacity = '1';
    document.querySelector('.quiz-description').innerHTML = 'Correct answers are shown if needed. Hints are provided.'
  }

  function hideEasyQuizDescription() {
    document.querySelector('.quiz-description').style.opacity = '0';
  }

  function displayHardQuizDescription() {
    document.querySelector('.quiz-description').style.opacity = '1';
    document.querySelector('.quiz-description').innerHTML = 'Correct answers and hints are not provided.'
  }

  function hideHardQuizDescription() {
    document.querySelector('.quiz-description').style.opacity = '0';
  }

  function randomRightText() {
    let randomRight = Math.floor(Math.random() * correctAnswerText.length);
    return correctAnswerText[randomRight];
  }

  function randomWrongText() {
    let randomWrong = Math.floor(Math.random() * wrongAnswerText.length);
    return wrongAnswerText[randomWrong];
  }

  function startEasyQuiz() {
    if (document.querySelector('.user-name').value === "") {
      document.querySelector('.required-name').innerHTML = 'enter username!';
      document.querySelector('.required-name').style.color = 'red';
    } else {
      document.querySelector('.start-container').style.display = 'none';
      document.querySelector('.easy-quiz-container').style.display = 'block';
      document.querySelector('.display-name').innerHTML = 'good luck, ' + document.querySelector('.user-name').value;
      document.querySelector('.hint').style.opacity = '0';
    }
  }

  function startHardQuiz() {
    if (document.querySelector('.user-name').value === "") {
      document.querySelector('.required-name').innerHTML = 'enter username!';
      document.querySelector('.required-name').style.color = 'red';
    } else {
      document.querySelector('.start-container').style.display = 'none';
      document.querySelector('.hard-quiz-container').style.display = 'block';
      document.querySelector('.next-btn-2').style.display = 'inline';
      document.querySelector('.display-name-hard-quiz').innerHTML = 'good luck, ' + document.querySelector('.user-name').value;
    }
  }

  function checkAnswer() {
    if (document.querySelector('.user-answer').value === "") {
      document.querySelector('.required-answer').innerHTML = 'enter an answer!';
      document.querySelector('.required-answer').style.color = 'red';
    } else if (document.querySelector('.user-answer').value === quiz_data[currentQuestion].correct_1
    || document.querySelector('.user-answer').value === quiz_data[currentQuestion].correct_2
    || document.querySelector('.user-answer').value === quiz_data[currentQuestion].correct_3
    || document.querySelector('.user-answer').value === quiz_data[currentQuestion].correct_4
    || document.querySelector('.user-answer').value === quiz_data[currentQuestion].correct_5
    || document.querySelector('.user-answer').value === quiz_data[currentQuestion].correct_6) {

      document.querySelector('.required-answer').innerHTML = '';
      document.querySelector('.results-easy-quiz').innerHTML = randomRightText();
      document.querySelector('.results-easy-quiz').style.fontFamily = 'cinzel';
      document.querySelector('.results-easy-quiz').style.color = 'green';
      document.querySelector('.check-btn').style.display = 'none';
      document.querySelector('.next-btn').style.display = 'inline';
      document.querySelector('.hint-btn').style.display = 'none';
      document.querySelector('.give-up-btn').style.display = 'none';
      setScore(score + 1);
    } else {
      document.querySelector('.required-answer').innerHTML = '';
      document.querySelector('.user-answer').value = '';
      document.querySelector('.results-easy-quiz').innerHTML = randomWrongText();
      document.querySelector('.results-easy-quiz').style.fontFamily = 'cinzel';
      document.querySelector('.results-easy-quiz').style.color = 'red';
      document.querySelector('.give-up-btn').style.display = 'inline';
    }
  }

  function restart() {
    window.location.reload();
  }

  function nextQuestion() {

    if (currentQuestion + 1 < quiz_data.length) {
      setCurrentQuestion(currentQuestion + 1);
      document.querySelector('.next-btn').style.display = 'none';
      document.querySelector('.check-btn').style.display = 'inline';
      document.querySelector('.user-answer').value = '';
      document.querySelector('.user-answer').style.display = 'inline';
      document.querySelector('.results-easy-quiz').innerHTML = "";
      document.querySelector('.results-easy-quiz').style.fontFamily = 'cochin';
      document.querySelector('.hint-btn').style.display = 'inline';
      setQuestionNumber(questionNumber + 1);
    } else {
      document.querySelector('.results-container-easy').style.display = 'block';
      document.querySelector('.easy-quiz-container').style.display = 'none'; 
      document.querySelector('.hard-quiz-container').style.display = 'none';
    }

    if (score < 2) {
      document.querySelector('.result-text').innerHTML = 'wtf was that, ' + document.querySelector('.user-name').value + '!';
    } else if (score === quiz_data.length) {
      document.querySelector('.result-text').innerHTML = 'you are perfection, ' + document.querySelector('.user-name').value + '!';
    } else {
      document.querySelector('.result-text').innerHTML = 'not bod not bod, ' + document.querySelector('.user-name').value + '!';
    }
  }

  function hardQuizNext() {
    if (document.querySelector('.user-answer-hard').value === quiz_data[currentQuestion].correct_1 ||
    document.querySelector('.user-answer-hard').value === quiz_data[currentQuestion].correct_2 ||
    document.querySelector('.user-answer-hard').value === quiz_data[currentQuestion].correct_3 ||
    document.querySelector('.user-answer-hard').value === quiz_data[currentQuestion].correct_4 ||
    document.querySelector('.user-answer-hard').value === quiz_data[currentQuestion].correct_5) {
      setScore(score + 1);
    } else {
    }
    
    if (document.querySelector('.user-answer-hard').value === "") {
      document.querySelector('.required-answer-hard').innerHTML = 'enter an answer';
      document.querySelector('.required-answer-hard').style.color = 'red';
    } else if (currentQuestion + 1 < quiz_data.length){
      setCurrentQuestion(currentQuestion + 1);
      setQuestionNumber(questionNumber + 1);
      document.querySelector('.user-answer-hard').value = '';
      document.querySelector('.required-answer-hard').innerHTML = '';
    } else {
      document.querySelector('.submit-btn').style.display = 'inline';
      document.querySelector('.next-btn-2').style.display = 'none';
    }
    
  }

  function submitHardQuiz() {
    if (document.querySelector('.user-answer-hard').value === "") {
      document.querySelector('.required-answer-hard').innerHTML = 'answer all questions';
      document.querySelector('.required-answer-hard').style.color = 'red';
    } else {
      document.querySelector('.results-container-hard').style.display = 'block';
      document.querySelector('.hard-quiz-container').style.display = 'none';
    }

    if (score < 2) {
      document.querySelector('.result-text-hard').innerHTML = 'wtf was that, ' + document.querySelector('.user-name').value + '!';
    } else if (score === quiz_data.length) {
      document.querySelector('.result-text-hard').innerHTML = 'you are perfection, ' + document.querySelector('.user-name').value + '!';
    } else {
      document.querySelector('.result-text-hard').innerHTML = 'not bod not bod, ' + document.querySelector('.user-name').value + '!';
    }
  }

  function giveUp() {
    document.querySelector('.results-easy-quiz').innerHTML = quiz_data[currentQuestion].correct_1;
    document.querySelector('.user-answer').style.display = 'none';
    document.querySelector('.check-btn').style.display = 'none';
    document.querySelector('.give-up-btn').style.display = 'none';
    document.querySelector('.next-btn').style.display = 'inline';
    document.querySelector('.hint-btn').style.display = 'none';
    document.querySelector('.required-answer').innerHTML = '';
  }

  function showHint() {
  document.querySelector('.hint').style.opacity = '1';
  }

  function hideHint() {
  document.querySelector('.hint').style.opacity = '0';
  }

  function exitQuiz() {
    window.location.reload();
    alert("You are about to quit the quiz");
  }


  return(
    <>

    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="start-container col-lg-8 col-md-8 col-sm-10">
          <h1 className="title">the tjiml quiz!</h1>
          <h6 className="num-of-questions">written quiz consisting of {quiz_data.length} questions...</h6>
          <p className="required-name"></p>
          <input type="text" className="user-name" placeholder="enter username"/>
          <br/>
          <button className="start-easy-quiz-btn" onClick={startEasyQuiz} onMouseOver={displayEasyQuizDescription} onMouseOut={hideEasyQuizDescription}>easy quiz</button>
          <br/>
          <button className="start-hard-quiz-btn mt-3" onClick={startHardQuiz} onMouseOver={displayHardQuizDescription} onMouseOut={hideHardQuizDescription}>hard quiz</button>
          <br/>
          <p className="quiz-description mt-3">space</p>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="easy-quiz-container col-lg-8 col-md-8 col-sm-10">
          <p className="display-name"></p>
          <h1 className="question">{quiz_data[currentQuestion].question}</h1>
          <p className="required-answer"></p>
          <h4 className="results-easy-quiz"></h4>
          <input type="text" className="user-answer" placeholder="enter answer"/>
          <br/>
          <button className="check-btn" onClick={checkAnswer}>check</button>
          <br/>
          <button className="next-btn" onClick={nextQuestion}>next</button>
          <br/>
          <button className="give-up-btn mb-3" onClick={giveUp}>give up</button>
          <br/>
          <i className="hint-btn bi bi-question-circle" onMouseOver={showHint} onMouseOut={hideHint}></i>
          <p className="hint">{quiz_data[currentQuestion].hint}</p>
          <br/>
          <p className="quiz-number mt-1">{questionNumber}/{quiz_data.length}</p>
          <p className="mt-3"><i className="exit-easy-quiz bi bi-x-circle" onClick={exitQuiz}></i></p>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="hard-quiz-container col-lg-8 col-md-8 col-sm-10">
          <p className="display-name-hard-quiz"></p>
          <h1 className="question">{quiz_data[currentQuestion].question}</h1>
          <p className="required-answer-hard"></p>
          <input type="text" className="user-answer-hard" placeholder="enter answer"/>
          <br/>
          <button className="next-btn-2" onClick={hardQuizNext}>next</button><button className="submit-btn" onClick={submitHardQuiz}>submit</button>
          <br/>
          <p className="quiz-number mt-3">{questionNumber}/{quiz_data.length}</p>
          <p className="mt-3"><i className="exit-easy-quiz bi bi-x-circle" onClick={exitQuiz}></i></p>
        </div>
      </div>
    </div>

     <div className="container">
      <div className="row justify-content-center text-center">
        <div className="results-container-easy col-lg-8 col-md-8 col-sm-10">
          <h1 className="result-text"></h1>
          <h1 className="final-score my-5">{score}/{quiz_data.length}</h1>
          <button className="restart-btn" onClick={restart}>restart</button>
        </div>
      </div>
     </div>

     <div className="container">
      <div className="row justify-content-center text-center">
        <div className="results-container-hard col-lg-8 col-md-8 col-sm-10">
        <h1 className="result-text-hard"></h1>
          <h1 className="final-score my-5">{score}/{quiz_data.length}</h1>
          <button className="restart-btn" onClick={restart}>restart</button>
        </div>
      </div>
     </div>
    </>
  )
}