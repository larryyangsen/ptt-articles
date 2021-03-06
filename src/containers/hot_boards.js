import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Select, Input } from 'antd';
import { fetchHotBoards, selectBoard } from '../actions//hot_baords';
import { fetchArticleList } from '../actions/articles';

const Searh = Input.Search;
const Option = Select.Option;
class HotBoards extends Component {
    componentDidMount() {
        this.props.fetchHotBoards();
    }
    onBoardChange(board) {
        this.props.selectBoard(board);
        this.props.fetchArticleList(board);
    }
    renderBoards({ name, title }) {
        return (
            <Option key={name} value={name}>
                {name}-{title}
            </Option>
        );
    }
    render() {
        if (this.props.fetchHotBoardsError) {
            return <p>We got error：{this.props.fetchHotBoardsError}</p>;
        }
        if (!this.props.boards.length) {
            return <p>No Result...</p>;
        }
        if (this.props.startingFetthHotBoards) {
            return <p>Loading..</p>;
        }
        return (
            <div>
                <Searh placeholder="Board Name" onSearch={value => this.onBoardChange(value)} enterButton />
                <Select
                    defaultValue={this.props.boards[0].name}
                    style={{ width: '100%' }}
                    showSearch={true}
                    onChange={this.onBoardChange.bind(this)}>
                    {this.props.boards.map(this.renderBoards)}
                </Select>
            </div>
        );
    }
}
HotBoards.propTypes = {
    boards: PropTypes.array,
    selectedBoard: PropTypes.string
};
const mapStateToProps = ({ startingFetthHotBoards, boards, selectedBoard, error }) => ({
    startingFetthHotBoards,
    boards,
    selectedBoard,
    error
});
export default connect(mapStateToProps, {
    fetchHotBoards,
    selectBoard,
    fetchArticleList
})(HotBoards);
