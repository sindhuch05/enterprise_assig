export {
    last_button
};

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
