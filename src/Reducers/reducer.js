import {
    SET_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO, DELETE_ALL_TODO, MARK_TODOS,
    UPDATE_TODO_DATE, UN_MARK_TODOS
} from "../Actions/action";
const initialState = {
    todo: {
        title: '',
        description: '',
    },
    todos: [],
    mark: [],
    update: []
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
        case UPDATE_TODO_DATE:
            console.log(action.payload.id)
            return {
                ...state,
                todo: initialState.todo,
                update: state.todos.map((todo) => {
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
            console.log(action.payload.id)
            console.log(action.payload.time)

            const mark = [...state.mark, action.payload];
            return {
                ...state,
                mark,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id),
            }
        case UN_MARK_TODOS:
            console.log(action.payload.id)
            return {
                ...state,
                todos: [...state.todos, action.payload],
                mark: state.mark.filter((todo) => todo.id !== action.payload.id),
            }
        default:
            return state;
    }
}
export default reducer