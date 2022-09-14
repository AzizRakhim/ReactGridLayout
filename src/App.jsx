import React from "react";

import { MyFirstGrid } from './components/MyFirstGrid/MyFirstGrid';
import { MySecondGrid } from "./components/MySecondGrid/MySecondGrid";

import './App.css';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { MyResponsiveGrid } from "./components/MyResponsiveGrid/MyResponsiveGrid";

function App() {
  return (
    <React.Fragment>
      <MyFirstGrid />
      <hr />
      <MySecondGrid />
      <hr />
      <MyResponsiveGrid />
    </React.Fragment>
  );
}

export default App;
