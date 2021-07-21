import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from './counterSlice';
export default configureStore({
    reducer: {
        counter: CounterReducer
    } // <-- your root reducer here
  })