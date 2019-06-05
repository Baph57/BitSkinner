import axios from 'axios'
const {secretKey, apiKey} = require("../../secrets.js")
console.log(secretKey, apiKey)
var totp = require('notp').totp;
var base32 = require('thirty-two');


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
export default () => dispatch =>
axios({
    method: "GET",
    baseURL: "https://www.bitskins.com/api/v1/get_inventory_on_sale/",
    //url: "/api/v1/get_inventory_on_sale/",
    params: {
        "api_key": apiKey,
        "code": totp.gen(base32.decode(secretKey)),
      // "code": totp.gen(base32.decode(secretKey)),
        "page":  1,
        "app_id": "730",
      //"sort_by": {created_at|price}. CS:GO only: wear_value. (optional)
      //"order": {desc|asc} (optional)
        market_hash_name: "",     //Full or partial item name (optional)
      //"min_price": Minimum price (optional)
      //"max_price": Maximum price (optional)
      //"has_stickers": {-1|0|1}. For CS:GO only. (optional)
      //"is_stattrak": {-1|0|1}. For CS:GO only. (optional)
      //"is_souvenir": {-1|0|1}. For CS:GO only. (optional)
        "per_page": "30", /*Results per page. Must be either 30, or 480. (optional)*/
        "show_trade_delayed_items":0 /*{-1|0|1}. For CS:GO only.*/
}}) 
    // .then(res => console.log(res, 'yurt'))
    // .then(res => res.data.data.items)
    // .then(res => res.end(JSON.stringify(res.data.data.items)))
    .then(info => dispatch(sendSearchParams(info.data.data.items)))
    .catch(e => alert(e));