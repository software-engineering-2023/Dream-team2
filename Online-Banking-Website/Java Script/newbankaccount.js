function submittt(){
    alert( "submitted successfully" );
        window.location.replace( "home.html" );
        return true; 
}
function creditcardm(){
    let username = document.getElementById('Name').value;
    let mobile= document.getElementById('mobile').value;
    let id = document.getElementById('id').value;
    let hh = document.getElementById('nameh').value;
    
    if (username==""||mobile==""||id==""||hh=="" ) {
    
        alert('please enter all data');
    }
    else {
        alert('Your request is sent to the bank and is currently being reviewed..this process will take a few days ');
        window.location.replace( "home.html" );

    }
}
    