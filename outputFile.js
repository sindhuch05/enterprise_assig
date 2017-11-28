/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__test4__ = __webpack_require__(2);






/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SUVs_List */
/* unused harmony export trucks_list */
/* unused harmony export vans_list */
/* unused harmony export sedan_cars */
/* unused harmony export cars */
/* unused harmony export handleClick */
/* unused harmony export addEventListenerList */
/* unused harmony export allButtonSelectors */


let SUVs_List = [{
        type: `Compact SUV`,
        name: `Jeep Renegade`,
        model: `AUTOMATIC`,
        img: `suv/1452898157384.png`,
        pay: `$35.99`,
        total: `$41.76`
    },
    {
        type: `Intermediate SUV`,
        name: `Nissan Rogue`,
        model: `AUTOMATIC`,
        img: `suv/1478719331487.png`,
        pay: `$35.99`,
        total: `$41.76`
    },
    {
        type: `Standard SUV`,
        name: `Hyundai Santa Fe`,
        model: `AUTOMATIC`,
        img: `suv/1481656603407.png`,
        pay: `$44.99`,
        total: `$51.84`
    },
    {
        type: `Full Size SUV`,
        name: `Chevy Tahoe`,
        model: `AUTOMATIC`,
        img: `suv/1444355008597.png`,
        pay: `$89.90`,
        total: `$102.14`
    },
    {
        type: `Premium SUV`,
        name: `Chevy Suburban`,
        model: `AUTOMATIC`,
        img: `suv/1444355008175.png`,
        pay: `$109.99`,
        total: `$124.64`
    },
    {
        type: `Large Executive Luxury SUV`,
        name: `Cadillac Escalade ESV`,
        model: `AUTOMATIC`,
        img: `suv/1444355008506.png`,
        pay: `Call For Availability`,
        total: `Call For Availability`
    }

];

let trucks_list = [{
    type: `Pickup`,
    name: `Ram 1500 Quad Cab`,
    model: `AUTOMATIC`,
    img: `truck/1444355026452.png`,
    pay: `$48.99`,
    total: `$56.32`
}];

let vans_list = [{
        type: `Minivan`,
        name: `Dodge Grand Caravan`,
        model: `AUTOMATIC`,
        img: `vans/1492744298549.png`,
        pay: `$69.98`,
        total: `$79.83`
    },
    {
        type: `Cargo Van`,
        name: `Chevrolet Express Cargo`,
        model: `AUTOMATIC`,
        img: `vans/1444355044994.png`,
        pay: `$89.99`,
        total: `$91.29`
    }
];

let sedan_cars = [{
        type: `Economy`,
        name: `Mitsubishi Mirage`,
        model: `AUTOMATIC`,
        img: `cars/1492780366644.png`,
        pay: `$22.99`,
        total: `$27.20`
    },
    {
        type: `Compact`,
        name: `Nissan Versa`,
        model: `AUTOMATIC`,
        img: `cars/1492780374467.png`,
        pay: `$23.99`,
        total: `$28.32`
    },
    {
        type: `Intermediate`,
        name: `Hyundai Elantra`,
        model: `AUTOMATIC`,
        img: `cars/1492114317083.png`,
        pay: `$25.99`,
        total: `$30.56`
    },
    {
        type: `Standard`,
        name: `Buick Verano`,
        model: `AUTOMATIC`,
        img: `cars/1481644839466.png`,
        pay: `$28.96`,
        total: `$33.89`
    },
    {
        type: `Full Size`,
        name: `Nissan Altima`,
        model: `AUTOMATIC`,
        img: `cars/1492780372011.png`,
        pay: `$28.99`,
        total: `$33.92`
    },
    {
        type: `Premium`,
        name: `Nissan Maxima`,
        model: `AUTOMATIC`,
        img: `cars/1478719272289.png`,
        pay: `$48.99`,
        total: `$56.32`
    },
    {
        type: `Luxury`,
        name: `Cadillac XTS`,
        model: `AUTOMATIC`,
        img: `cars/1444354848672.png`,
        pay: `$68.98`,
        total: `$78.71`
    }
];

function cars(...cars) {
    for (let i = 0; i < cars.length; i++) {

        let car_type = cars[i].type.toUpperCase();
        let car_name = cars[i].name;
        let car_model = cars[i].model.toUpperCase();
        let car_img = cars[i].img;
        let car_pay = cars[i].pay;
        let car_pay_total = cars[i].total;
        let x = i;

        document.querySelector(".list_cars").innerHTML += `<div class="division">
            <div class="car_type_header"><h3>${car_type}</h3></div>
            <br>  <div class="similar_car_names"> ${car_name}<br>or similar<br></div><br>
            <div class="car_functionality"><b>${car_model}</b></div>
            <img class="car_images" src="${car_img}" alt="">
            <div class="pay_later_header"><b>PAY LATER</b><hr class="rule"></div><br>
            <div class="rates"><div class="ratePerDay">${car_pay}<div class="per-day">Per Day</div></div>
            <div class="verticalLine"></div>
            <div><div class="totalRate">${car_pay_total}<br><div class="total">Total</div></div>
            <div class="rates_included"><a class="rates_included" href="#">What's included</a></div></div></div><br>
            <div class="to_select">
            <button class="selectBox" id=${x} type="button" value=${car_img},${car_pay},${car_pay_total},${car_type}>SELECT</button></div></div>`;

    }

}


cars(...sedan_cars, ...SUVs_List, ...trucks_list, ...vans_list);

document.querySelector(".vehicle_types").addEventListener("change", (event) => {
    if (event.target.value == "Trucks") {
        document.querySelector(".list_cars").innerHTML = "";
        cars(...trucks_list);
        let ar_coins = document.querySelectorAll('button');
        addEventListenerList(ar_coins, 'click', handleClick);
    } else if (event.target.value == "SUVs") {
        document.querySelector(".list_cars").innerHTML = "";
        cars(...SUVs_List);
        let ar_coins = document.querySelectorAll('button');
        addEventListenerList(ar_coins, 'click', handleClick);
    } else if (event.target.value == "Vans") {
        document.querySelector(".list_cars").innerHTML = "";
        cars(...vans_list);
        let ar_coins = document.querySelectorAll('button');
        addEventListenerList(ar_coins, 'click', handleClick);
    } else if (event.target.value == "sedan") {
        document.querySelector(".list_cars").innerHTML = "";
        cars(...sedan_cars);
        let ar_coins = document.querySelectorAll('button');
        addEventListenerList(ar_coins, 'click', handleClick);
    } else {
        document.querySelector(".list_cars").innerHTML = "";
        let all_cars = [...sedan_cars, ...SUVs_List, ...trucks_list, ...vans_list];
        cars(...all_cars);
        let ar_coins = document.querySelectorAll('button');
        addEventListenerList(ar_coins, 'click', handleClick);

    }
});

function handleClick() {
    event.preventDefault();
    console.log(event.target.value);
    let values = event.target.value;
    console.log(values);
    let selected_values = values.split(",");
    console.log(selected_values[1]);
    document.querySelector('.cars_page_header').style.display = "none";
    document.querySelector('.list_cars').style.display = "none";
    document.querySelector('.page3').style.display = "flex";
    document.querySelector('.page3').style.flexWrap = "wrap";
    document.querySelector('.page3').style.justifyContent = "center";

    function* selectedCarDetails() {
        if (selected_values[1] == 'Call') {
            selected_values[2] = 'Call For Availability';
            yield selected_values[0];
            yield `Large Executive Luxury SUV`;
            yield ``;
            yield `Call For Availability`;
            yield `Call For Availability`;

        } else {
            let tax_value = ((selected_values[2].substring(1) * 1) - (selected_values[1].substring(1)) * 1);
            let tax_rounded = tax_value.toFixed(2);
            console.log(tax_rounded);
            yield selected_values[0];
            yield selected_values[3].toLowerCase();
            yield selected_values[1];
            yield '$' + tax_rounded;
            yield selected_values[2];

        }



    }
    const generator = selectedCarDetails();


    document.querySelector('.price_details').innerHTML = `<div><h3 class="price">Price</h3>
<br><br>
<div><img src="${generator.next().value}"></div>
<div><b>VEHICLE</b></div>
<div class="car_and_price"><div>${generator.next().value}</div><div>${generator.next().value}</div></div>
<div class="mileage"><div>Unlimited Mileage</div><div>Included</div></div><br><br>
<div><b>TAXES AND FEES</b></div>
<div class="tax_total"><div>Auto rental Tax</div><div>${generator.next().value}</div></div><br><br>
<div class="total_esti"><div><h3>Estimated Total</h3></div><div><b>${generator.next().value}</b></div></div>
</div>`;

    document.querySelector('.total_amount').innerHTML = selected_values[2];

}


function addEventListenerList(list, event, fn) {
    console.log(list);
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn, false);
    }
}

let allButtonSelectors = document.querySelectorAll('button');
addEventListenerList(allButtonSelectors, 'click', handleClick);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export last_button */


let last_button = document.querySelector('.reserve_button').addEventListener('click', (event)=> {
  event.preventDefault();
    let firstName = document.querySelector('.fname').value;
    let lastName = document.querySelector('.lname').value;
    let phoneNumber = document.querySelector('.phoneNumber').value;
    let emailAddress = document.querySelector('.emailAddress').value;
    if (!firstName || !lastName || !phoneNumber || !emailAddress) {
        alert('Please Enter All The *Fields');

    } else {
        document.querySelector('.page3').style.display = "none";
        document.querySelector('.finalPage').style.display = "flex";
        document.querySelector('.finalPage').style.flexWrap = "wrap";
        document.querySelector('.lastPage').innerHTML=`${firstName} ${lastName}`;
        document.querySelector('.lastPage').style.color="gold";

    }
});


/***/ })
/******/ ]);