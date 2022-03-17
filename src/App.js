import './App.css';
import Login from './Component/Login/Login';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Blog from './Component/Blogs/Blog';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
function App() {

  return (
    <div className="App">
     
    
   <BrowserRouter>
     
     <Switch>
       <Route exact path='/'>
<Home></Home>
       </Route>

       <Route path="/home">
<Home></Home>
       </Route>


       <PrivateRoute path="/blog">
<Blog></Blog>
       </PrivateRoute>

       <Route path="/login">
            <Login></Login>
          </Route>




     </Switch>
     
     </BrowserRouter>
 
    </div>
  );
}

export default App;
