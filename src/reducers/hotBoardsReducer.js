import {
    FETCH_HOT_BOARDS_START,
    FETCH_HOT_BOARDS_SUCCESS,
    FETCH_HOT_BOARDS_FAILURE,
    SELECT_BOARD
} from '../actions/hot_baords';

export const fetchHotBoardsStarting = (state, action) => {
    switch (action.type) {
        case FETCH_HOT_BOARDS_START:
            return true;
        default:
            return false;
    }
};

export const fetchHotBoardsFailure = (state = null, action) => {
    switch (action.type) {
        case FETCH_HOT_BOARDS_FAILURE:
            return action.error;
        default:
            return state;
    }
};

export const fetchHotBoardsSuccess = (state = [], action) => {
    switch (action.type) {
        case FETCH_HOT_BOARDS_SUCCESS:
            return action.boards;
        default:
            return state;
    }
};

export const selectBoard = (state = '', action) => {
    switch (action.type) {
        case SELECT_BOARD:
            return action.board;
        default:
            return state;
    }
};
