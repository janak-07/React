import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="app-container full-background">
      <h1 className="title">Counter Application</h1>
      <div className="counter-box">
        <h2 className="count">Count: {count}</h2>
        <div className="button-group">
          <button className="button inc" onClick={handleInc}>
            Increment
          </button>
          <button
            className={`button dec ${count === 0 ? 'disabled' : ''}`}
            disabled={count === 0}
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
