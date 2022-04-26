import React from "react";

const Add = () => {
    return (
        <>
            <div className="add_div">
                <h1>
                    TODO LIST
                </h1>
                <input type="text" placeholder="New Task" />
                <button type="submit" name="submit" >Add</button>
            </div>
        </>
    );
}
export default Add;