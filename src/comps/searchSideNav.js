import React, { Component } from 'react';
import sendSearchParams from "../redux/axions/sendSearchParams"
import { connect } from "react-redux"
// import "./styles/SearchSideNav.css"
import {
    MDBContainer, 
    // MDBRow, 
    // MDBCol,
    MDBBtn,
    MDBInput
} from 'mdbreact'
class SearchSideNav extends Component {
    constructor(props){
        super(props)
        this.state={
            stickerName: "",
            gunName: "",
            pagesToSearch: 100
        }
    }
    _onChange = e => {
        e.preventDefault()
        let test = {}
        test[e.target.id] = e.target.value
        // console.log(test,'test')
        // console.log(this.state, 'state')
        this.setState(test)
        // let gunName = e.target.value
    }
    _onSubmit = e => {
        e.preventDefault();
        console.log("Search Side Nav Props: ",this.props)
        console.log("Search Side Nav State: ",this.state)
        this.props.sendSearchParams(this.state)
    }
    render() {
        return (
            <>
            <MDBContainer 
            id="SearchSideNav"
            style={{position: "fixed"}}
            >
                
                <MDBInput 
                label="stickerName"
                id="stickerName"
                size="lg"
                value={this.state.stickerName}
                onChange={this._onChange.bind(this)}
                />
                <MDBInput 
                label="Gun Name"
                id="gunName"
                size="lg"
                value={this.state.gunName}
                onChange={this._onChange.bind(this)}
                />
                <MDBInput 
                label="pagesToSearch"
                id="pagesToSearch"
                size="lg"
                value={this.state.pagesToSearch}
                onChange={this._onChange.bind(this)}
                />
                <MDBBtn 
                color="success"
                onClick={this._onSubmit}
                    >Submit
                </MDBBtn>
            </MDBContainer>
            </>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    sendSearchParams: (data) => {
        dispatch(sendSearchParams(data))
    }
})
export default connect(null,mapDispatchToProps)(SearchSideNav);
// export default SearchSideNav