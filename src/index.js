import React from 'react';
import './index.css';
import App from './App';
import { render } from "react-dom";
import { DataProvider } from './context/data_context';
import { FilterProvider } from './context/filter_context';


render(
  <DataProvider>
  <FilterProvider>
    <App />
  </FilterProvider>,
  </DataProvider>,
  document.getElementById("root")
);
