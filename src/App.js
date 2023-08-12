import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="heading-secondary">
          <button className="btn btn--again">Again</button>
          <p className="suggestion">(Between 1 and 20)</p>
        </div>

        <h1 className="heading-primary">GUEST MY NUMBER</h1>
        <div className="separator">
          <span className="question-mark">?</span>
        </div>
      </header>

      <main className="main">
        <div className="left-box">
          <div className="random-number-box">
            <p className="random-number">30</p>
            <button className="btn btn-random">Give me a number</button>
          </div>
          <button className="btn btn-check">Check!</button>
        </div>

        <div className="right-box">
          <p>Type a number between 1 and 20</p>
          <p>💯Score:20</p>
          <p>🎖️Highscore:0</p>
        </div>
      </main>
    </div>
  );
}

export default App;
