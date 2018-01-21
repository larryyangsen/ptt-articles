import axios from 'axios';
import { fetchArticleList } from './articles';
const hotBoardsBaseUrl = `${window.location.protocol}//${
    window.location.hostname
}:9999/ptt/hot-boards`;

export const FETCH_HOT_BOARDS_START = 'FETCH_HOT_BOARDS_START';
export const fetchHotBoardsStart = isStart => ({
    type: FETCH_HOT_BOARDS_START,
    isStart
});

export const FETCH_HOT_BOARDS_SUCCESS = 'FETCH_HOT_BOARDS_SUCCESS';
export const fetchHotBoardsSuccess = (boards = []) => ({
    type: FETCH_HOT_BOARDS_SUCCESS,
    boards
});

export const FETCH_HOT_BOARDS_FAILURE = 'FETCH_HOT_BOARDS_FAILURE';
export const fetchHotBoardsFailure = error => ({
    type: FETCH_HOT_BOARDS_FAILURE,
    error
});

export const SELECT_BOARD = 'SELECT_BOARD';
export const selectBoard = board => {
    document.title = board;
    return { type: SELECT_BOARD, board };
};

export const fetchHotBoards = () => dispatch => {
    dispatch(fetchHotBoardsStart(true));
    return axios
        .get(hotBoardsBaseUrl)
        .then(res => {
            const board = res.data[0].name;
            dispatch(selectBoard(board));
            dispatch(fetchArticleList(board));
            return dispatch(fetchHotBoardsSuccess(res.data));
        })
        .catch(error => dispatch(fetchHotBoardsFailure(error)));
};
