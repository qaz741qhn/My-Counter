import Counter from "./components/Counter/Counter";
import "./App.css";

export const App = () => {
  return (
    <div>
      <div className="navbar">
        <h1>Ching's Counter 💹</h1>
      </div>
      <Counter />
    </div>
  );
}
