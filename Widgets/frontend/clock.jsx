import React from 'react';

class Clock extends React.Component {
  constructor(){
    super();
    // this.state = { time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` };

    this.state = { date: `${new Date().toLocaleDateString()}`,
                  time: `${new Date().toTimeString()}` };
  }

  render(){
    return <div>
      <h1>Clock</h1>
        <div className="clock">
          <div className="clock-time">
            <label> Time </label>
              <h2 id="time">{this.state.time} </h2>
          </div>

          <div className="clock-date">
            <label> Date </label>
              <h2 id="date">{this.state.date} </h2>
          </div>

        </div>
    </div>;
  }

  tick(){
    this.setState({ time: `${new Date().toTimeString()}`,
                    date: `${new Date().toLocaleDateString()}`});
  }

  componentDidMount() {
    this.int = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.int);
  }

}


export default Clock;
