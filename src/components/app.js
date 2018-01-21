import React, { Component } from 'react';
import HotBoards from '../containers/hot_boards';
import Articles from '../containers/articles';
class App extends Component {
    render() {
        return (
            <div>
                <HotBoards />
                <Articles />
            </div>
        );
    }
}

export default App;
