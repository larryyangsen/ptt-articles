import {
    FETCH_ARTICLE_LIST_START,
    FETCH_ARTICLE_LIST_SUCCESS,
    FETCH_ARTICLE_LIST_FAILURE,
    SET_PAGINATION,
    SET_MAX_PAGE,
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
export const setPagination = (state = {}, action) => {
    switch (action.type) {
        case SET_PAGINATION:
            return action.pagination;
        default:
            return state;
    }
};
export const setMaxPage = (state = 0, action) => {
    switch (action.type) {
        case SET_MAX_PAGE:
            return action.page;
        default:
            return state;
    }
};
