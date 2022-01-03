import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ErrorBoundary} from 'react-error-boundary';
import {BrowserRouter} from 'react-router-dom';
import ErrorFallback from './common/ErrorFallback';

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
