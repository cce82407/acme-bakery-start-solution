import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import App from './App';
import store from './store';

class Chefs extends React.Component
    
class Recipes extends React.Component




const _Nav = ({ chefs, recipes }) => {
    return (
        <nav>
            <Link to = '/chefs'> Chefs({ chefs.length }) </Link>
            <Link to = '/recipes'> Recipes({ recipes.length }) </Link>
        </nav>
    )
}
 const Nav = connect((state) => {
     return {
        
     }
 })

 const Chefs = connect((state) => {
    return {
       chefs: state.chefs
    }
})(_Chefs)



const Recipes = connect((state) => {
    return {
       recipes: state.recipes
    }
})(_Recipes)
// const { HashRouter, Route, Link } = ReactRouterDOM;

// const Home = ()=> <h2>Home</h2>;

// const Nav = ({ pathname, products })=> {
//   const links = [
//     { text: 'Home', to: '/'},
//     { text: `Products (${ products.length})`, to: '/products' },
//     { text: 'Create A Product', to: '/products/create' },
//   ];
//   return (
//     <div id='nav'>
//       {
//         links.map( (link, idx) => <Link key={ idx } to={ link.to } className={ pathname === link.to ? 'active': ''}>{ link.text }</Link>)
//       }
//     </div>
//  );
// }
// const Products = ({ products, destroy })=> {
//   return (
//     <div>
//       <h2>Products</h2>
//       <ul id='products'>
//         {
//           products.map( product => (
//             <li key={ product.id }>
//               <div>{ product.name }</div>
//               <button onClick={ ()=> destroy(product)}>Destroy</button>
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//   );
// };

// class ProductCreate extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       name: ''
//     };
//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }
//   onChange(ev){
//     this.setState({ [ev.target.name]: ev.target.value });
//   }
//   onSubmit(ev){
//     ev.preventDefault();
//     this.props.create(this.state, this.props.history)
//   }
//   render(){
//     const { name } = this.state;
//     const { onSubmit, onChange } = this;
//     return (
//       <div>
//         <h2>Create A Product</h2>
//         <form onSubmit={ onSubmit }>
//           <input name='name' onChange={ onChange } value={ name } placeholder='enter a new product'/>
//           <button disabled={!name}>Save</button>
//         </form>
//       </div>

//     );
//   }
// }

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       products: []
//     };
//     this.destroy = this.destroy.bind(this);
//     this.create = this.create.bind(this);
//   }
//   async create(product, history){
//     const response = await axios.post('/api/products', product)
//     const products = [...this.state.products, response.data];
//     this.setState({ products });
//     history.push('/products');
//   }
//   async destroy(product){
//     await axios.delete(`/api/products/${product.id}`)
//     const products = this.state.products.filter( _product => _product.id !== product.id);
//     this.setState({ products });

//   }
//   async componentDidMount(){
//     const response = await axios.get('/api/products');
//     this.setState( { products: response.data });

//   }
//   render(){
//     const { products } = this.state;
//     const { destroy, create } = this;
//     return (
//       <HashRouter>
//         <h1>Acme Products</h1>
//         <Route render={({ location })=> <Nav pathname={ location.pathname} products={ products } /> } />
//         <div id='content'>
//           <Route exact path='/' component={ Home } />
//           <Route path='/products' exact render={ ()=> <Products destroy={ destroy } products={ products } /> } />
//           <Route path='/products/create' render={ ({ history })=> <ProductCreate create={ create } history={ history } /> } />
//         </div>
//       </HashRouter>
//    );
//   }
// }
// const root = document.querySelector('#root');
// ReactDOM.render(<App />, root);
// </script>
// </body>
// </html>
const root = document.querySelector('#root');
render(<Provider store={ store }><App /></Provider>, root);



