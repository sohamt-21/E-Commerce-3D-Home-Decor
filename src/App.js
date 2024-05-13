import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/login'><Login /></Route>
          <Route exact path='/signup'><Signup /></Route>
          <Route exact path='/products'><Products /></Route>
          <Route exact path='/products/:id'><ProductDetail /></Route>
          <Route exact path='/cart'><Cart /></Route>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
