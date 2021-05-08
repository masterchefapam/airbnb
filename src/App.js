import Header from './components/home/header/Header';
import Home from './components/home/Home';
import './App.css';
import Footer from './components/home/footer/Footer';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import SearchPage from './components/home/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
         <Header/>
         <Switch>
            <Route path="/search">
                <SearchPage/>
              </Route>
            <Route path="/">
              <Home/>
            </Route>
         </Switch>
         <Footer/>
      </Router> 
       
    </div>
  );
}

export default App;
