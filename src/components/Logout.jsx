import React from "react";
const Logout = ({ onClick }) => {
    return (
        <div className="divComp">
            <button className="btn" onClick={onClick}>
                Log out
            </button>
        </div>
    );
};
export default Logout