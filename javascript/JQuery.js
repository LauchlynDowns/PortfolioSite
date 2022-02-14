
//vanilla JS used to make buttons scroll on gallery.
const leftbutton = document.getElementById('left');
const rightbutton = document.getElementById('right');
//find document width and times it by 0.2 to get the width of 20vw
let ScrollWidth = document.body.clientWidth * 0.2;
window.onresize = ScrollWidth = document.body.clientWidth * 0.2;;
rightbutton.addEventListener("click", function () { document.getElementById('project-selector').scrollLeft += ScrollWidth; })
leftbutton.addEventListener("click", function () { document.getElementById('project-selector').scrollLeft += -ScrollWidth })

//arrays to store data for portfolio

const BWMMusicProject = ["BWM Music", "I Created this website using Bootstrap while i was in college to develop my skills in front-end development, i learned key skills about using frameworks and gained lots of experience learning about how bootstrap and CDN's worked. i also learned some key design skills and learned to edit photos for use on websites. I designed this site using illustrator and i edited the photos using photoshop to make them more appealing.<br><br> <a style='text-decoration:underline;' href='https://bwmmusic.lauchlyn.com/'>Live Site</a><br>", "<div class='techusedbubble grey'>College Project</div><div class='techusedbubble yellow'>Javascript</div><div class='techusedbubble red'>HTML5</div><div class='techusedbubble darkblue'>CSS</div> <div class='techusedbubble lightblue'>Bootstrap 5</div>", "url(../images/BwmMusicThumb.JPG)", "url(../images/BWMmusic/BWM-contact.PNG)", "url(../images/BWMmusic/BWM-comingsoon.PNG)", "url(../images/BWMmusic/BWM-links.PNG)"]
const EReviveProject = ["E-Revive", "While i was in college i was tasked to develop a database-driven web application, so i decided to create eRevive, an online marketplace where you can buy used tech from other users. The application was created using php with a mysql database. It uses CRUD operations to display the product information and gives the users the ability to sign in and add products with an image. The application features a sign in system to provide basic user authentication.<br><br> While i was developing this project, i learned alot about php and basic database security. I used hashing algorithms and salts to securely store user information as well as input sanitization to prevent against sql injection attacks.<br><br> <a style='text-decoration:underline;' href='https://erevive.lauchlyn.com/'>Live Site</a><br>", "<div class='techusedbubble grey'>College Project</div><div class='techusedbubble yellow'>Javascript</div><div class='techusedbubble red'>HTML5</div><div class='techusedbubble darkblue'>CSS</div><div class='techusedbubble phppurple'>PHP</div><div class='techusedbubble sqlorange'>MySql</div>", "url(../images/ERevive/erevivethumb.png)", "url(../images/ERevive/erevivelogin.png)", "url(../images/ERevive/ereviveaddproduct.png)", "url(../images/ERevive/erevivemylistings.png)"]
const ELearningProject = ["E-Learning", "I made this site in college for a client side scripting class. The site contains games for kids to learn about numbers and counting, the games are made with vanilla javascript. The site is basic in functionality as i was on a strict timescale, but it still exceeded the criteria needed to pass. The ui layout is designed for kids to easily understand and use.<br><br> <a style='text-decoration:underline;' href='https://elearning.lauchlyn.com/'>Live Site</a><br>", "<div class='techusedbubble grey'>College Project</div><div class='techusedbubble yellow'>Javascript</div><div class='techusedbubble red'>HTML5</div><div class='techusedbubble darkblue'>CSS</div>", "url(../images/elearning/elearningprojectthumb.png)", "url(../images/elearning/elearningsymbolgame.png)", "url(../images/elearning/elearningaddgame.png)", "url(../images/elearning/elearninglearningpage.png)"]
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
const ELearningProjectthumb = document.getElementById("elearningpane");

bwmprojectthumb.addEventListener("click", function click() { ChangeElement(BWMMusicProject); })
ereviveprojectthumb.addEventListener("click", function click() { ChangeElement(EReviveProject); })
ELearningProjectthumb.addEventListener("click", function click() { ChangeElement(ELearningProject); })


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





//code for color theme changer

let themebutton = document.getElementById("slidebutton");
let dark;
themebutton.addEventListener("click", function () { changeTheme(); })
const buttoncircle = document.getElementById("slidebutton-circle");
const toptext = document.getElementById("toptext")
const middletext = document.getElementById("middletext")
const bottomtext = document.getElementById("bottomtext")
const sociallinks = document.getElementById("sociallinks")
const infotext = document.getElementById("about-info-area")
const form = document.getElementById("formcontainer");
const contactInfo = document.getElementById("contactcard")
function changeTheme() {
    if (dark == true) {
        changeLight();
    } else {
        changeDark()
    }
}
function changeDark() {
    document.body.style.backgroundColor = "#242424";
    buttoncircle.style.left = "50%"
    buttoncircle.style.right = "5"
    dark = true;
    toptext.style.color = "white"
    middletext.style.color = "white"
    bottomtext.style.color = "white"
    infotext.style.color = "white"
    form.style.color = "white"
    contactInfo.style.color = "white"
}

function changeLight() {
    dark = false;
    document.body.style.backgroundColor = "#e2e2e2";
    buttoncircle.style.left = ""
    buttoncircle.style.right = "50%"
    middletext.style.color = "#555454"
    bottomtext.style.color = "#2e2e2e"
    toptext.style.color = "#2e2e2e"
    infotext.style.color = "#2e2e2e"
    form.style.color = "#2e2e2e"
    contactInfo.style.color = "#2e2e2e"
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



