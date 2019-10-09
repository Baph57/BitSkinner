import React, { Component } from 'react';
import { connect } from "react-redux"
import "./styles/SearchSideNav.css"
import GunDiv from "./gunDiv"
import {
    MDBContainer, 
    MDBRow, 
    MDBCol,
    MDBInput
} from 'mdbreact'

const mapStateToProps=({reduxer})=>({reduxer})

class ImageContainer extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        var itemsToRender;
        console.log("Image Container props: ", this.props)

        if(this.props.reduxer && this.props.reduxer.length > 0)
        {
            itemsToRender = this.props.reduxer.map(x => {
                return <GunDiv key={x.item_id} gunInfo={x}/>
            })
        }

        return (
            <>
            <MDBContainer 
            fluid
            id="ImageContainer"
            >
            searchSideNav
            <MDBRow style={{width: "100%"}}>
            {itemsToRender}
            </MDBRow>
            </MDBContainer>
            </>
        )
    }
}

export default connect(mapStateToProps, null)(ImageContainer);
