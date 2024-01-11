function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
} 

$(document).ready(function(){

    var typed = new Typed(".typing", {
        strings: ["Teacher", "Researcher", "Photographer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


window.onscroll = function() {
    var scrollUpBtn = document.getElementById('scroll-up-btn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.display = 'block';
    } 
    
    else {
        scrollUpBtn.style.display = 'none';
    }
};

function sendEmail(){  
    var name=document.getElementById("name").value;  
    var email=document.getElementById("email").value;  
    var subject=document.getElementById("subject").value;  
    var body=document.getElementById("body").value;
    window.open('mailto:saeed.utsha@gmail.com?'+'&subject='+subject+'&body='+body);  
}

showPublications("All");
showProjects('Allp');

function showPublications(year) {
    var allContent = document.querySelectorAll("#publicationContent > ul");

    var buttons = document.querySelectorAll('.button-publications');
    buttons.forEach(function(button) {
        button.classList.remove('selected');
    });

    if (year === "All") {
        allContent.forEach(function(content) {
            content.style.display = "block";
        });
        document.getElementById("btnAll").classList.add('selected');
    } else {
        allContent.forEach(function(content) {
            if (content.id === "year" + year) {
                content.style.display = "block";
                document.getElementById("btn" + year).classList.add('selected');
            } else {
                content.style.display = "none";
            }
        });
    }
}


function showProjects(topic) {
    var allContent = document.querySelectorAll("#projectContent > ul");

    var buttons = document.querySelectorAll('.button-projects');
    buttons.forEach(function(button) {
        button.classList.remove('selected');
    });

    if (topic === "Allp") {
        allContent.forEach(function(content) {
            content.style.display = "block";
        });
        document.getElementById("btnAllp").classList.add('selected');
    } else {
        allContent.forEach(function(content) {
            if (content.id === "pr" + topic) {
                content.style.display = "block";
                document.getElementById("btn" + topic).classList.add('selected'); 
            }
            
            else if (content.id === "prBoth") {
                content.style.display = "block";
                document.getElementById("btn" + topic).classList.add('selected'); 
            }
            
            else {
                content.style.display = "none";
            }
        });
    }
}