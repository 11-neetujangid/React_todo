export const SET_TODO = 'SET_TODO';
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_ALL_TODO = "DELETE_ALL_TODO";
export const MARK_TODOS = "MARK_TODOS";
export const UPDATE_TODO_DATE = "UPDATE_TODO_DATE";
export const UN_MARK_TODOS = "UN_MARK_TODOS";
export const ARROW_DATA = "ARROW_DATA";
export const SET_CHECK = "SET_CHECK";
export const CHECKED = "CHECKED";
export const MULTIPLE_DELETE = "MULTIPLE_DELETE";
export const COMPLETED = "COMPLETED";



export const setTodo = (payload) => ({ type: SET_TODO, payload: payload });
export const addTodo = payload => ({ type: ADD_TODO, payload });
export const updateTodo = payload => (console.log(payload), { type: UPDATE_TODO, payload });
export const deleteTodo = payload => ({ type: DELETE_TODO, payload });
export const deleteAllTodo = payload => (console.log(payload), { type: DELETE_ALL_TODO, payload });
export const markTodos = (payload) => (console.log(payload), { type: MARK_TODOS, payload: payload });
export const updateTododate = payload => (console.log(payload), { type: UPDATE_TODO_DATE, payload });
export const unCompleted = payload => (console.log(payload), { type: UN_MARK_TODOS, payload });
export const arrowData = payload => (console.log(payload), { type: ARROW_DATA, payload });
export const setCheckBox = payload => (console.log(payload), { type: SET_CHECK, payload });
export const checked = payload => (console.log(payload), { type: CHECKED, payload });
export const multipleDelete = payload => (console.log(payload), { type: MULTIPLE_DELETE, payload });
export const complete = payload => (console.log(payload),{ type: COMPLETED, payload });


