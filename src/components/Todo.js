import React from 'react';

const Todo = props => {
    const handleClick = e => {
        e.preventDefault();
        props.toggleCompleted(props.task.id);
    };
    return (
        <div
            onClick={handleClick}
            className={`task${props.task.completed} ? " completed" : ""}`}>
            <p>{props.task.task}</p>
        </div>
    );
};

export default Todo;