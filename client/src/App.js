import { Route, useLocation } from 'react-router-dom';
import './App.css';
import NarvBar from './Components/NavBar/navBar';
import { Detail, Form, Home, Landing } from './Views';



function App() {
  const location = useLocation();
  return (
    <div className="App">

       {location.pathname !== '/' && <NarvBar />}

      <Route exact path='/' render={() =><Landing />} />

      <Route exact path='/home'  render={() =><Home />} />

      <Route exact path='/create'  render={() =><Form />} />
      
      <Route exact path='/detail/:id'  component={Detail}/>     
    


    </div>
  );
}

export default App;
 