function submitttt(){
    alert('your report is sent successfully ');
    window.location.replace( "home.html" );
    return true;
}
function issue(){
    let username = document.getElementById('name').value;
    let mobile= document.getElementById('email').value;
    let id = document.getElementById('problem').value;
    // let accno = document.getElementById('nameh').value;
    
    if (username==""||mobile==""||id=="" ) {
    
        alert('please enter all data');
    }
    else {
        alert('Your request is sent to the bank and is currently being reviewed..this process will take a few days ');
        window.location.replace( "home.html" );

    }
}