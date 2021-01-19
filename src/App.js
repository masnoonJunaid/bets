import "./App.css"


import Sidebar from "./components/Sidebar"
import Home from "./components/Homepage"
function App() {
  return (
    <div className="app">
      <Sidebar className="sidebar-main"/>
      <Home className="home-main"/>

    </div>
  );
}

export default App;
