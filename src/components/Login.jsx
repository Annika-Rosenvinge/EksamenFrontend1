import {useState} from "react";

const Login = ({ onAdd }) =>{
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!userName) {
            alert("Brugernavn mangler");
            return;
        }
        if (!password) {
            alert("Password mangler");
            return;
        }
        onAdd({userName, password});
        setUserName("");
        setPassword("");

    }

    return(
        <div className="divComp ">
            <p className="minorHeaderText"> Login </p>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label className="form-text">Bruger navn</label>
                    <input type="text" placeholder="Bruger navn" value={userName}
                           onChange={(event) => setUserName(event.target.value)}/>
                </div>
                <div className="form-control">
                    <label className="form-text">Password</label>
                    <input type="password" placeholder="Password" value={password}
                           onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <input type="submit" value="Log in" className="btn"/>
            </form>
        </div>
    )
}

export default Login;