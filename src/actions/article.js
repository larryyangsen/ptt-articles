import axios from 'axios';
const baseUrl = `${window.location.origin}/ptt/article/`;

export const FETCH_ARTICLE_START = 'FETCH_ARTICLE_START';
export const fetchArticleStart = isStart => ({
    type: FETCH_ARTICLE_START,
    isStart
});

export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
export const fetchArticleSuccess = article => ({
    type: FETCH_ARTICLE_SUCCESS,
    article
});

export const SET_ARTICLE_SHOWING = 'SET_ARTICLE_SHOWING';
export const setArticleShowing = isShowing => ({
    type: SET_ARTICLE_SHOWING,
    isShowing
});

export const FETCH_ARTICLE_FAILURE = 'FETCH_ARTICLE_FAILURE';
export const fetchArticleFailure = error => ({
    type: FETCH_ARTICLE_FAILURE,
    error
});

export const fetchArticle = link => dispatch => {
    dispatch(fetchArticleStart(true));
    axios
        .post(`${baseUrl}`, { link })
        .then(res => {
            dispatch(setArticleShowing(true));
            return dispatch(fetchArticleSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchArticleFailure(error));
        });
};
