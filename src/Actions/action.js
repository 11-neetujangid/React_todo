export const SET_TODO = 'SET_TODO';
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_ALL_TODO = "DELETE_ALL_TODO";
export const MARK_TODOS = "MARK_TODOS";
export const UPDATE_TODO_DATE = "UPDATE_TODO_DATE";
export const UN_MARK_TODOS = "UNMARK_TODOS";

export const setTodo = (payload) => ({ type: SET_TODO, payload: payload });
export const addTodo = payload => ({ type: ADD_TODO, payload });
export const updateTodo = payload => (console.log(payload), { type: UPDATE_TODO, payload });
export const deleteTodo = payload => ({ type: DELETE_TODO, payload });
export const deleteAllTodo = payload => (console.log(payload), { type: DELETE_ALL_TODO, payload });
export const markTodos = (payload) => (console.log(payload), { type: MARK_TODOS, payload: payload });
export const updateTododate = payload => (console.log(payload), { type: UPDATE_TODO_DATE, payload });
export const unCompleted = payload => (console.log(payload), { type: UN_MARK_TODOS, payload });

