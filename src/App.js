import logo from './logo.svg';
import './App.css';
import FunctionalComponentArrow from './Components/FunctionalComponent/FuctionalComponent';
import ClassComponent from './Components/ClassComponent/ClassComponent';
import CardJsx from './Components/JSXExample/JSXExample'
import Greating from './Components/WithoutJSX/WithoutJSX'
import Hello from './Components/PropsExample/PropsExample';
import StateExample from './Components/StateExample/StateExample';
import DistructingEx from './Components/DistructingExample/DistructingExample';
import DistructingClassExample from './Components/DistructingClassExample/DistructingClassExample';
import EventHandleExample from './Components/EventHandleExample/EventHandleExample';
import EventHandleClassExample from './Components/EventHandleClassExample/EventHandleClassExample';
import HandlingBindOfThis from './Components/HandlingBindOfThis/HandlingBindOfThis';
import ConditionalRenedering from './Components/ConditionalRenedering/ConditionalRenedering';
import ListRenderingExample from './Components/ListRenderingExample/ListRenderingExample';
import FromHandling from './Components/FormHandling/FormHandling';

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
        <Hello fname= 'Anas' lname= 'Ahmed'/>
        <StateExample />
        <DistructingEx fname="Taha" lname="Ibraheem" />
        <DistructingEx fname="Eman" lname="Khaled"/>
        <DistructingEx fname="Yousef" lname="Mohamed"/>
        <DistructingClassExample fname="Taha" lname="Ibraheem" age={25} />
        <EventHandleExample />
        <EventHandleClassExample /> 
        <HandlingBindOfThis /> 
        <ConditionalRenedering /> 
        <ListRenderingExample />*/}
        <FromHandling />

    </div>
  );
}

export default App;
