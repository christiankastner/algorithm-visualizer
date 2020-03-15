import React from 'react';
import p5 from 'p5';
import sketch from './constants/sketch';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.sketch = new p5(sketch, this.myRef.current)
  }

  render() {
    return (
      <div className="App" ref={this.myRef}>
        
      </div>
    );
  }
}

export default App;
