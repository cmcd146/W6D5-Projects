import React from 'react';

class Tabs extends React.Component {
  constructor(props){
    super();
    this.state = { selectedTabIndex: 0 };
    this.props = props;
    this.showText = this.showText.bind(this);
    this.tabs = this.props.tabsProps;
  }

  render(){
    return <div className="tabs">
      <div className="tab-headers">
        <h1 onClick={()=>this.showText(0)}>{this.tabs[0].title}</h1>
        <h1 onClick={()=>this.showText(1)}>{this.tabs[1].title}</h1>
        <h1 onClick={()=>this.showText(2)}>{this.tabs[2].title}</h1>
      </div>
      <p className="content"> </p>
    </div>;
  }

  showText(index) {

    const p = document.querySelector('.content');
    p.innerHTML = this.tabs[index].content;
  }
}


export default Tabs;
