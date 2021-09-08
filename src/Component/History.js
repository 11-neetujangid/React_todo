import { Button } from "react-bootstrap";
import { useSelector } from "react-redux"
import { useHistory } from "react-router";

const History = () => {
    const history = useHistory();
    const todo = useSelector((state) => state.todos);
    console.log(todo);
    const mark = useSelector((state) => state.mark);
    console.log(mark);
    const onClickButton = () => {
        history.push('/')
    }

    return (
        <div className="App">
            <h2>History</h2>
            <h3>Created At</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date_Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.map((record) =>
                            <tr key={record.id} >
                                <td>{record.title}</td>
                                <td>{record.curTime}</td>
                            </tr>
                        )}
                </tbody>
            </table>
            <h3>Marked At</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date_Time</th>
                    </tr>
                </thead>
                <tbody>

                    <tr >
                        {/* <td>{mark[0].title}</td> */}
                        <td>{mark.curTime}</td>
                    </tr>

                </tbody>
            </table>
            <Button onClick={() => onClickButton()}>Back</Button>
        </div>
    )
}
export default History