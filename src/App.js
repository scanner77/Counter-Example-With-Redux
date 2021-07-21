import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const App = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick = {() => dispatch({type: 'INCREMENT'})}>Increment</button>
      <button onClick = {() => dispatch({type: 'DECREMENT'})}>Decrement</button>
    </div>
  )
}

export default App




//-------------------------The code below is the second method to do same task but using redux-tool kits
//-------------------------//with the help of redux toolkits we can define our state, reducers, and actions inside createSlice function at one place




// import React from 'react'
// import {useDispatch, useSelector } from 'react-redux';
// import './App.css';
// import { decrement, increment } from './Reduxx/counterSlice';
// //useSelector: Hey I wanna use this variable from this reducer, here counter is a reducer
 
// function App({state, actions}) {

//   const {count} = useSelector(state => state.counter);
//   //WITH THE HElp dispatchers we can call any action from any reducer
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       {count}
//       <button onClick = {() => dispatch(increment())}>increment</button>
//       <button onClick = {() => dispatch(decrement())}>Decrement</button>
//     </div>
//   );
// }

// export default App;
