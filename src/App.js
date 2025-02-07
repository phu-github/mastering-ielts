import "./App.css";
import { Heatmap } from "./components/vocab/HeadMap";
import { data } from "./components/vocab/data";
import { useSelector } from "react-redux";

function App() {
  const vocab = useSelector((state) => state.vocabulary.vocab);
  return (
    <div className="App">
      Vocabulary learning
      <Heatmap data={data} width={700} height={400} />
      Make sure show the position of cell by Redux toolkit
      <p>{vocab.x}</p>
      <p>{vocab.y}</p>
      <p>{vocab.value}</p>
    </div>
  );
}

export default App;
