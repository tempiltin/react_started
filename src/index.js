import React from 'react'; // bu facebook ni maxsuloti
import ReactDOM from 'react-dom/client'; // bu reactni domi
// reactni uzi yozib beradi avtomatik kutubxonani uzi App.js ni import qilib quyadi
import App from './App';
// bootstrap kutubxonasini uladik
import "bootstrap/dist/css/bootstrap.min.css";
// index.css faylini uladik
import "./index.css"
// public papkasidan index.html fayli ichidan #root nomli idni chaqirib ichiga yozib beryapti
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);