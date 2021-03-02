import './App.css';
import NavComponent from "./components/NavComponent";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <div className="container marginTop"> 
        <div className="row">

          <div className="col-md-9">
            <MainContent />
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
