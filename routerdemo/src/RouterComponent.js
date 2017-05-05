import React from "react"
import {Router, Route, IndexRoute, hashHistory} from "react-router"
import Product from "./Product"
import Company from "./Company"
import Blog from "./Blog"
import Details from "./Details"
import Home from "./Home"
import App from "./App"

export default class RouterComponent extends React.Component {
  
  

  render() {
    var books = this.props.bookStore.books;
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="products" component={Product}
                   books={books}/>
            <Route path="products/details/:id" component={Details}
                   books={books}/>
            <Route path="company" component={Company}/>
            <Route path="blog" component={Blog}/>
          </Route>
        </Router>
      </div>
    );
  }
}