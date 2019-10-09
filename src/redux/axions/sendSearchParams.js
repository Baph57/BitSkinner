import axios from 'axios'
var {secretKey, apiKey} = require("../../secrets.js")
console.log(secretKey, apiKey)
var filteredData = [];

function axiosCall(data){
  return axios({
  method: "GET",
  baseURL: "https://www.bitskins.com/api/v1/get_inventory_on_sale/",
  crossdomain: true,
  params: {
    "api_key": apiKey,
    "code": secretKey,
    "page": data.pagesToSearch, // Page number. (optional)
    "app_id": "730",
    //"sort_by": {created_at|price}. CS:GO only: wear_value. (optional)
    //"order": {desc|asc} (optional)
    market_hash_name: data.gunName,  //Full or partial item name (optional)
    //"min_price": Minimum price (optional)
    //"max_price": Maximum price (optional)
    "has_stickers": 1, //{-1|0|1}. For CS:GO only. (optional)
    //"is_stattrak": {-1|0|1}. For CS:GO only. (optional)
    //"is_souvenir": {-1|0|1}. For CS:GO only. (optional)
    "per_page": "480", /*Results per page. Must be either 30, or 480. (optional)*/
    "show_trade_delayed_items":0 /*{-1|0|1}. For CS:GO only.*/
  }},
  console.log("data: ", data)
  ).then(halp => {
    // if(data.pagesToSearch > 0)
    // {
    //   data.pagesToSearch--
    //   axiosCall(data)
    // }
      console.log("HALP BOBENOBI! ",halp)
      console.log("DATA INSIDE OF THEN ",data)
      var skeletonKey = halp.data.data.items
        var katoBoolCheck = false;
        for(let i = 0; i < skeletonKey.length; i++){
          if(skeletonKey[i].stickers.length > 0)
          {
            for(let j = 0; j < skeletonKey[i].stickers.length; j++){
              if(skeletonKey[i].stickers[j].name.toLowerCase().includes(data.stickerName.toLowerCase()))
              {
                console.log("katoBoolCheck")
                katoBoolCheck = true;
              }
            }
          }
          if(katoBoolCheck === true)
          {
            filteredData.push(skeletonKey[i])
          }
          katoBoolCheck = false;
        }
        console.log("data.pagesToSearch: " , data.pagesToSearch)
        console.log("DataHelper Action: ", filteredData)
      })
    }

export const SEND_SEARCH_PARAMS = "SEND_SEARCH_PARAMS";

export const sendSearchParams = info => ({
    type: SEND_SEARCH_PARAMS,
    info
})
export default data => dispatch => 
    axiosCall(data)
    .then(() => {dispatch(sendSearchParams(filteredData))})
    .catch(e => alert(e));