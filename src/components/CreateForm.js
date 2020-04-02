import React, { Component } from 'react';
import './CreateForm.css';

class CreateForm extends Component {
    state = {
        input: '',
    }

    handleChange = e => {
        const {value} = e.target;

        this.setState({
            input: value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        // input 입력 값 전달
        this.props.onInsert(this.state.input);
        // input reset
        this.setState({
            input: '',
        });
    };

    render() {
        const {type} = this.props;

		return (
			<div className="CreateForm">
				<form className="form_container" onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} value={this.state.input} placeholder={`add a(n) ${type}`} />
					<button>추가</button>
				</form>
			</div>
		);
	}
}

export default CreateForm;
