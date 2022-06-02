import "./App.css";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Valp">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
