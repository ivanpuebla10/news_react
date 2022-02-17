import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import ListNews from "./components/ListNews/ListNews";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/news" element={<ListNews />} />
          </Routes>
        </div>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
