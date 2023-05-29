function redeem(){
    alert('your points is redeemed successfully')
    let redirectLink = document.getElementById("redirectLink");
    redirectLink.setAttribute("href", "points2.html");
        redirectLink.click();
}
function redeemm(){
    alert('No points to redeem')
    let redirectLink = document.getElementById("redirectLink");
    redirectLink.setAttribute("href", "home.html");
        redirectLink.click();
}
