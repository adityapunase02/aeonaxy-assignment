import { useState } from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import BodyInfo from "./Components/BodyInfo";
import Cards from "./Components/Cards";
import FooterTop from "./Components/FooterTop";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationBar />
      <BodyInfo/>
      <Cards/>
      <FooterTop/>
      <Footer/>
    </>
  );
}

export default App;
