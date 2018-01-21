import axios from 'axios';
const apiBaseUrl = `${window.location.protocol}//${
    window.location.hostname
}:9999/ptt/`;

export const FETCH_ARTICLE_LIST_START = 'FETCH_ARTICLE_LIST_START';
export const fetchArticleListStart = isStart => ({
    type: FETCH_ARTICLE_LIST_START,
    isStart
});

export const FETCH_ARTICLE_LIST_SUCCESS = 'FETCH_ARTICLE_LIST_SUCCESS';
export const fetchArticleListSuccess = (articles = []) => ({
    type: FETCH_ARTICLE_LIST_SUCCESS,
    articles
});

export const FETCH_ARTICLE_LIST_FAILURE = 'FETCH_ARTICLE_LIST_FAILURE';
export const fetchArticleListFailure = error => ({
    type: FETCH_ARTICLE_LIST_FAILURE,
    error
});

export const SELECT_ARTICLE = 'SELECT_ARTICLE';
export const selectArticle = article => ({ type: SELECT_ARTICLE, article });

export const SET_PAGINATION = 'SET_PAGINATION';
export const setPagination = (board = '', page, curPage) => {
    const pre = { board, page };
    const next = curPage === 'index' ? null : { board, page: page + 2 };
    return {
        type: SET_PAGINATION,
        pagination: { pre, next }
    };
};

export const fetchArticleList = (board, page = 'index') => dispatch => {
    dispatch(fetchArticleListStart(true));
    return axios
        .get(`${apiBaseUrl}${board}/${page}?pageCounts=2`)
        .then(res => {
            dispatch(setPagination(board, res.data.prePageNumber, page));
            return dispatch(fetchArticleListSuccess(res.data.items));
        })
        .catch(error => dispatch(fetchArticleListFailure(error)));
};

export const fetchArticle = article => dispatch => {};
