function block(){
    alert('the account is blocked');
    window.location.replace( "admin_dashboard.html" );
    return true;

}
function closeacc(){
    alert('the account is closed');
    window.location.replace( "admin_dashboard.html" );
    return true;

}
function banker(){
    window.location.replace( "addbanker.html" );
    return true;
}

    // function submittd(){
    //     alert('this banker is added to our team');
    // window.location.replace( "admin_dashboard.html" );
    // return true;
    // }

    function bankerr(){
        let name = document.getElementById('name').value;
        let mobile= document.getElementById('mobile').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let username = document.getElementById('username').value;
        
        
        if (username==""||mobile==""||email=="" ||password==""|| name=="" ) {
        
            alert('please enter all data');
        }
        else {
            alert('added successfully ');
            window.location.replace( "admin_dashboard.html" );
    
        }
    }
    function bankerblock(){
        window.location.replace( "removebanker.html" );
        return true;
    }
    function remove(){
        let name = document.getElementById('name').value;
        let mobile= document.getElementById('mobile').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let username = document.getElementById('username').value;
        
        
        if (username==""||mobile==""||email=="" ||password==""|| name=="" ) {
        
            alert('please enter all data');
        }
        else {
            alert('Removed successfully ');
            window.location.replace( "admin_dashboard.html" );
    
        }
    }
    function thirdpartyy(){
        let name = document.getElementById('name').value;
        let mobile= document.getElementById('mobile').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let username = document.getElementById('username').value;
        
        
        if (username==""||mobile==""||email=="" ||password==""|| name=="" ) {
        
            alert('please enter all data');
        }
        else {
            alert('added successfully ');
            window.location.replace( "admin_dashboard.html" );
    
        }
    }
function thirdparty(){
    window.location.replace( "thirdpart.html" );
    return true;
}
function Sendd(){
    alert('Sent successfully ');
            window.location.replace( "home2.html" );

}
    