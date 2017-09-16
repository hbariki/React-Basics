import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoList todos={['red','blue']}/>, document.getElementById('root'));
registerServiceWorker();
