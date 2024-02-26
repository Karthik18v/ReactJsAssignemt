import Navbar from "./components/Navbar/index";
import MainContent from "./components/MainContent/index";
import FooterSection from "./components/FooterSection/index";
import "./App.scss";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <MainContent />
      <FooterSection />
    </div>
  );
};

export default App;
