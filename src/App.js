import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Main from './Pages/Main';
import Profile from './Pages/Profile';

function App() {

  return (
    <BrowserRouter>
		<Route exact path='/' component={Main} />
		<Route exact path='/profile' component={Profile} />
    </BrowserRouter>
  );
}

export default App;
