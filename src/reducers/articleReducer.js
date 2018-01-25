import {
    FETCH_ARTICLE_START,
    FETCH_ARTICLE_SUCCESS,
    FETCH_ARTICLE_FAILURE,
    SET_ARTICLE_SHOWING
} from '../actions/article';

export const fetchArticleStarting = (state, action) => {
    switch (action.type) {
        case FETCH_ARTICLE_START:
            return true;
        default:
            return false;
    }
};

export const fetchArticleFailure = (state = null, action) => {
    switch (action.type) {
        case FETCH_ARTICLE_FAILURE:
            return action.error;
        default:
            return state;
    }
};

export const fetchArticleSuccess = (state = [], action) => {
    switch (action.type) {
        case FETCH_ARTICLE_SUCCESS:
            return action.article;
        default:
            return state;
    }
};

export const setArticleShowing = (state = true, action) => {
    switch (action.type) {
        case SET_ARTICLE_SHOWING:
            return action.isShowing;
        default:
            return state;
    }
};
