import { useState } from "react";
import "../Form/Form.css";
const Form = (props) =>{
    const [input, setInput] = useState("");

    const onSubmit = (e) =>{
        e.preventDefault();
        props.AddUser(input);
        setInput("");
    }

    return(
        <>
            <form>
                <div className="form-items">
                    <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
                    <button onClick={onSubmit}>Submit</button>
                </div>
            </form>
        </>
    )
}
export default Form;