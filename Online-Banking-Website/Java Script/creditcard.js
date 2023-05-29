function submitbb(){
    alert('The request is completed successfully ');
    let redirectLink = document.getElementById("redirectLink");
    redirectLink.setAttribute("href", "home.html");
        redirectLink.click();
}
