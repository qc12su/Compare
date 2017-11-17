import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 300,
      score: 0
    };
  }
  render() {
    const { itemName, brand, description, image, price } = this.props;
    const { height,score } = this.state;

      const cardStyle = {
          textAlign: 'center',
          float: 'left',
          margin: '25px',
          height: '800px',
          width: '400px'
      }

      const imageStyle = {
          display: 'inline-block',
          margin: '15px',
          maxWidth: '75%',
          maxHeight: '75%',
          minWidth: '50%',
          minHeight: '50%'
      }

      const textBoxStyle = {
          backgroundColor: 'light-gray'
      }



    return (
        <Card style={cardStyle}>
            <CardMedia>
                <img src={image} alt="" style={imageStyle}/>
            </CardMedia>
            <div style={textBoxStyle}>
                <CardTitle title={itemName} subtitle={brand} />
                <CardText>
                    {description}
                </CardText>
                <CardActions>
                    <FlatButton label="upVote" />
                    <FlatButton label="downVote" />
                </CardActions>
            </div>
        </Card>
    );
  }
}
export default Item;