import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './components/app.jsx';
import { Reducer_1 } from './reducers/reducer.js';
import sagas from './side-effects/sagas.js';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducer_1,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);
console.log('Store init state', store.getState());


ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,
	document.getElementById('root'));

store.subscribe(()=>{
    console.log('store ', store.getState());
});