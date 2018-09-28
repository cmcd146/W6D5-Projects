import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Start />, root);
});

const tabs = [{title: 'tab1', content: "I am tab1!" },{title: 'tab2', content: "I AM TAB2!"},
              {title: 'tab3', content: 'I am the THIRD TAB'}];
const Start = () => {
  return (
    <div>
      <Clock />
      <Tabs tabsProps={tabs} />
    </div>
  );
};
