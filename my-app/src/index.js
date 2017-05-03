
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hasHistory} from "react-router";
import FlexExample from './routes/home';
import Category from './routes/category/index';
import List from './routes/category/list';
import Register from './routes/register/index';
import Complete from './routes/register/complete';


const App = ()=><Router history={hasHistory}>
    
  <Route path="/register" component={Register}/>
  <Route path="/complete" component={Complete}/>
  <Route path="/category" component={Category}/>
  <Route path="/list" component={List}/>
</Router>;

ReactDOM.render(<App/>, document.getElementById('root'));