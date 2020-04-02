import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
	render() {
        const {list, onRemove, onScore} = this.props;

		return (
			<div className="TodoItem">
				<div className="check">&#10004;</div>
				<div className="remove" onClick={e => {onRemove(list.id)}}>[지우기]</div>
                <button type="button" className="remove" onClick={() => {onScore(list.id, 'plus')}}>[+]</button>
                <button type="button" className="remove" onClick={() => {onScore(list.id, 'minus')}}>[-]</button>
                <span className="star">{'★'.repeat(list.score)}</span>
				<div className="text">{list.text}</div>
			</div>
		);
	}
}

export default TodoItem;
