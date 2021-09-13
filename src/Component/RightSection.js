import { useDispatch, useSelector } from "react-redux";
import { unCompleted } from "../Actions/action";
import img from '../Images/arrow.png';
import { Button, Modal } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useState } from "react";

const RightSection = () => {
    const dispatch = useDispatch();
    const mark = useSelector((state) => state.mark);
    console.log(mark);
    const todos = useSelector((state) => state.todos);
    const time = useSelector((state) => state.time);
    const update = useSelector((state) => state.update);
    const data = useSelector((state) => state.arrowdata);
    const onClickMark = (data) => {
        console.log(data);
        dispatch(unCompleted(data));
    }
    const [arrow, setArrow] = useState(false);
    const handleCloseArrow = () => setArrow(false);
    const handleArrow = (id) => {
        // dispatch(arrowData({ ...todo, id }));
        setArrow(true)
    }
    return (
        <>
            <h1>Completed</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Mark</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mark.map((record) => (
                            <tr key={record.id}>
                                <td>{record.title}</td>
                                <td>{record.description}</td>
                                <td><input class="form-check-input" type="checkbox" value="mark" id="flexCheckDefault" onClick={() => onClickMark(record)} /></td>
                                <td className="icon img">
                                    <Image variant="primary" onClick={handleArrow} src={img} alt="img"></Image>
                                    <Modal show={arrow} onHide={handleCloseArrow}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>history</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>

                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Date_Time</th>
                                                    </tr>
                                                </thead>
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
                                                    {
                                                        mark.map((record) => (
                                                            <tr key={record.id}>
                                                                <td>Completed At : {time}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleCloseArrow}> Close</Button>
                                        </Modal.Footer>
                                    </Modal>{' '}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table><br /><br /><br />
            {/* <h3>Marked UnCompleted At :</h3> */}
            {/* <table className="table">
                <thead>
                    <tr>
                        <th>Date_Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((record) => (
                            <tr key={record.id}>
                                <td>{time}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table> */}
        </>
    )
}
export default RightSection;