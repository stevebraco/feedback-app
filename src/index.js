import React from 'react';
import './index.css';
import App from './App';
import { render } from "react-dom";
import { DataProvider } from './context/data_context';


render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById("root")
);
