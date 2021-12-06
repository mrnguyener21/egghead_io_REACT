//REACT FRAGMENT
//react fragment lets us use multiple JSX elements when calling it with reactDOMrender()
//react fragment can be noted as <> </> aka blank tags

<>
{/* content */}
</>

//REACT COMPONENTS
//react components are html tags but instead of say div or h1 we place the javascript variable/function in it instead. This is used so we can use the component and pass props into the javascript function in order to be reuse the component
//The restriction for this is that the component needs to have a capital letter in the begining to denote it
//WRONG example below
//const test = (prop) => div className='test>{props.msg}</div>
{/* <test>hello</test> */}
{/* <test>world</test> */}

//CORRECT example below
//const Test = (prop) => div className='test>{props.msg}</div>
{/* <Test>hello</Test> */}
{/* <Test>world</Test> */}

//BETTER EXAMPLE
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }
  
//   function App() {
//     return (
//       <div>
//         <Welcome name="Sara" />
//         <Welcome name="Cahal" />
//         <Welcome name="Edite" />
//       </div>
//     );
//   }
  
//   ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   );


//UNDERSTAND AND USE INTERPOLATION IN JSX
//interpolation is the insertion of something of a different nature
//ex: inserting a function inside text to make it more dynamic


//RERENDER A REACT APPLICATION
//in react, if you re-render components the reactDOM.render will compare the previous component to the nearly rendered component and result only what is different 
//this is good because then only the change will be re-render and the rest of the element iwll be left alone versus having to re-render the entire component

//STYLE REACT COMPONENTS WITH CLASSNAME AND INLINE STYLES
//YOU CAN USE style argument for in line CSS and then use it with react components to reduce any kind of repitions