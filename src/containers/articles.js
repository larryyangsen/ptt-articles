import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, Button, Icon } from 'antd';
import { fetchArticleList } from '../actions/articles';
import { fetchArticle, setArticleShowing } from '../actions/article';
import ArticleTitle from '../components//article-list-title';
import Article from '../components/article-content';
// import InfiniteScroll from 'react-infinite-scroller';
import '../style/articles.css';

const ButtonGroup = Button.Group;
class Articles extends Component {
    constructor(props) {
        super(props);
        this.preArticleList = this.preArticleList.bind(this);
        this.nextArticleList = this.nextArticleList.bind(this);
    }
    preArticleList() {
        const { board, page } = this.props.pagination.pre;
        this.props.fetchArticleList(board, page);
    }
    nextArticleList() {
        const { board, page } = this.props.pagination.next;
        this.props.fetchArticleList(board, page);
    }
    render() {
        if (this.props.fetchArticleListError) {
            return <p>We got error：{this.props.fetchArticleListError}</p>;
        }
        if (this.props.startingFetchArticleList) {
            return <p>Loading..</p>;
        }

        if (!this.props.articles.length) {
            return <p>No Result..</p>;
        }
        return (
            <div>
                {!this.props.isArticleShowing && (
                    <div>
                        >
                        <div className="article-list">
                            <List
                                size="large"
                                bordered
                                dataSource={this.props.articles}
                                renderItem={article => (
                                    <List.Item>
                                        {article.title ? (
                                            <ArticleTitle {...article} fetch={this.props.fetchArticle}>
                                                {article.title}
                                            </ArticleTitle>
                                        ) : (
                                            <p> 『已經不存在了」</p>
                                        )}
                                    </List.Item>
                                )}
                            />
                        </div>
                        <div className="articles-btn-group">
                            <ButtonGroup>
                                {this.props.pagination.pre && (
                                    <Button onClick={this.preArticleList}>
                                        <Icon type="caret-left" />
                                    </Button>
                                )}
                                <Button onClick={() => this.props.fetchArticleList(this.props.selectedBoard)}>
                                    <Icon type="reload" />
                                </Button>
                                {this.props.pagination.next && (
                                    <Button onClick={this.nextArticleList}>
                                        <Icon type="caret-right" />
                                    </Button>
                                )}
                            </ButtonGroup>
                        </div>
                    </div>
                )}
                {this.props.isArticleShowing && (
                    <Article {...this.props.article} setArticleShowing={this.props.setArticleShowing} />
                )}
                <div />
            </div>
        );
    }
}

const mapStateToProps = ({
    startingFetchArticleList,
    article,
    isArticleShowing,
    articles,
    pagination,
    maxPageNumber,
    selectedBoard,
    fetchArticleListError
}) => ({
    startingFetchArticleList,
    articles,
    article,
    isArticleShowing,
    pagination,
    maxPageNumber,
    selectedBoard,
    fetchArticleListError
});

export default connect(mapStateToProps, { fetchArticleList, fetchArticle, setArticleShowing })(Articles);
