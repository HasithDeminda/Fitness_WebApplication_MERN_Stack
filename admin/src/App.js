import "./App.scss";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddSchedule from "./components/AddSchedule";
import DisplaySchedules from "./components/DisplaySchedules";
import UpdateSchedule from "./components/UpdateSchedule";
import Report from "./components/Report";

function App() {
  return (
    <div className="App-Container">
      <Router>
        <Sidebar />
        <Switch>
          <div className="container-conent" style={{ margin: "0px 20px" }}>
            <Route exact path="/" component={MainContent} />

            <Route path="/trainers" component={MainContent} />

            <Route path="/all" component={DisplaySchedules} />

            <Route path="/add">
              <AddSchedule />
            </Route>

            <Route path="/schedule/:id">
              <UpdateSchedule />
            </Route>

            <Route path="/reports">
              <Report />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
