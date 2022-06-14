import {useState} from "react";

const Signup = ({ onAdd }) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!username) {
            alert("Please enter a user name");
            return;
        }
        if (!password) {
            alert("Please enter a password");
            return;
        }
        if (password !== password2) {
            alert("Your passwords do not match");
            return;
        }

        onAdd({username, password});
        setUserName("");
        setPassword("");
        setPassword2("");
    };

    return(
        <div className="divComp">
            <p className="minorHeaderText"> Sign up</p>
        </div>
    )
}

export default Signup;