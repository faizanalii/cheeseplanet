import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import {Router,Route, Switch} from 'react-router-dom';
import Menu from './components/menu';
import Contact from './components/contact';
import About from './components/about';
import createBrowserHistory from 'history/createBrowserHistory';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {itemscart} from './reducers';
const store=createStore(itemscart);
ReactDOM.render(
	<Provider store={store}>
	<Router history={createBrowserHistory()}>
        <Switch>
          <Route exact={true} path="/" component={App}/>
          <Route path="/about" component={About}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/contact" component={Contact}/>          
        </Switch>
      </Router>
      </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
