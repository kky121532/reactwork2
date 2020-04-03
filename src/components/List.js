import React, { Component } from 'react';
import './TodoList.css';
import Item from './FeedItem';

class TodoList extends Component {
	render() {
        const {list, onRemove , onScore, onToggle} = this.props;

		return (
            <div className="TodoList">
                {list.map(item => {
                    return <Item key={item.id} list={item} onRemove={onRemove} onToggle={onToggle} onScore={onScore} />
                })}
            </div>
        );
	}
}

export default TodoList;
