import { combineReducers } from 'redux';
import { fetchHotBoardsStarting, fetchHotBoardsSuccess, fetchHotBoardsFailure, selectBoard } from './hotBoardsReducer';

import {
    fetchArticleListStarting,
    fetchArticleListSuccess,
    fetchArticleListFailure,
    setPagination,
    setMaxPage
} from './articlesReducer';

import { fetchArticleStarting, fetchArticleSuccess, fetchArticleFailure, setArticleShowing } from './articleReducer';
const hotBoardsReducer = {
    startingFetchHotBoards: fetchHotBoardsStarting,
    boards: fetchHotBoardsSuccess,
    selectedBoard: selectBoard,
    fetchHotBoardsError: fetchHotBoardsFailure
};
const articlesReducer = {
    startingFetchArticleList: fetchArticleListStarting,
    articles: fetchArticleListSuccess,
    fetchArticleListError: fetchArticleListFailure,
    pagination: setPagination,
    maxPageNumber: setMaxPage
};
const articleReducer = {
    startingFetchArticle: fetchArticleStarting,
    article: fetchArticleSuccess,
    fetchArticleError: fetchArticleFailure,
    isArticleShowing: setArticleShowing
};
const rootReducers = combineReducers(Object.assign(hotBoardsReducer, articlesReducer, articleReducer));

export default rootReducers;
