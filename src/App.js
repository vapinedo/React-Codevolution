import "./App.css";
import Counter from "./components/Counter";
import ClickCounter2 from "./components/ClickCounter2";
import HoverCounter2 from "./components/HoverCounter2";

function App() {
  return (
    <div className="App">
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount}></ClickCounter2>
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount}></HoverCounter2>
        )}
      />
    </div>
  );
}

export default App;
