import React, { Component } from 'react';
import './App.css';

import CreateForm from './components/CreateForm';
import SongList from './components/SongList';

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
        const maxLength = 5;

        this.setState({
            list: this.state.list.map(item => {
                if (item.id === id) {
                    // 스코어 변수
                    let is = item.score;
                    
                    // 스코어의 최소, 최댓값 검사
                    if (type==='plus' && is < maxLength) {
                        is++;
                    } else if (type==='minus' && is > 0)  {
                        is--;
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

	render() {
        const type = 'SONG';

		return (
			<div className="App">
				<h3>LIST OF {type}</h3>
				<CreateForm onInsert={this.handleInsert} type={type} />
				<SongList list={this.state.list} onRemove={this.handleRemove} onScore={this.handleScore} />
			</div>
		);
	}
}

export default App;
