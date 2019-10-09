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
// import store from '../redux/store.js';

// var currentState = this.setState(store.getState())



class ImageContainer extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        
        var itemsToRender;
        console.log("Image Container props: ", this.props)
        // console.log("Store from Redux: ", store.getState())
        //var currentState = store.getState();


        if(this.props.reduxer.data && 
            this.props.reduxer.data.length > 0   )
            // currentState === store.getState()
        {
            itemsToRender = this.props.reduxer.data.map(x => {
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
const mapStateToProps=({reduxer})=>({reduxer})

export default connect(mapStateToProps, null)(ImageContainer);


///// Code Graveyard //////
/* piece of example code from redux docs
        var currentState
        function handleChange() {
        var previousState = currentState
        currentState = store.getState()

        if (previousState !== currentState) {
            console.log(
            'Some deep nested property changed from',
            previousState,
            'to',
            currentState
            )
        }
        }
        const checkStore = store.subscribe(handleChange())
        checkStore();


    handleStoreChange(){this.setState(store.getState())}
    // console.log("store.getState()" , store.getState())
    // this.setState({readyToReRender: true})

*/