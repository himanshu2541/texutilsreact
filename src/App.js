import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(0 1 47)";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "rgb(245,245,245)";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  // let color = {
  //   firstColor: "green",
  //   secondColor: "red",
  //   thirdColor: "orange",
  // };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us"/> */}
      {/* <Navbar/> */}

      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        {/* <Routes>
          <Route exact path="/about" element={<About />}></Route>

          <Route
            exact path="/"
            element={
              <Textform
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            }
          ></Route>
        </Routes>
      </Router> */}

              <Textform
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />

    </>
  );
}

export default App;
