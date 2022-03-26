
import './App.css';
import Product from './components/Product/Product';

function App() {
  return (
    <div>
      <h1 style={{color:'green',textAlign:'center'}}>Ghorir Dokan</h1>
      <Product></Product>
      <div>
  <div className='ques'>
  <h1>How react works?</h1>
  <p>React is remarkably flexible. Once you have learned it, you can use it on a vast variety of platforms to build quality user interfaces. React is a library, NOT a framework. Its library approach has allowed React to evolve into such a remarkable tool.
  React was created with a single focus: to create components for web applications. A React component can be anything in your web application like a Button, Text, Label, or Grid.

  But as React's popularity is grown, its ecosystem has also grown to cover various use cases.

  You can generate a static site with React using tools like Gatsby. You can use React Native to build mobile apps. You can even create Desktop applications using a tool like Electron, which can run on mac and windows with React.js technology.</p>
  <br/>
  <h1>How Does useState Work?</h1>

  <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
  As stated previously, useState enables you to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component.

Whereas the state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine.

So when should you use the useState Hook? It’s especially useful for local component state, but larger projects might require additional state management solutions.
  </p>
  </div>
</div>

    </div>
    

  );
}


export default App;
