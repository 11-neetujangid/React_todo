import { SET_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO, DELETE_ALL_TODO, MARK_TODOS } from "../Actions/action";
const initialState = {
    todo: {
        title: '',
        description: '',
    },
    todos: [],
    mark: [],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO:
            console.log(action.payload);
            return {
                ...state,
                todo: action.payload,
            }
        case ADD_TODO:
            const todos = [...state.todos, action.payload];
            localStorage.setItem('todo', JSON.stringify(todos));
            return {
                ...state,
                todos,
                todo: initialState.todo,
            }
        case UPDATE_TODO:
            console.log(action.payload.id)
            return {
                ...state,
                todo: initialState.todo,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, ...action.payload };
                    }
                    return todo;
                }),
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id),
            }
        case DELETE_ALL_TODO:
            console.log(action.payload)
            return {
                ...state,
                todos: []
            }
        case MARK_TODOS:
            console.log(action.payload)
            return {
                ...state,
                mark: action.payload,
            }
        default:
            return state;
    }


}
export default reducer