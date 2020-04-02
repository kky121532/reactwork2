import React, { Component } from 'react';
import './TodoList.css';
import Item from './SongItem';

class TodoList extends Component {
	render() {
        const {list, onRemove , onScore} = this.props;

		return (
            <div className="TodoList">
                {list.map(item => {
                    return <Item key={item.id} list={item} onRemove={onRemove} onScore={onScore} />
                })}
            </div>
        );
	}
}

export default TodoList;
