import React, { Component } from 'react';
import { connect } from "react-redux"
// import "./styles/SearchSideNav.css"
import GunDiv from "./gunDiv"
import {
    MDBContainer, 
    MDBRow, 
    MDBCol,
    MDBInput
} from 'mdbreact'
class ImageContainer extends Component {
    render() {
        // const images = this.props.images.length ?
        // this.props.images.map(x=>{})
        const itemRenderCheck = this.props.reduxer.length ?
        // this.props.reduxer.map(x=>{console.log(x.market_hash_name)}) : null;
        this.props.reduxer.map(x=>
            <GunDiv key={x.item_id} gunInfo={x}/>
        ) : null;

        return (
            <>
            <MDBContainer 
            fluid
            id="ImageContainer"
            >
                searchSideNav
            <MDBRow>
            {itemRenderCheck}
            </MDBRow>
            </MDBContainer>
            </>
        )
    }
}
const mapStateToProps=({reduxer})=>({reduxer})
export default connect(mapStateToProps,null)(ImageContainer);
// export default connect(null,null)(searchSideNav);
// export default ImageContainer;