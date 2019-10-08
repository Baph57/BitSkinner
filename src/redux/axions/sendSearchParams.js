import axios from 'axios'
var {secretKey, apiKey} = require("../../secrets.js")
console.log(secretKey, apiKey)
// var totp = require('notp').totp;
// var base32 = require('thirty-two');
var dataHelper1;
var filteredData = [];
var nonFilteredData = [];


export const SEND_SEARCH_PARAMS = "SEND_SEARCH_PARAMS";

export const sendSearchParams = info => ({
    type: SEND_SEARCH_PARAMS,
    info
})
//dunkem
// export default () => dispatch => {
//     axios.get('api.openweathermap.org/data/2.5/forecast?q=Phoenix,US&appid=2a6f3d931465abda6155e2401114ccf5&units=imperial',
//     {headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'},
//     baseURL:''})
//     .then(x => console.log(x.json()))
//     .then(x => x.json())
//     .then(x => dispatch(receiveWeather(x)))
//     .catch(e => alert(e));
// }

export default (data) => dispatch => 
axios({
  method: "GET",
  baseURL: "https://www.bitskins.com/api/v1/get_inventory_on_sale/",
  crossdomain: true,
  //url: "/api/v1/get_inventory_on_sale/",
  params: {
    "api_key": apiKey,
    "code": secretKey,
    //"page":  data.pagesToSearch, Page number. (optional)
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
}})
    .then(halp => {
      // var filteredData = [];
      // var nonFilteredData = [];
      console.log(halp.data.data.items)
      dataHelper1 = halp.data.data.items.map( x => {
        if(x.stickers !== null && x.stickers !== undefined){filteredData.push(x)}
        else if(!data.stickers.length){nonFilteredData.push(x)} 
        // console.log(filteredData, 'filtered data')
      })
    })
    .then(() => {dispatch(sendSearchParams(filteredData))})
    .catch(e => alert(e));



          // console.log(info.data.data.items.stickers, 'stickers')
      // console.log(info.data.data.items.map(x=> {

            // if(filteredData.length){x.stickers.map(y=>
        //   y.name.includes(data.stickers) ? filteredData.push(x.stickers[y]) : null)}})
        // console.log(filteredData, 'this filtered')
        // }) 
    
        // .then(res => console.log(res, 'yurt'))
    // .then(res => res.data.data.items)
    // .then(res => res.end(JSON.stringify(res.data.data.items)))