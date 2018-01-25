import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import setupStore from './store/setupStore';
import App from './components/app';
const store = setupStore({
    startingFetchHotBoards: true,
    startingFetchArticleList: true,
    isArticleShowing: false
});
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
