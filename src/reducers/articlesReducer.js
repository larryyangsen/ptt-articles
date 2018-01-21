import {
    FETCH_ARTICLE_LIST_START,
    FETCH_ARTICLE_LIST_SUCCESS,
    FETCH_ARTICLE_LIST_FAILURE,
    SELECT_ARTICLE
} from '../actions/articles';

export const fetchArticleListStarting = (state, action) => {
    switch (action.type) {
        case FETCH_ARTICLE_LIST_START:
            return true;
        default:
            return false;
    }
};

export const fetchArticleListFailure = (state = null, action) => {
    switch (action.type) {
        case FETCH_ARTICLE_LIST_FAILURE:
            return action.error;
        default:
            return state;
    }
};

export const fetchArticleListSuccess = (state = [], action) => {
    switch (action.type) {
        case FETCH_ARTICLE_LIST_SUCCESS:
            return action.articles;
        default:
            return state;
    }
};

export const fetchArticle = (state, action) => {};
