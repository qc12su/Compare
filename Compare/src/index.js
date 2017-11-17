import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Item from './Item';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Item name="Apple" desc="I like apples." price = {"$9.99"} score = {0} pic="http://thefishbowlnetwork.com/blog/wp-content/uploads/2014/01/apple.jpg" />, document.getElementById('item1'));
ReactDOM.render(<Item name="Orange" desc="I like oranges." price = {"$19.99"} score = {0} pic="http://blog.writeathome.com/wp-content/uploads/2012/07/orange.jpg" />, document.getElementById('item2'));
registerServiceWorker();
