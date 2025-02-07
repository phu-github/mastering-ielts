import "./App.css";
import { Heatmap } from "./components/vocab/HeadMap";
import { data } from "./components/vocab/data";
function App() {
  return (
    <div className="App">
      Vocabulary learning
      <Heatmap data={data} width={700} height={400} />
    </div>
  );
}

export default App;
