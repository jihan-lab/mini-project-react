import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from "./components/ProductList";
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route path="/add">
          <AddProduct />
        </Route>
        <Route path="/edit/:id">
          <EditProduct />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
