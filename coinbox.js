

// let url = "wss://ws-feed.prime.coinbase.com"
// let socket = new WebSocket(url)




// socket.onmessage = function (event) {
//     console.log(event)

// }

// // const io = require("socket.io")

// const socket = io('wss://ws-feed.pro.coinbase.com');

// console.log(socket)

// let ws = new WebSocket('wss://ws-feed.prime.coinbase.com');

// ws.onopen = function () {
//Subscribe to the channel
// ws.send(({

//     type: "subscribe",
//     product_ids: ["BTC-USD"],
//     channel: ["full"]
// }))

//     const msg = {
//         type: 'subscribe',
//         channel: ['full'],

//         market_id: 'BTC-USD'

//     };
//     ws.send(JSON.stringify(msg));
// }

// ws.onmessage = (event) => {
//     console.log(event.data);
// };


const ws = new WebSocket('wss://ws-feed.pro.coinbase.com');

const buyDiv = document.querySelector(".buy")
const sellDiv = document.querySelector(".sell")


ws.onopen = () => {
    const msg = {
        type: 'subscribe',
        channels: ['full'],
        product_ids: ['BTC-USD'],
    };
    ws.send(JSON.stringify(msg));
};
console.log("data");
ws.onmessage = (event) => {
    const data = JSON.parse(event.data)

    // for (let key in data) {
    //     const type = data.side
    //     // console.log(type)

    //     if (type == "buy") {
    //         // console.log("buy", data)

    //         const tradeElement = document.createElement("div")
    //         tradeElement.setAttribute("class", "tradeelement")
    //         const side = document.createElement("p")
    //         const price = document.createElement("p")
    //         const time = document.createElement("p")


    //         side.innerHTML = " type " + data.side + " "
    //         price.innerHTML = " price " + data.price + " "
    //         time.innerHTML = " time " + data.time + " "
    //         tradeElement.append(side, price, time)
    //         buyDiv.appendChild(tradeElement)

    //         let elements = document.querySelector(".tradeelement")
    //         console.log(tradeElement)
    //         if (elements.length > 10) {
    //             tradeElement.removeChild(elements[0])
    //         }

    //     }
    //     if (type == "sell") {
    //         // console.log("sell", data)

    //         const tradeElement = document.createElement("div")
    //         tradeElement.setAttribute("class", "tradeelement")
    //         const side = document.createElement("p")
    //         const price = document.createElement("p")
    //         const time = document.createElement("p")


    //         side.innerHTML = " type " + data.side + " "
    //         price.innerHTML = " price " + data.price + " "
    //         time.innerHTML = " time " + data.time + " "
    //         tradeElement.append(side, price, time)
    //         sellDiv.appendChild(tradeElement)
    //         // let elements = document.querySelector(".tradeelement")
    //         // console.log(elements, elements.length)
    //         // if (elements.length > 10) {
    //         //     tradeElement.removeChild(elements[0])
    //         // }
    //     }
    // }



};

// let obj = [
//     { "order_id": "b61d145c-0bed-4a8e-8397-51e9958e58ba", "order_type": "limit", "size": "0.00240934", "price": "30050.26", "client_oid": "9bda2a93-d568-11ec-a2b2-0aa09ad95c5f", "type": "received", "side": "buy", "product_id": "BTC-USD", "time": "2022-05-16T22:36:20.982362Z", "sequence": 37692097103 },
//     { "price": "30050.26", "order_id": "b61d145c-0bed-4a8e-8397-51e9958e58ba", "remaining_size": "0.00240934", "type": "open", "side": "buy", "product_id": "BTC-USD", "time": "2022-05-16T22:36:20.982362Z", "sequence": 37692097104 },
//     { "order_id": "a98e44fa-4273-4d95-9d63-6780186bb43f", "reason": "canceled", "price": "30050.23", "remaining_size": "0.04337582", "type": "done", "side": "buy", "product_id": "BTC-USD", "time": "2022-05-16T22:36:20.982660Z", "sequence": 37692097105 }
// ]


// for (let key in data) {
//     const type = data[key].side

//     if (type == buy) {
//         console.log("buy", data[key])
//     }
//     if (type == sell) {
//         console.log("sell", data[key])
//     }
// }