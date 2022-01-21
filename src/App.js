import './styles/App.scss';
import Header from './parts/Header';
import {Switch,Route} from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

function App() {
  return (
   <>
   <Header />
   <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/createpost' component={CreatePost}/>
     
   </Switch>
   
  
   </>
  );
}

export default App;
