import "./App.css";
import { Heatmap } from "./components/vocab/HeadMap";
import { data } from "./components/vocab/data";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const vocab = useSelector((state) => state.vocabulary.vocab);
  const [isPopupVisible, setPopupVisible] = useState(true); // State to manage popup visibility

  const handleCellClick = (cellData) => {
    // Set the vocab data based on the clicked cell
    // Assuming cellData contains the necessary information
    setPopupVisible(true);
  };

  return (
    <div className="App">
      Vocabulary learning
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ flex: 1, marginRight: "10px" }}>
          {/* Timer Module will be placed here */}
          Timeer us here
        </div>
        <div style={{ flex: 2, marginRight: "10px" }}>
          <Heatmap
            data={data}
            width={700}
            height={400}
            updateCellOfHeadMap={handleCellClick}
          />
        </div>
        {isPopupVisible && (
          <div style={{ flex: 1, marginLeft: "10px" }}>
            <div
              className="popup"
              style={{
                position: "absolute",
                top: "20%",
                left: "80%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "5px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                width: "300px",
                height: "300px",
              }}
            >
              <button
                onClick={() => setPopupVisible(false)}
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
              {/* <p style={{ margin: "10px 0" }}>Id: {vocab.id}</p>
              <p style={{ margin: "10px 0" }}>{vocab.x}</p> */}
              <p style={{ margin: "10px 0" }}>{vocab.y}</p>
              <p style={{ margin: "10px 0" }}>{vocab.details.level}</p>
              <p style={{ margin: "10px 0" }}>
                definition: {vocab.details.definition}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
