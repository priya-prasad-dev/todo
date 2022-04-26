import React from "react";


const AddItem = ({ todo }) => {
  return (
    <React.Fragment>
      <div className="todo ">
        <input type="checkbox" />
        {todo}
      </div>
    </React.Fragment>
  );
};

export default AddItem;