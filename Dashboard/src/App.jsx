import Cards from "./Component/Cards/Cards";
import Chart from "./Component/Chart/Chart";
import Sidebar from "./Component/Sidebar/Sidebar";
import "./index.css";

function App() {


  return (
    <div className="wrapper">
      <div className="innerwrapper">
        <Sidebar/>
        <div className="content">
          <h2>Dashboard</h2>
          <Cards />
          <div className="chart" style={{marginBottom: "10px"}}><Chart /></div>
        </div>
      </div>
    </div>
  )
}

export default App
