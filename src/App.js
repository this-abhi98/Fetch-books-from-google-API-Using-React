import "./App.css";
import "./components/ListBooks";
import ListBooks from "./components/ListBooks";
import BookView from "./components/BookView";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={ListBooks} />
      <Route path='/Book/:id' component={BookView}/>
    </Router>
  );
}

export default App;