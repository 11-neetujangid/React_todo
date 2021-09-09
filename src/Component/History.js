import { useSelector } from "react-redux"

const History = () => {
    const todo = useSelector((state) => state.todos);
    console.log(todo);
    const update = useSelector((state) => state.update);
    console.log(update);
    const mark = useSelector((state) => state.mark);
    console.log(mark);
    const time = useSelector((state) => state.time);

    return (
        <div className="App">
            <h3>Created At :</h3>
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
            <h3>Updated At :</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date_Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        update.map((record) =>
                            <tr key={record.id} >
                                <td>{record.title}</td>
                                <td>{record.curTime}</td>
                            </tr>
                        )}
                </tbody>
            </table>
            <h3>Marked Completed At :</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date_Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mark.map((record) => (
                            <tr key={record.id}>
                                <td>{record.title}</td>
                                <td>{time}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default History