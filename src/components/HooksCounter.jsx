import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";


// eslint-disable-next-line react/prop-types, no-unused-vars
function HooksCounter() {

   const count = useSelector((state) => state.value)
   const dispatch = useDispatch()

   const incrementHandler = (value) => {
      dispatch(increment(value))

   }

   const decrementHandler = (value) => {
      dispatch(decrement(value))

   }

   return (
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
         <div className="text-2xl font-semibold">{count}</div>
         <div className="flex space-x-3">
            <button
               className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
               onClick={() => incrementHandler(2)}
            >
               Increment
            </button>
            <button
               className="bg-red-400 text-white px-3 py-2 rounded shadow"
               onClick={() => decrementHandler(5)}
            >
               Decrement
            </button>
         </div>
      </div>
   );
}



export default HooksCounter;