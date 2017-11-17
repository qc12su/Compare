import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Item.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 300,
      score: 0
    };
  }
  render() {
    var { name, desc, pic, price } = this.props;
    var { height,score } = this.state;
    return (
      <div className="item-box">
        <h2>{name} {price} </h2>
        <h2>{score}</h2>
        <img src={pic} height={height} />
        <h4>Description: {desc}</h4> 
        <br />
        <button onClick={this.voteButton.bind(this)}>Thumbs Up</button>
      </div>
    );
  }
  voteButton() {
    this.setState({score: this.state.score + 1});
  }
}
// props
// state

export default Item;