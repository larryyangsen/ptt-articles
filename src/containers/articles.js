import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'antd';
import '../style/articles.css';

class Articles extends Component {
    renderArticles(article, i) {
        return (
            <li key={i}>
                <a href={article.link}>{article.title}</a>
            </li>
        );
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
        );
    }
}

const mapStateToProps = ({
    startingFetchArticleList,
    articles,
    fetchArticleListError
}) => ({
    startingFetchArticleList,
    articles,
    fetchArticleListError
});

export default connect(mapStateToProps)(Articles);
