import React from "react";
import './TodoList.css'

const TodoList = ({ todolist, deleteHandler }) => {
    return (
        <div >
            {todolist.map((todo, index) =>
                <div key={index} className="dis">
                    <h5><input type="checkbox" /> &nbsp;{todo} &nbsp; <button onClick={() => deleteHandler(index)}>Delete</button></h5>
                </div>)}
        </div>
    );
}

export default TodoList;
