import React, { Component } from 'react';
import Button from '../general/Button';
import Input from "../general/Input";

export default class Counter extends Component {
  constructor() {
    super();    
    this.state = {
      count: 1
    }
    
    this.minCounter = 1;
    this.maxCounter = 10;
    this.handleChange = this.handleChange.bind(this);  
  }

  handleChange = (event) => {
    this.setState({
      count: event.target.value
    });
    this.calc();
  }

  handleAdd = () => {
    if(this.state.count < this.maxCounter) {
      this.setState((state) => ({
        count: state.count + 1
      }));
      this.props.callback(this.state.count+1);
    }
    
  }

  handleSubstract = () => {
    if(this.state.count > this.minCounter) {
      this.setState((state) => ({
        count: state.count - 1
      }));
      this.props.callback(this.state.count-1);
    }
    
  }


  render() {
    return (
      <div>
          <Button
            onClick={this.handleSubstract}
            sign={"-"}
            class={"btnCounter"}
          />
          <Input
            count={this.state.count}
            handleChange={this.handleChange}
          />
          <Button
            onClick = {this.handleAdd}
            sign={"+"}
            class={"btnCounter"}
          />
      </div>
    );
  }
}