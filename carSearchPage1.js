// let a=10;
// export {a};

// function sendData(){
//
//
//     var data = new Array();
//     data[0] = "one, a datum";
//     data[1] = "two, a deer";
//   data[2] = "three, a slash: \\";
//    data[3] = "four has quotes: \"I forget what four was for\"";
//
//
//       // Initialize packed or we get the word 'undefined'
//       var packed = "";
//       for (i = 0; (i < data.length); i++) {
//         if (i > 0) {
//           packed += ",";
//         }
//         packed += escape(data[i]);
//       }
//       window.location = "cars_page.html?" + packed;
// }

function placeAndDateDetails(){
      let area=document.querySelector('.searchBox').value;
    let entry_date=document.querySelector('.pick-date').value;
    let return_date=document.querySelector('.return-date').value;
    let age=document.querySelector('.age-select').value;



  if(entry_date>return_date){
    alert("PLEASE ENTER CORRECT DATE");
    return false;
  }
  else if(!area || !entry_date || !return_date || age==undefined){

    alert("PLEASE ENTER ALL THE FIELDS");

    return false;
  }
  else{


return true;

}
}
