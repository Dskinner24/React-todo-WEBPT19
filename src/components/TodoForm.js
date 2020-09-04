import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
    }

    handleChange = e => {
        this.setState({ task: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTasks(this.state.task);
    };

    render() {
        return (
            <form className='input' onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='task'
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button className='add-btn'>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;