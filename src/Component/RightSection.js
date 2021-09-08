import { useSelector } from "react-redux";

const RightSection = () => {
    const mark = useSelector((state) => state.mark);
    // console.log(mark);
    return (
        <>
            <h1>Right</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Mark</th>
                    </tr>
                </thead>
                <tr>
                    <td>{mark.title}</td>
                    <td>{mark.description}</td>
                    <td><input class="form-check-input" type="checkbox" value="mark" id="flexCheckDefault" /></td>
                </tr>
            </table>
        </>
    )
}
export default RightSection;