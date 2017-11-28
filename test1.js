function placeAndDateDetails() {
    let area = document.querySelector('.searchBox').value;
    let entry_date = document.querySelector('.pick-date').value;
    let return_date = document.querySelector('.return-date').value;
    let age = document.querySelector('.age-select').value;

    if (entry_date > return_date) {
        alert("PLEASE ENTER CORRECT DATE");
        return false;
    } else if (!area || !entry_date || !return_date || age == undefined) {

        alert("PLEASE ENTER ALL THE FIELDS");

        return false;
    } else {
    return true;

    }
}
