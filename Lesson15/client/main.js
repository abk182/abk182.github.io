import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app.jsx';
import { Reducer_1 } from './reducers/reducer.js'
import { getUsers } from './requests/request.js'

const store = createStore(Reducer_1);
console.log(store.getState());

//запрос на сервер
getUsers().then((UsersList) => {
	console.log(UsersList);
	store.dispatch({type:'GET_USERS', UsersList})
});

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,
	document.getElementById('root'));