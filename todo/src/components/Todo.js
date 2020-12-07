import { render } from "@testing-library/react"
import react, { useReducer, useState } from "react"
import { initialState, reducer } from "../reducers/reducer"

const Todo = () => {
    const [todoValue, setTodoValue] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChanges = (e) => {
        setTodoValue(e.target.value);
    }

    const addDispatch = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_TODO", payload: todoValue})
    }

    const toggleDispatch = (todo) => {
        dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id})
    }

    const clearDispatch = (e) => {
        e.preventDefault()
        dispatch({ type: "CLEAR_TODO" })
    }

    return(
        <>
        <h1>title</h1>
            <form>
                <input 
                type="text"
                name="newTodo"
                value={todoValue}
                onChange={handleChanges}
                >  
                </input>
                <button onClick={addDispatch}>Submit</button>
                <button>Clear</button>
            </form>
            { state.map((todo) => {
                <p
                name="todo"
                onClick={() => {toggleDispatch(todo)}}
                key={todo.id}
                >

                </p>
             }
            },

        </>
    );
}

export default Todo