import react from "react"
import GlobalStyle from "./GlobalStyles"
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Inputs from "./components/Inputs";
import MidHeader from "./components/MidHeader";
import BottomSection from "./components/BottomSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Section1 />
      <Inputs />
      <MidHeader />
      <BottomSection/>
    </>
  );
}

export default App;
