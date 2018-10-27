import React from 'react';
// import assets from '../assets';
// import HomeTabbarItem from './home-tabbar-item';
import {
    Link    
} from 'react-router-dom';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class ImageTitleDesMorelinkItem extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {

        const title = this.props.title.capitalize();
        // const asset = this.props.asset;
        // const readmore = this.props.readmore;
        const oriDes = this.props.description;
        // const realDes = this.props.description;
        // const layoutclass = `col-${12 / this.props.cols}`;

        return (
            <Card className={this.props.className} style={{border: 0}}>
                <CardImg top width="100%" src={`${this.props.asset}`} alt="Card image cap" />
                <CardBody className="px-0">
                    <CardTitle>{title}</CardTitle>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                    <CardText>
                        {oriDes}
                        { 
                            this.props.readmore? (<Link className = "ola-link" to="/">readmore...</Link>):''    
                        }
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}
export default ImageTitleDesMorelinkItem;