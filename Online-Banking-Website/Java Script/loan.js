function car_loan(){
    alert('Please enter needed information')
    window.location.replace( "Carloan.html" );
}
function personal_loan(){
    alert('Please enter needed information')
    window.location.replace( "personalloan.html" );
}
function submittt(){
    alert('Your request is sent to the bank and is currently being reviewed..this process will take a few days ');
    window.location.replace( "home.html" );
}

function loan() {
    let username = document.getElementById('name').value;
    let id = document.getElementById('id').value;
    let accno = document.getElementById('accno').value;
    let mobilee = document.getElementById('mobile').value;

    if (username=="" ||id==""|| accno==""||mobilee=="" ) {
    
        alert('please enter all data');
    }
    else {
        alert('Your request is sent to the bank and is currently being reviewed..this process will take a few days ');
        window.location.replace( "home.html" );

    }
}
