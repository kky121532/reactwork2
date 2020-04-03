import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
	render() {
        const {list, onRemove, onScore, onToggle} = this.props;

		return (
			<div className={`TodoItem ${list.done && 'active'}`} onClick={() => {onToggle(list.id)}}>
				<div className="check">&#10004;</div>
				<div className="remove" onClick={e => {e.stopPropagation(); onRemove(list.id)}}>[지우기]</div>
                <button type="button" className="remove" onClick={e => {e.stopPropagation(); onScore(list.id, 'plus')}}>[+]</button>
                <button type="button" className="remove" onClick={e => {e.stopPropagation(); onScore(list.id, 'minus')}}>[-]</button>
                <span className="star">{list.score.toFixed(1)}</span>
				<div className="text">{list.text}</div>
			</div>
		);
	}
}

export default TodoItem;
