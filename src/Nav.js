import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Nav = ({ chefs, recipes })=> {
  return (
    <nav>
      <Link to='/chefs'>Chefs ({ chefs.length })</Link>
      <Link to='/recipes'>Recipes ({ recipes.length })</Link>
    </nav>
  );
};

const mapStateToProps = ({ chefs, recipes})=> {
  return {
    chefs,
    recipes
  };
};
export default connect(mapStateToProps)(Nav);
