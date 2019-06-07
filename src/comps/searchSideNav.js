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
        // console.log(this.props)
        this.props.sendSearchParams(this.state)
    }
    state={
        stickers: "",
        gunName: "",
        pagesToSearch: 100
    }
    render() {
        return (
            <>
            <MDBContainer 
            id="SearchSideNav"
            style={{position: "fixed"}}
            >
                
                <MDBInput 
                label="Stickers"
                id="stickers"
                size="lg"
                value={this.state.stickers}
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
                label="Stickers"
                id="pagesToSearch"
                size="lg"
                value={this.state.pagesToSearch}
                onChange={this._onChange.bind(this)}
                />
                <MDBBtn 
                color="success"
                onClick={this._onSubmit}
                    >Success
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