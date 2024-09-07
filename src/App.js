import logo from './logo.svg';
import './App.css';
import StateWithClass from './Components/HooksComponents/UseStateExamples/StateWithClass/StateWithClass';
import StateWithHooks from './Components/HooksComponents/UseStateExamples/StateWithHooks/StateWithHooks';
import HandlePrevState from './Components/HooksComponents/UseStateExamples/HandlePrevState/HandlePrevState';
import HandleStringState from './Components/HooksComponents/UseStateExamples/HandleStringState/HandleStringState';
import StateAsObject from './Components/HooksComponents/UseStateExamples/StateAsObject/StateAsObject';
import StateAsArray from './Components/HooksComponents/UseStateExamples/StateAsArray/StateAsArray';
import ClassExample from './Components/HooksComponents/UseEffectExaples/UseEffectVsClass/ClassExample';
import UseEffectExample from './Components/HooksComponents/UseEffectExaples/UseEffectVsClass/UseEffectExample';
import UseEffectConditionally from './Components/HooksComponents/UseEffectExaples/UseEffectContionally/UseEffectContionally';
import UseEffectOneTime from './Components/HooksComponents/UseEffectExaples/UseEffectOneTime/UseEffectOneTime';
import CleanUpWithUseEffect from './Components/HooksComponents/UseEffectExaples/CleanUpWithUseEffect/CleanUpWithUseEffect';
import DealingWithAPI from './Components/HooksComponents/UseEffectExaples/DealingWithAPI/DealingWithAPI';
import SearchPost from './Components/HooksComponents/UseEffectExaples/DealingWithAPI/SearchPost';
import RefsClass from './Components/HooksComponents/UseRefExamples/ClassExample';
import InputRef from './Components/HooksComponents/UseRefExamples/HooksExample';
import ComponentC from './Components/HooksComponents/UseContextExample/ComponentC';
import React from 'react';
import SimpleExample from './Components/HooksComponents/UseReducerExamples/SimpleExample';
import ComplexReducerEx from './Components/HooksComponents/UseReducerExamples/ComplexReducerEx';

  export const UserContext = React.createContext();
  export const PlaceContext= React.createContext()

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
        <ListRenderingExample />
        <FromHandling /> 
        <GETExample /> 
        <POSTExample /> 
        <StateWithClass />
        <h3>*******************************************************</h3>
        <StateWithHooks />
        <HandlePrevState /> 
        <HandleStringState /> 
        <StateAsObject /> 
        <StateAsArray /> 
        <ClassExample /> 
        <UseEffectExample /> 
        <UseEffectConditionally />
        <UseEffectOneTime />
        <CleanUpWithUseEffect /> 
        <DealingWithAPI /> 
        <SearchPost />
        <RefsClass />  
        <InputRef /> 
        <UserContext.Provider value= {
          {
            name: "Creativa",
            place: "Monufia"
          }
        }>
          <PlaceContext.Provider value= {" Place context "}>
            <ComponentC />
          </PlaceContext.Provider>
        </UserContext.Provider>
        <SimpleExample />*/}
        <ComplexReducerEx />
        
    </div>
  );
}

export default App;
