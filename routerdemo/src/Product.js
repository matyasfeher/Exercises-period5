import React from "react"
import {Link} from "react-router"

const Product = (props) => (
  <div>
    <h2>Our Products</h2>
    <h4>All our great books </h4>
    <ul>
      {props.route.books.map((book) => <li key={book.id}>
        {book.title} <Link to={`products/details/${book.id}`}>(details)</Link></li>)}
    </ul>
  </div>
)

export default Product;