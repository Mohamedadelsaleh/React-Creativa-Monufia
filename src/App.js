import logo from './logo.svg';
import './App.css';
import FunctionalComponentArrow from './Components/FunctionalComponent/FuctionalComponent';
import ClassComponent from './Components/ClassComponent/ClassComponent';
import CardJsx from './Components/JSXExample/JSXExample'
import Greating from './Components/WithoutJSX/WithoutJSX'
import Hello from './Components/PropsExample/PropsExample';
import StateExample from './Components/StateExample/StateExample';

function App() {
  return (
    <div className="App">
        { /* <FunctionalComponentArrow />
        <ClassComponent /> 
        <CardJsx /> 
        <Greating />
        <Hello fname= 'mohamed' age= {30}>
            <p> Has 3 children</p>
            <span> Has 1 span</span>
        </Hello>
        <Hello fname= 'Eman'/>
        <Hello fname= 'Anas' lname= 'Ahmed'/>*/}
        <StateExample />

    </div>
  );
}

export default App;
