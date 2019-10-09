import React from 'react';
import { connect } from "react-redux"
import "./styles/gunDiv.css"
import {
    MDBBtn, 
    MDBCard, 
    MDBCardBody, 
    MDBCardImage, 
    MDBCardTitle, 
    MDBCardText, 
    MDBCol,
    MDBRow
} from 'mdbreact'
const GunDiv = (props) => {
    console.log(props.gunInfo,"updated in gundiv")

    //cutting out the floats from the title because I'd rather
    //show this with a numerical value for better accuracy
    var titleComponent;
    var whereToSliceTitle = props.gunInfo.market_hash_name.indexOf("(")
    var slicedTitle = props.gunInfo.market_hash_name.slice(0,whereToSliceTitle)
    if(slicedTitle.includes("StatTrak"))
    {
    titleComponent = 
        <MDBCardText
        id="headerCardText"
        style={{color:"green"}}
        >{slicedTitle}
        </MDBCardText>
    }
    else
    {
        titleComponent = 
        <MDBCardText
        id="headerCardText"
        style={{color:"red"}}
        >{slicedTitle}
        </MDBCardText>
    }
    

    //conditionals to colorize the float value to make it easier
    //for the user to understand at a glance what the float is
    var skeletonFloatText = props.gunInfo.float_value
    var fancyFloatContainer;
    var fancyFloatText = "𝔽𝕍 : " + skeletonFloatText;
    skeletonFloatText < .07 ? 
    fancyFloatContainer = <MDBCardText id="fancyFloatTextFN">{fancyFloatText}</MDBCardText> :
    skeletonFloatText > .07 ? 
    fancyFloatContainer = <MDBCardText id="fancyFloatTextMW">{fancyFloatText}</MDBCardText> :
    skeletonFloatText > .15 ? 
    fancyFloatContainer = <MDBCardText id="fancyFloatTextFT">{fancyFloatText}</MDBCardText> :
    skeletonFloatText > .37 ? 
    fancyFloatContainer = <MDBCardText id="fancyFloatTextWW">{fancyFloatText}</MDBCardText> :
    skeletonFloatText < .44 ? 
    fancyFloatContainer = <MDBCardText id="fancyFloatTextBS">{fancyFloatText}</MDBCardText> :
    console.log('error with colorizing float in gundiv.js')

    


    // console.log(props.gunInfo.stickers,'sticksinGUNDIV')
    var skeletonStickers = props.gunInfo.stickers
    var skeletonStickerArray = []
    for(let i = 0; i < skeletonStickers.length; i++){
        skeletonStickerArray.push(            
            <MDBCardImage
                className="img-fluid"
                style={{height: "60px", width: "60px", marginLeft: "10px"}} 
                src={skeletonStickers[i].url} 
                waves
            />
            )
    }
    // if(skeletonStickers !== null && skeletonStickers !== undefined){
    //     console.log(skeletonStickers)
    // }

    return (
        <MDBCol 
        id="parentContainer" 
        >
            <MDBCard 
            id="mainContainer"
            >
            
            {titleComponent}

            <MDBRow>
                {skeletonStickerArray}
            </MDBRow>

            <MDBCardImage
            className="img-fluid" 
            src={props.gunInfo.image} 
            waves
            />

            <MDBCardBody
            id="detailedInfoForSkin"
            >{fancyFloatContainer}
            Listed Price: ${props.gunInfo.price} <br></br>
            Suggested Price: ${props.gunInfo.suggested_price}

            </MDBCardBody>
                <MDBBtn  
                id="buttonToViewOnBitSkins"
                href={`https://bitskins.com/view_item?app_id=730&item_id=${props.gunInfo.item_id}`}
                >View
                </MDBBtn>
            </MDBCard>
        </MDBCol>
    )
    // }
}
const mapStateToProps=({reduxer})=>({reduxer})
export default connect(mapStateToProps,null)(GunDiv);