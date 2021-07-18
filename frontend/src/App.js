import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import AddBlog from './components/AddBlog';
import BlogDetails from './components/BlogDetails';
import EditBlog from './components/EditBlog';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddBlog} />
          <Route exact path="/details/:id" component={BlogDetails} />
          <Route exact path="/update/:id" component={EditBlog} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
