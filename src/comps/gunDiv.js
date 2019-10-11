import React from "react";
import { connect } from "react-redux";
import "./styles/gunDiv.css";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBCol,
    MDBRow
} from "mdbreact";
const GunDiv = props => {
// console.log(props.gunInfo, "updated in gundiv");

  //cutting out the floats from the title because I'd rather
  //show this with a numerical value for better accuracy
var titleComponent;
var whereToSliceTitle = props.gunInfo.market_hash_name.indexOf("(");
var slicedTitle = props.gunInfo.market_hash_name.slice(0, whereToSliceTitle);

var statTrackBackground;
if (slicedTitle.includes("StatTrak")) {
    titleComponent = (
    <MDBCardText 
        id="headerCardText" 
        style={{
            backgroundColor: "black",
            border: "goldenrod outset"
        }}>
            {slicedTitle}
    </MDBCardText>
    );
    statTrackBackground = "#00FF55";
} else {
    titleComponent = (
    <MDBCardText 
        id="headerCardText" 
        style={{
            backgroundColor: "black",
            border: "goldenrod outset"
        }}>
        {slicedTitle}
    </MDBCardText>
    );
    statTrackBackground = "#446AFF";
}

  //conditionals to colorize the float value to make it easier
  //for the user to understand at a glance what the float is
var skeletonFloatText = props.gunInfo.float_value;
var fancyFloatContainer;
var fancyFloatText = " 𝔽𝕍 : " + skeletonFloatText;
skeletonFloatText < 0.07
    ? (fancyFloatContainer = (
        <MDBCardText 
        id="fancyFloatText"
        style={{color:"#00bc8c"}}
        >{fancyFloatText}</MDBCardText>
    ))
    : skeletonFloatText > 0.07
    ? (fancyFloatContainer = (
        <MDBCardText 
        id="fancyFloatText"
        style={{color: "#3498db"}}
        >{fancyFloatText}</MDBCardText>
    ))
    : skeletonFloatText > 0.15
    ? (fancyFloatContainer = (
        <MDBCardText 
        id="fancyFloatText"
        style={{color:"#375a7f"}}
        >{fancyFloatText}</MDBCardText>
    ))
    : skeletonFloatText > 0.37
    ? (fancyFloatContainer = (
        <MDBCardText 
        id="fancyFloatText"
        style={{color: "#f39c12"}}
        >{fancyFloatText}</MDBCardText>
    ))
    : skeletonFloatText < 0.44
    ? (fancyFloatContainer = (
        <MDBCardText 
        id="fancyFloatText"
        style={{color:"#e74c3c"}}
        >{fancyFloatText}</MDBCardText>
    ))
    : console.log("error with colorizing float in gundiv.js");

  // console.log(props.gunInfo.stickers,'sticksinGUNDIV')
var skeletonStickers = props.gunInfo.stickers;
var skeletonStickerArray = [];
for (let i = 0; i < skeletonStickers.length; i++) {
    if (skeletonStickers[i].name.includes("Holo")) {
    skeletonStickerArray.push(
        <MDBCardImage
        className="img-fluid"
        style={{
            height: "50px",
            width: "50px",
            marginLeft: "10px",
            backgroundColor: "#FFD0F3"
        }}
        src={skeletonStickers[i].url}
        waves
        />
    );
    } else {
    skeletonStickerArray.push(
        <MDBCardImage
        className="img-fluid"
        style={{ 
            height: "50px", 
            width: "50px", 
            marginLeft: "10px",
            backgroundColor: "#34274E"
        }}
        src={skeletonStickers[i].url}
        waves
        />
    );
    }
}


// var conditionalPriceRender;
// if(props.gunInfo.price / props.gunInfo.suggested_price > 4){
//     conditionalPriceRender
// }
// Listed Price: ${props.gunInfo.price} <br></br>
// Suggested Price: ${props.gunInfo.suggested_price}


return (
<MDBRow 
    id="parentContainer"
    style={{backgroundColor: "black"}}
>
        <MDBCard 
            id="mainContainer"
            style={{backgroundColor: statTrackBackground}}
        >   {titleComponent}
            <MDBRow
                id="stickerRow"
            >   {skeletonStickerArray}
            </MDBRow>
            <MDBCardImage className="img-fluid" src={props.gunInfo.image} waves />
            <MDBCardBody id="detailedInfoForSkin">
                {fancyFloatContainer}
                Listed Price: ${props.gunInfo.price} <br></br>
                Suggested Price: ${props.gunInfo.suggested_price}
            </MDBCardBody>
            <MDBBtn
                id="buttonToViewOnBitSkins"
                href={`https://bitskins.com/view_item?app_id=730&item_id=${props.gunInfo.item_id}`}
                >View On BitSkins
            </MDBBtn>
        </MDBCard>
</MDBRow>
);
  // }
};
const mapStateToProps = ({ reduxer }) => ({ reduxer });
export default connect(
mapStateToProps,
null
)(GunDiv);


//TODO: implement conditional background color rendering
// console.log("Epoch time of now: " , new Date()) // epoch time of now

// console.log("Epoch time of withdrawal: " , new Date(props.gunInfo.withdrawable_at))
// var colorationToShowWithdrawalStatus;
// if(Date.now() > props.gunInfo.withdrawable_at)
// {
//     colorationToShowWithdrawalStatus = "blue";
// }
// else
// {
//     colorationToShowWithdrawalStatus = "red";
// }