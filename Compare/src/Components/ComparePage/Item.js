import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';

import '../../App.css';

const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: '10px'
    }
}

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { itemName, brand, description, image, price, score } = this.props;

      const cardStyle = {
          overflow: 'hidden',
          textAlign: 'center',
          float: 'left',
          margin: '25px',
          height: '550px',
          width: '400px'
      }

      const imageStyle = {
          display: 'inline-block',
          margin: '15px',
          maxWidth: '50%',
          maxHeight: '50%',
          minWidth: '50%',
          minHeight: '50%'
      }

      const cardTitleContainerStyle = {
          paddingTop:"0px"
      }

      const cardTitleStyle = {
          fontSize: '18px',
          lineHeight: '20px'
      }

    return (
        <Card style={cardStyle}>
            <CardMedia style={imageStyle}>
                <img src={image} alt="" />
            </CardMedia>
            <hr/>
            <div className={"CardTextContainer"}>
                <CardTitle style={cardTitleContainerStyle}
                           title={itemName} titleStyle={cardTitleStyle}
                           subtitle={brand} />
                <div style={styles.wrapper}>
                    <Chip style={styles.chip}>
                        Stretch
                    </Chip>
                    <Chip style={styles.chip}>
                        On Sale
                    </Chip>
                    <Chip style={styles.chip}>
                        Water Resistant
                    </Chip>
                </div>
                <CardText>
                    ${price}
                </CardText>
                <CardActions className={"CardActions"}>
                    <RaisedButton label="Vote" className={"LikeButton"}
                                  backgroundColor={"transparent"} labelColor={"#000"}/>
                </CardActions>
            </div>
        </Card>
    );
  }
}
export default Item;