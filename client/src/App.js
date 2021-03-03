import './App.css';
import NavComponent from "./components/NavComponent";
import MainCarousel from "./components/MainCarousel";
import Content from "./components/Content";
import SideContent from "./components/SideContent";

function App() {
  return (
    <div className="App">
      <NavComponent />

      <div className="container marginTop"> 
        <div className="row">

          <div className="col-md-9">
            <MainCarousel />
            <Content />
          </div>

          <div className="col-md-3">
            <SideContent />
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
