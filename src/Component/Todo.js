import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { setTodo, addTodo} from '../Actions/action';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todo)
    const onChangeInput = (e) => {
        dispatch(setTodo({ ...todo, [e.target.name]: e.target.value }))
    }
    const onHandleClick =() =>{
       dispatch(addTodo({...todo, curTime: new Date().toLocaleString() + '', id: new Date().getTime()}));
       setShow(false);
    }
    return (
        <>
            <div>
                <Button variant="primary" onClick={handleShow}>Add Todo </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Todo here</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor="exampleInput1">Title:</label>
                        <input type="text" className="form-control" name="title" placeholder="Title" onChange={(e) => onChangeInput(e)} />
                        <label htmlFor="exampleInput1">Description:</label>
                        <input type="text" className="form-control" name="description" placeholder="Description" onChange={(e) => onChangeInput(e)} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}> Close</Button>
                        <Button variant="primary"  onClick ={() => onHandleClick()}>Add</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="split left">
                <LeftSection />
            </div>
            <div className="split right">
                <RightSection />
            </div>
        </>
    )
}
export default Todo;