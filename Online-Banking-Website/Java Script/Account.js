

function return_home_page(){
    let redirectLink = document.getElementById("redirectLink");
    redirectLink.setAttribute("href", "home.html");
        redirectLink.click();


}
function return_home_page2(){
    alert('Your request is sent to the bank and is currently being reviewed..this process will take a few days! ');
    let redirectLink = document.getElementById("redirectLink");
    redirectLink.setAttribute("href", "home.html");
        redirectLink.click();
}

function Report_issues(){
    let redirectLink = document.getElementById("redirectLink");
    redirectLink.setAttribute("href", "issues.html");
        redirectLink.click();
        

}
function submitt(){
    alert('your report is sent successfully ');
    let redirectLink = document.getElementById("redirectLink");
    redirectLink.setAttribute("href", "home.html");
        redirectLink.click();
}



