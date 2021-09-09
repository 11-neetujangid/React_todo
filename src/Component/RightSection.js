import { useDispatch, useSelector } from "react-redux";
import { unCompleted } from "../Actions/action";

const RightSection = () => {
    const dispatch = useDispatch();
    const mark = useSelector((state) => state.mark);
    const todos = useSelector((state) => state.todos);
    console.log(mark);
    const onClickMark = (data) => {
        console.log(data);
        dispatch(unCompleted(data));
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
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default RightSection;