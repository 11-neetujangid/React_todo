import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import {
    updateTodo, deleteTodo, deleteAllTodo, markTodos, setTodo, updateTododate, arrowData, setCheckBox,
    checked, multipleDelete
} from "../Actions/action";
import { useState } from "react";
import img from '../Images/arrow.png';
import { useHistory } from "react-router";
import { Image } from "react-bootstrap";

const LeftSection = () => {
    const dispatch = useDispatch();
    const history = useHistory()

    const todos = useSelector((state) => state.todos)
    console.log(todos);
    const todo = useSelector((state) => state.todo);
    console.log(todo);
    const update = useSelector((state) => state.update);
    console.log(update)
    const data = useSelector((state) => state.arrowdata);
    console.log(data);
    const check = useSelector((state) => state.Checked);
    console.log(check);
    const copy = useSelector((state) => state.copydata);
    console.log(copy);
    const muldelete = useSelector((state) => state.multiDelete);
    console.log(muldelete);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
    }

    const [arrow, setArrow] = useState(false);
    const handleCloseArrow = () => setArrow(false);
    const handleArrow = (id) => {
        dispatch(arrowData({ ...todo, id }));
        setArrow(true)
    }
    const onChangeInput = (e) => {
        console.log(todo)
        dispatch(setTodo({ ...todo, [e.target.name]: e.target.value }))
    }
    const clickUpdate = (id) => {
        console.log(id)
        dispatch(updateTodo({ ...todo, id, curTime: new Date().toLocaleString() + '' }));
        dispatch(updateTododate({ id, Time: new Date().toLocaleString() + '' }));
        setShow(false);
    }
    const clickDelete = (todo) => {
        dispatch(deleteTodo(todo));
    }
    const onclickDeleteAll = () => {
        console.log("delete todo", muldelete)
        // dispatch(deleteAllTodo(todo));
        dispatch(deleteAllTodo(muldelete));

    }
    const onMark = (todo) => {
        // dispatch(markTodos(todo));
        dispatch(multipleDelete(todo))
    }
    const mark = useSelector((state) => state.mark);

    const onChangeCheck = (data) => {
        console.log(data)
        console.log(!check)
        // const checked = !check
        dispatch(setCheckBox({ ...todos, check: !check }))
    }
    const onClickCopyButton = () => {
        console.log("hello");
        console.log(check);
        if (check === true) {
            console.log("is true");
            dispatch(checked(check));
        }
    }
    return (
        <div className="App">
            <h1>Todos</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Mark</th>
                        <th>copy</th>
                        <th>Action</th>
                        <th>Up</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => {
                        return (
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td> {todo.description}</td>
                                <td>
                                    <input class="form-check-input" type="checkbox" value="mark" id="flexCheckDefault" checked={check} onClick={() => onMark(todo)} />
                                </td>
                                <td>
                                    {/* <Button variant="primary" onClick={() => onClickCopyButton(todo)} >Copy</Button> */}
                                    <input class="form-check-input" type="checkbox" name="mark" onClick={() => onChangeCheck(todo)} />
                                </td>
                                <td>
                                    <Button variant="primary" onClick={handleShow}>Update</Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Update Todo </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <label htmlFor="exampleInput1">Title:</label>
                                            <input type="text" className="form-control" defaultValue={todo.title} name="title" placeholder="Title" onChange={(e) => onChangeInput(e)} />
                                            <label htmlFor="exampleInput1">Description:</label>
                                            <input type="text" className="form-control" defaultValue={todo.description} name="description" placeholder="Description" onChange={(e) => onChangeInput(e)} />
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}> Close</Button>
                                            <Button variant="primary" onClick={() => clickUpdate(todo.id)}>Submit</Button>
                                        </Modal.Footer>
                                    </Modal>{' '}
                                    <Button variant="primary" onClick={() => clickDelete(todo)}>Delete </Button>
                                </td>
                                <td className="icon img">
                                    <Image variant="primary" onClick={() => handleArrow(todo.id)} src={img} alt="img"></Image>
                                    <Modal show={arrow} onHide={handleCloseArrow}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>history</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <table className="table">
                                                <tbody>
                                                    {
                                                        data.map((record) =>
                                                            <tr key={record.id} >
                                                                <td>Created At : {record.curTime}</td>
                                                            </tr>
                                                        )
                                                    }
                                                    {
                                                        update.map((record) =>
                                                            <tr key={record.id} >
                                                                <td>Updated At : {record.Time}</td>
                                                            </tr>
                                                        )}
                                                </tbody>
                                            </table>

                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleCloseArrow}> Close</Button>
                                        </Modal.Footer>
                                    </Modal>{' '}
                                </td>
                                <table className="table">
                                    {/* <thead>
                                        <tr>
                                            <th>Title</th>
                                        </tr>
                                    </thead> */}

                                    <tbody>
                                        {copy.map((record) => {
                                            return (
                                                <tr key={record.id}>
                                                    <td> copy of {record.title}</td>
                                                    <td> {record.description}</td>
                                                    <td> {record.check}</td>


                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Button variant="primary" onClick={() => onclickDeleteAll()}>Delete All</Button>{' '}
            <Button variant="primary" onClick={() => onClickCopyButton(todo)} >Copy</Button>
            <br /><br /><br />
            {/* <CopyTodo /> */}
        </div>
    )
}
export default LeftSection;