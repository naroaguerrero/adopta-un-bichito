import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Adoption from "./Adoption";
import Main from "./Main";
import Contact from "./Contact";
import Footer from "./Footer";
import Voluntary from "./Voluntary";
import Login from "./Login";
import NewUser from "./NewUser";
import Hostel from "./Hostel";
import Register from "./Register";

function App() {
  const [usuarioEmail, setUsuarioEmail] = useState({});
  return (
    <BrowserRouter>
      <Route path="/">
        <Header usuarioEmail={usuarioEmail} />
      </Route>

      <Route exact path="/">
        <Main />
      </Route>

      <Route exact path="/hostel">
        <Hostel />
      </Route>

      <Route exact path="/voluntary">
        <Voluntary />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route>

      <Route exact path="/adoption">
        <Adoption usuarioEmail={usuarioEmail} />
      </Route>

      <Route exact path="/login">
        <Login setUsuarioEmail={setUsuarioEmail} />
      </Route>

      <Route exact path="/newuser">
        <NewUser />
      </Route>

      <Route exact path="/register">
        <Register />
      </Route>

      <Route path="/">
        <Footer />
      </Route>
    </BrowserRouter>
  );
}

export default App;
