import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import react from 'react';
import Layout from './components/Layout';
import Card from './components/Card'

ReactDOM.render(
 <react.Fragment  >
   <Layout className="body-app" >
     <Card>
      <App />

     </Card>
   </Layout>
 </react.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
