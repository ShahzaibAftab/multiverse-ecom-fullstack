import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
