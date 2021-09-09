import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { updateTodo, deleteTodo, deleteAllTodo, markTodos, setTodo, updateTododate, markTodoTime } from "../Actions/action";
import { useState } from "react";
import { useHistory } from "react-router";
import History from './History'

const LeftSection = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const todos = useSelector((state) => state.todos)
    // console.log(todos);
    const todo = useSelector((state) => state.todo);
    // console.log(todo);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
    }
    const onChangeInput = (e) => {
        console.log(todo)
        dispatch(setTodo({ ...todo, [e.target.name]: e.target.value }))
    }
    const clickUpdate = (id) => {
        console.log(id)
        dispatch(updateTodo({ ...todo, id, curTime: new Date().toLocaleString() + '' }));
        dispatch(updateTododate({ ...todo, id, curTime: new Date().toLocaleString() + '' }));
    }
    const clickDelete = (todo) => {
        dispatch(deleteTodo(todo));
    }
    const onclickDeleteAll = (todo) => {
        console.log("todo", todo)
        dispatch(deleteAllTodo(todo));
    }
    const onMark = (todo) => {
        dispatch(markTodos(todo));
    }
    const mark = useSelector((state) => state.mark)

    return (
        <div className="App">
            <h1>Todos</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Mark</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => {
                        return (
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td> {todo.description}</td>
                                <td>
                                    <input class="form-check-input" type="checkbox" value="mark" id="flexCheckDefault" onClick={() => onMark(todo)} />
                                </td>
                                <td>
                                    <Button variant="primary" onClick={handleShow}>Update</Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Update Todo </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <label htmlFor="exampleInput1">Title:</label>
                                            <input type="text" className="form-control" name="title" placeholder="Title" onChange={(e) => onChangeInput(e)} />
                                            <label htmlFor="exampleInput1">Description:</label>
                                            <input type="text" className="form-control" name="description" placeholder="Description" onChange={(e) => onChangeInput(e)} />
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}> Close</Button>
                                            <Button variant="primary" onClick={() => clickUpdate(todo.id)}>Submit</Button>
                                        </Modal.Footer>
                                    </Modal>{' '}
                                    <Button variant="primary" onClick={() => clickDelete(todo)}>Delete </Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Button variant="primary" onClick={() => onclickDeleteAll(todos)}>Delete All</Button>{' '}
            <br /><br /><br />
            <History />
        </div>
    )
}
export default LeftSection;