import React from 'react';
import { connect } from "react-redux"
// import "./styles/SearchSideNav.css"
import {
    MDBContainer, 
    // MDBRow, 
    // MDBCol,
    // MDBInput
} from 'mdbreact'
const GunDiv = (props) => {
    console.log(props.gunInfo,"updated in gundiv")
    
    // render() {
        // const images = this.props.images.length ?
        // this.props.images.map(x=>{})
        return (
            <>
            <div>
            <img 
            src={props.gunInfo.image}
            alt="there's supposed to be a gun here"
            />
            </div>
            </>
        )
    // }
}
const mapStateToProps=({reduxer})=>({reduxer})
export default connect(mapStateToProps,null)(GunDiv);
// export default GunDiv;