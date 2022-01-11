
//vanilla JS used to make buttons scroll on gallery.
const leftbutton = document.getElementById('left');
const rightbutton = document.getElementById('right');
//find document width and times it by 0.2 to get the width of 20vw
let ScrollWidth = document.body.clientWidth * 0.2;
window.onresize = ScrollWidth = document.body.clientWidth * 0.2;;
rightbutton.addEventListener("click", function () { document.getElementById('project-selector').scrollLeft += ScrollWidth; })
leftbutton.addEventListener("click", function () { document.getElementById('project-selector').scrollLeft += -ScrollWidth })

//arrays to store data for portfolio

const BWMMusicProject = ["BWM Music", "I Created this website using Bootstrap while i was in college to develop my skills in front-end development, i learned key skills about using frameworks and gained lots of experience learning about how bootstrap and CDN's worked. i also learned some key design skills and learned to edit photos for use on websites. I designed this site using illustrator and i edited the photos using photoshop to make them more appealing.", "<div class='techusedbubble grey'>College Project</div><div class='techusedbubble yellow'>Javascript</div><div class='techusedbubble red'>HTML5</div><div class='techusedbubble darkblue'>CSS</div> <div class='techusedbubble lightblue'>Bootstrap 5</div>", "url(../images/BwmMusicThumb.JPG)", "url(../images/BWMmusic/BWM-contact.PNG)", "url(../images/BWMmusic/BWM-comingsoon.PNG)", "url(../images/BWMmusic/BWM-links.PNG)"]
const EReviveProject = ["E-Revive", "While i was in college i was tasked to develop a database-driven web application, so i decided to create eRevive, an online marketplace where you can buy used tech from other users. The application was created using php with a mysql database. It uses CRUD operations to display the product information and gives the users the ability to sign in and add products with an image. The application features a sign in system to provide basic user authentication.<br><br> While i was developing this project, i learned alot about php and basic database security. I used hashing algorithms and salts to securely store user information as well as input sanitization to prevent against sql injection attacks.<br><br> <a style='text-decoration:underline;' href='http://erevive.lauchlyn.com/'>Live Site</a><br>", "<div class='techusedbubble grey'>College Project</div><div class='techusedbubble yellow'>Javascript</div><div class='techusedbubble red'>HTML5</div><div class='techusedbubble darkblue'>CSS</div><div class='techusedbubble phppurple'>PHP</div><div class='techusedbubble sqlorange'>MySql</div>", "url(../images/ERevive/erevivethumb.png)", "url(../images/ERevive/erevivelogin.png)", "url(../images/ERevive/ereviveaddproduct.png)", "url(../images/ERevive/erevivemylistings.png)"]

//code to change project on portfolio


//put project elements into variables
const projectname = document.getElementById("projectname");
const projectinfo = document.getElementById("projectinfo");
const technologiesused = document.getElementById("technologiesused");
const FirstImage = document.getElementById("FirstImage");
const SecondImage = document.getElementById("SecondImage");
const ThirdImage = document.getElementById("ThirdImage");
const FourthImage = document.getElementById("FourthImage");


//display initial project
projectname.innerHTML = BWMMusicProject[0];
projectinfo.innerHTML = BWMMusicProject[1];
technologiesused.innerHTML = BWMMusicProject[2];
FirstImage.style.backgroundImage = BWMMusicProject[3];
SecondImage.style.backgroundImage = BWMMusicProject[4];
ThirdImage.style.backgroundImage = BWMMusicProject[5];
FourthImage.style.backgroundImage = BWMMusicProject[6];

let CurrentPortfolio = BWMMusicProject;


//detect when portfolio is clicked

const bwmprojectthumb = document.getElementById("bwmmusicpane");
const ereviveprojectthumb = document.getElementById("erevivepane");

bwmprojectthumb.addEventListener("click", function click() { ChangeElement(BWMMusicProject); })
ereviveprojectthumb.addEventListener("click", function click() { ChangeElement(EReviveProject); })


//function to change portfolio to selected
function ChangeElement(portfolioSelected) {

    projectname.innerHTML = portfolioSelected[0];
    projectinfo.innerHTML = portfolioSelected[1];
    technologiesused.innerHTML = portfolioSelected[2];
    FirstImage.style.backgroundImage = portfolioSelected[3];
    SecondImage.style.backgroundImage = portfolioSelected[4];
    ThirdImage.style.backgroundImage = portfolioSelected[5];
    FourthImage.style.backgroundImage = portfolioSelected[6];
    CurrentPortfolio = portfolioSelected;
}

//code to change image displayed when clicked

//detect when image is clicked
FirstImage.addEventListener("click", function () { ChangeImage(this.id) })
SecondImage.addEventListener("click", function () { ChangeImage(this.id) })
ThirdImage.addEventListener("click", function () { ChangeImage(this.id) })
FourthImage.addEventListener("click", function () { ChangeImage(this.id) })



function ChangeImage(imageclicked) {
    switch (imageclicked) {

        case SecondImage.id:   
            FirstImage.style.backgroundImage = CurrentPortfolio[4];
            break;
        case ThirdImage.id:
            FirstImage.style.backgroundImage = CurrentPortfolio[5];
            break;
        case FourthImage.id:
            FirstImage.style.backgroundImage = CurrentPortfolio[6];
            
            break;

    }

}










//code for home-page animation
$("document").ready(function () {
    $(".navbar-text, .introtext, .social-links, #codeshape").hide();
    $(".introtext, .social-links,  .codeshape").slideDown(2000);
    $(".navbar-text, .introtext").fadeIn(3000);
    $(".blink").blink(200)
})




//code from https://github.com/johnboker/jquery.blink
$.fn.blink = function (options) {
    var defaults = { delay: 500 };
    var options = $.extend(defaults, options);
    return $(this).each(function (idx, itm) {
        var handle = setInterval(function () {
            if ($(itm).css("visibility") === "visible") {
                $(itm).css('visibility', 'hidden');
            } else {
                $(itm).css('visibility', 'visible');
            }
        }, options.delay);

        $(itm).data('handle', handle);
    });
}
$.fn.unblink = function () {
    return $(this).each(function (idx, itm) {
        var handle = $(itm).data('handle');
        if (handle) {
            clearInterval(handle);
            $(itm).data('handle', null);
            $(itm).css('visibility', 'inherit');
        }
    });
}



