import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Todo from './Component/Todo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducers/reducer'
import History from './Component/History';

const store = createStore(reducer);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <header>
            <Link to="/history">history</Link>
          </header>
          <Switch>
            <Route exact path="/" component={Todo} />
            <Route exact path="/history" component={History} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
