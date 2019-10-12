import React, { Component } from 'react';
import sendSearchParams from "../redux/axions/sendSearchParams"
import { connect } from "react-redux"
import "./styles/SearchSideNav.css"
import {
    MDBContainer, 
    // MDBRow, 
    // MDBCol,
    MDBBtn,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem
} from 'mdbreact'
class SearchSideNav extends Component {
    constructor(props){
        super(props)
        this.state={
            stickerName: "Katowice 2014",
            gunName: "",
            pagesToSearch: 10
        }
        console.log(sendSearchParams)
    }
    _onChange = e => {
        e.preventDefault()
        let inputValues = {}
        inputValues[e.target.id] = e.target.value
        this.setState(inputValues)
    }
    _onSubmit = e => {
        e.preventDefault();
        console.log("Search Side Nav Props: ",this.props)
        console.log("Search Side Nav State: ",this.state)
        var stateCopy = this.state
        var numPagesToSearch = stateCopy.pagesToSearch;
        console.log("PAGES TO SEARCHHHHHHH: ", stateCopy)
        for(let i = 0; i < numPagesToSearch; i++){
            this.props.sendSearchParams(stateCopy)
            stateCopy.pagesToSearch--
        }
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
                <MDBListGroup className="my-4 mx-4" style={{border: "5px silver outset"}}>
                <MDBListGroupItem style={{border: "5px goldenrod inset", color: "white", backgroundColor: "black"}}>Background Color Key</MDBListGroupItem>
                <MDBListGroupItem style={{backgroundColor:"#00FF55"}}>Gun is StatTrak</MDBListGroupItem>
                <MDBListGroupItem style={{backgroundColor:"#FFCB4E"}}>Gun is Souvenir</MDBListGroupItem>
                <MDBListGroupItem style={{backgroundColor:"#446AFF"}}>Gun is NOT StatTrak</MDBListGroupItem>
                <MDBListGroupItem style={{backgroundColor:"#34274E", color: "white"}}>Sticker is Vanilla</MDBListGroupItem>
                <MDBListGroupItem style={{backgroundColor:"#BAB347"}}>Sticker is Foil</MDBListGroupItem>
                <MDBListGroupItem style={{backgroundColor:"#FFD0F3"}}>Sticker is Holo</MDBListGroupItem>
                </MDBListGroup>
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
const mapStateToProps=({reduxer})=>({reduxer})

export default connect(mapStateToProps,mapDispatchToProps)(SearchSideNav);