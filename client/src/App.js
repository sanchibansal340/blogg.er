import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Landing, Register, Login, Dashboard, BlogPage, CreateBlogPage, UpdateBlogPage, ViewBlogPage, PrivateRoute, About } from "./components/index";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import './App.css';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blogs" component={BlogPage} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
               <PrivateRoute
                  exact
                  path="/blogs/blog/create"
                  component={CreateBlogPage}
               />
               <PrivateRoute
                  exact
                  path="/blogs/blog/update/:id"
                  component={UpdateBlogPage}
               />
               <Route exact path="/blogs/blog/:id" component={ViewBlogPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
}

export default App;
