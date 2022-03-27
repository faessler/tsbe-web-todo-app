import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <h1>Error 404</h1>
    <p>The page you are looking for doesn't exist.</p>
    <p>Maybe you're looking for one of the following pages:</p>
    <ul>
      <li><Link to="/">Todo app</Link> <i>(only available if you're logged in)</i></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </>
);

export default NotFound;
