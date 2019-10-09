import React, { Component } from 'react';
import {connect} from 'react-redux'
// import {sampleAction} from './redux/store'
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact'
import SearchSideNav from "./comps/searchSideNav"
import ImageContainer from "./comps/imageContainer"
import "./comps/styles/App.css"
import { 
  BrowserRouter as 
  Router, 
//   Route, 
//   Switch, 
//   Redirect 
} from 'react-router-dom'
class App extends Component {
  _onClick = () => {
    const {update} = this.props
    update()
  }
  render() {
    // const {updated} = this.props
    return (
      <>
      <Router>
        
        <MDBContainer 
        fluid
        id="App"
        > 
          <MDBRow>
            <MDBCol 
            size="2"
            style={{
              padding: "0px !important",
              paddingLeft: "0px !important", //not working
              paddingRight: "0px !important" //not working

              }}
            >
              <SearchSideNav/>
            </MDBCol>
            <MDBCol 
            size="10"
            style={{backgroundColor: "pink"}}
            >
            <ImageContainer/>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        
      </Router>
      </>
    );
  }
}

const mapStateToProps=({reduxer})=>({reduxer})


export default connect(mapStateToProps, null)(App);
