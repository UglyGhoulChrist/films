import "./App.css";
import Stars from "./components/Stars";

function App() {
  return (
    <div className="App">
      <Stars count={-10} />
      <Stars count={0} />
      <Stars count={"1"} />
      <Stars count={2} />
      <Stars count={3.5} />
      <Stars count={"4"} />
      <Stars count={5} />
      <Stars count={"string"} />
      <Stars count={6} />
      <Stars count={null} />
      <Stars count={undefined} />
      <Stars count={Infinity} />
      <Stars count={NaN} />
      <Stars />
    </div>
  );
}

export default App;
