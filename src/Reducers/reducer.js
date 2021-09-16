import {
    SET_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO, DELETE_ALL_TODO, MARK_TODOS,
    UPDATE_TODO_DATE, UN_MARK_TODOS, ARROW_DATA, SET_CHECK, CHECKED, MULTIPLE_DELETE, COMPLETED,
} from "../Actions/action";

const initialState = {
    todo: {
        title: '',
        description: '',
    },
    todos: [],
    mark: [],
    update: [],
    time: '',
    arrowdata: [],
    checked: false,
    copydata: [],
    multiDelete: [],
    checkedData: [],
    complete: []
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
            console.log(action.payload.id);
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
            console.log(action.payload)
            // const update = [...state.update, action.payload.Time, action.payload.id];
            // console.log(update)
            return {
                ...state,
                todo: initialState.todo,
                update: state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        console.log({ ...todo, ...action.payload })
                        return { ...todo, ...action.payload };
                    }
                    return action.payload
                })
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id),
            }
        case DELETE_ALL_TODO:
            let value = action.payload.map((data) => data.id)
            console.log(value)
            return {
                ...state,
                todos: state.todos.filter((todo) => {
                    return !value.includes(todo.id);
                })

            }
        case MARK_TODOS:
            console.log(action.payload.id)
            const mark = [...state.mark, action.payload];
            console.log(mark)
            return {
                ...state,
                mark,
                time: new Date().toLocaleString(),
            }
        case COMPLETED:
            console.log(action.payload)
            return {
                ...state,
                complete: action.payload,
                todos: state.todos.filter((todo) => todo.id == action.payload.id),

            }
        case SET_CHECK:
            console.log(action.payload);
            const checkedData = [...state.checkedData, action.payload];
            console.log(checkedData)
            return {
                ...state,
                checkedData,
            }
        case UN_MARK_TODOS:
            console.log(action.payload.id)
            return {
                ...state,
                todos: [...state.todos, action.payload],
                complete: state.complete.filter((todo) => todo.id !== action.payload.id),
                time: new Date().toLocaleString(),
            }
        case ARROW_DATA:
            console.log(action.payload)
            // let a = action.payload.map((data) => data.id)
            // console.log(a)
            return {
                ...state,
                todo: initialState.todo,
                arrowdata: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        // console.log(todo.id)
                        console.log({ ...todo, ...action.payload })
                        return { ...todo, ...action.payload };
                    }
                    return action.payload
                })

            }
        case CHECKED:
            // const copydata = [...state.copydata, action.payload];
            // console.log(copydata);
            return {
                ...state,
                copydata: action.payload
            }
        case MULTIPLE_DELETE:
            const multiDelete = [...state.multiDelete, action.payload];
            console.log(multiDelete)
            return {
                ...state,
                multiDelete,
            }
        default:
            return state;
    }
}
export default reducer;