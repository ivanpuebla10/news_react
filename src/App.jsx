import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import ListNews from "./components/ListNews/ListNews";
import { GlobalProvider } from "./context/GlobalState";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<ListNews />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
    </GlobalProvider>

  );
}

export default App;
