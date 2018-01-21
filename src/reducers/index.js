import { combineReducers } from 'redux';
import {
    fetchHotBoardsStarting,
    fetchHotBoardsSuccess,
    fetchHotBoardsFailure,
    selectBoard
} from './hotBoardsReducer';

import {
    fetchArticleListStarting,
    fetchArticleListSuccess,
    fetchArticleListFailure,
    setPagination
} from './articlesReducer';

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
    pagination: setPagination
};
const rootReducers = combineReducers(
    Object.assign(hotBoardsReducer, articlesReducer)
);

export default rootReducers;
