function editt(){
    alert('here is the account needed to be edited ');
    window.location.replace( "editacc.html" );
        return true;
}
function block(){
    alert('the account is blocked');
    window.location.replace( "banker_dashboard.html" );
    return true;

}
function closeacc(){
    alert('the account is closed');
    window.location.replace( "banker_dashboard.html" );
    return true;

}
function cancelloan(){
    alert('the loan is cancelled');
    window.location.replace( "banker_dashboard.html" );
    return true;
}
function reportissues(){
    window.location.replace( "issues.html" );
    return true;

}