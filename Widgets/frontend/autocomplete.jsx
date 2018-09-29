import React from 'react';

class Autocomplete extends React.Component {
  constructor(props){
    super();
    this.state = {inputVal: ''};
    this.names = props.namesProps;
    this.filterName = this.filterName.bind(this);
  }

  render(){
    return <div>
      <input type="text" value="" onChange={()=>filterName()}></input>
      <ul>
        {this.names.map(name => <li>{name}</li>)}
      </ul>
    </div>;
  }

  filterName(){
    const query = document.querySelector('input').val();
    this.names = this.names.filter((name)=> {
      name.includes(query);
    });
    this.setState({inputVal: query});
  }
}

export default Autocomplete;
