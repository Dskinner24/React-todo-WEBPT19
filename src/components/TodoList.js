import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

    return (
        <div>
            {props.tasks.map((task) => (
                <Todo
                    key={task.id}
                    task={task}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
            <button 
                onClick={props.clearCompleted}
                className='clr-btn'>Clear Completed Tasks</button>
        </div>
    );
};

export default TodoList;
