// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [response, setResponse] = useState("Type a number between 1 and 20");
  const [highScore, setHighScore] = useState(0);
  const [random, setRandom] = useState(Math.floor(Math.random(0, 1) * 20 + 1));

  const [score, setScore] = useState(20);
  const [guestNumber, setGuestNumber] = useState(
    Math.floor(Math.random(0, 1) * 20 + 1)
  );

  return (
    <div className={guestNumber === random ? "App winner" : "App"}>
      <Header
        guestNumber={guestNumber}
        setGuestNumber={setGuestNumber}
        random={random}
      />
      <main className="main">
        <LeftBox
          random={random}
          setRandom={setRandom}
          setResponse={setResponse}
          guestNumber={guestNumber}
          setScore={setScore}
          score={score}
        />
        <RightBox response={response} score={score} />
      </main>
    </div>
  );
}

function Header({ guestNumber, setGuestNumber, random }) {
  console.log(guestNumber);
  return (
    <header className="header">
      <div className="heading-secondary">
        <button
          className="btn btn--again"
          onClick={() =>
            setGuestNumber(() => Math.floor(Math.random(0, 1) * 20 + 1))
          }
        >
          Again
        </button>
        <p className="suggestion">(Between 1 and 20)</p>
      </div>

      <h1 className="heading-primary">GUEST MY NUMBER</h1>
      <div className="separator">
        <span className="question-mark">
          {random === guestNumber ? guestNumber : "?"}
        </span>
      </div>
    </header>
  );
}

function LeftBox({
  random,
  setRandom,
  setResponse,
  guestNumber,
  setScore,
  score,
}) {
  return (
    <div className="left-box">
      <div className="random-number-box">
        <p className="random-number">{random}</p>
        <button
          className="btn btn-random"
          onClick={() =>
            setRandom(() => Math.floor(Math.random(0, 1) * 20 + 1))
          }
        >
          Give me a number
        </button>
      </div>
      <button
        className="btn btn-check"
        onClick={() => {
          setResponse(() =>
            random === guestNumber
              ? "You Win"
              : `${random < guestNumber ? "Too Low" : "Too High"}`
          );
        }}
        // onClick={() => {
        //   setResponse(() =>
        //     random === guestNumber
        //       ? "You win"
        //       : `${
        //           random !== guestNumber
        //             ? setScore(() => score - 1)
        //             : `${random < guestNumber ? "Too low" : "Too high"}`
        //         }`
        //   );
        // }}
      >
        Check!
      </button>
    </div>
  );
}

function RightBox({ response, score }) {
  return (
    <div className="right-box">
      <p>{response}</p>
      <p>💯Score:{score}</p>
      <p>🎖️Highscore:0</p>
    </div>
  );
}

export default App;
