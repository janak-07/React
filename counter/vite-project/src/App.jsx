import  { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.counter}>{count}</h1>
      <button style={styles.buttonDecrement} onClick={decrement}>
        -
      </button>
      <button style={styles.buttonIncrement} onClick={increment}>
        +
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
  },
  counter: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  buttonIncrement: {
    fontSize: "1.2rem",
    padding: "10px 20px",
    margin: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonDecrement: {
    fontSize: "1.2rem",
    padding: "10px 20px",
    margin: "5px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Counter;
