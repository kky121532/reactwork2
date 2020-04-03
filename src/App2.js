import React, { Component } from 'react';
import './App.css';

import CreateForm from './components/CreateForm';
import List from './components/List';

class App extends Component {
    id = 1;
    
    state = {
        list: [],
    }

    handleInsert = (text) => {
        this.setState({
            list: this.state.list.concat({
                text: text,
                id: this.id,
                score: 0,
                done: false,
            }),
        });

        this.id++;
    }

    handleRemove = id => {
        this.setState({
            list: this.state.list.filter(item => item.id !== id),
        });
    }

    handleScore = (id, type) => {
        const maxLength = 9.9;

        this.setState({
            list: this.state.list.map(item => {
                if (item.id === id) {
                    // 스코어 변수
                    let is = item.score;
                    
                    // 스코어의 최소, 최댓값 검사
                    if (type==='plus' && is < maxLength) {
                        is = is + 0.1;
                    } else if (type==='minus' && is > 0)  {
                        is = is - 0.1;
                    }
                    
                    return {
                        ...item,
                        score: is,
                    }
                } else {
                    return item
                }
            })
        });
    }

    handleToggle = id => {
        this.setState({
            list: this.state.list.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        done: !item.done,
                    }
                } else {
                    return item;
                }
            })
        });
    }

	render() {
        const type = 'Feed';

		return (
			<div className="App">
				<h3>LIST OF {type}</h3>
				<CreateForm onInsert={this.handleInsert} type={type} />
				<List list={this.state.list} onRemove={this.handleRemove} onToggle={this.handleToggle} onScore={this.handleScore} />
			</div>
		);
	}
}

export default App;
