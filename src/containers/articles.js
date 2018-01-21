import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, Button, Icon } from 'antd';
import { fetchArticleList } from '../actions/articles';
// import InfiniteScroll from 'react-infinite-scroller';
import '../style/articles.css';

class Articles extends Component {
    preArticleList() {
        console.log(this.props);
        const { board, page } = this.props.pagination.pre;
        this.props.fetchArticleList(board, page);
    }
    nextArticleList() {
        console.log(this.props);
        const { board, page } = this.props.pagination.next;
        this.props.fetchArticleList(board, page);
    }
    render() {
        if (this.props.fetchArticleListError) {
            return <p>We got error：{this.props.fetchHotBoardsError}</p>;
        }
        if (this.props.startingFetchArticleList) {
            return <p>Loading..</p>;
        }

        if (!this.props.articles.length) {
            return <p>Loading..</p>;
        }
        return (
            <div>
                <div className="article-list">
                    <List
                        size="large"
                        bordered
                        dataSource={this.props.articles}
                        renderItem={article => (
                            <List.Item>
                                {article.title ? (
                                    <a href={article.link}>{article.title}</a>
                                ) : (
                                    <p> 『已經不存在了」</p>
                                )}
                            </List.Item>
                        )}
                    />
                </div>
                {this.props.pagination.pre && (
                    <Button onClick={this.preArticleList.bind(this)}>
                        <Icon type="caret-left" />
                    </Button>
                )}
                {this.props.pagination.next && (
                    <Button onClick={this.nextArticleList.bind(this)}>
                        <Icon type="caret-right" />
                    </Button>
                )}
            </div>
        );
    }
}

const mapStateToProps = ({
    startingFetchArticleList,
    articles,
    pagination,
    fetchArticleListError
}) => ({
    startingFetchArticleList,
    articles,
    pagination,
    fetchArticleListError
});

export default connect(mapStateToProps, { fetchArticleList })(Articles);
