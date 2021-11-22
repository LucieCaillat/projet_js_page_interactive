//Fonctionnalité 1 et 1-bis :

let footer = document.querySelector("footer");
let countFooterClick = 0;

footer.addEventListener("click",function(){
    countFooterClick++;
    console.log("Clic numéro " + countFooterClick);
});


//Fonctionnalité 2 :

let hamburgerMenu = document.querySelector("button.navbar-toggler");
let navbarHeader = document.querySelector("#navbarHeader");
let statusNavbarHeader = false;

hamburgerMenu.addEventListener("click",function(){
    
    if (statusNavbarHeader === false){
        navbarHeader.classList.remove("collapse");
        statusNavbarHeader = true;
    }else if (statusNavbarHeader === true){
        navbarHeader.classList.add("collapse");
        statusNavbarHeader = false; 
    };
});


/*hamburgerMenu.addEventListener("click", function(){
    navbarHeader.classList.toggle("collapse");
});*/


///Fonctionnalité 3 :

let firstCardEditButton = document.querySelector("button.btn-outline-secondary");
let firstCardText = document.querySelector("p.card-text");


firstCardEditButton.addEventListener("click",function(){
    firstCardText.style.color = "red";
});

//Fonctionnalité 4 :

let secondCardEditButton = document.querySelectorAll("button.btn-outline-secondary")[1];
let secondCardText = document.querySelectorAll("p.card-text")[1];
let secondCardEditButtonStatus = false;


secondCardEditButton.addEventListener("click",function(){
    if (secondCardEditButtonStatus === false){
        secondCardText.style.color = "green";
        secondCardEditButtonStatus = true;
    } else if (secondCardEditButtonStatus === true){
        secondCardText.style.color = ""
        secondCardEditButtonStatus = false;
    };
    
});

//Fonctionnalité 5 :

let navbar = document.querySelector("header");
let bootstrap = document.querySelector("link");
let bootstrapStatus = true;



navbar.addEventListener("dblclick", function(){
    if(bootstrapStatus === true){
     bootstrap.setAttribute("href","#"); 
     bootstrapStatus = false;  
    }else if(bootstrapStatus === false){
        bootstrap.setAttribute("href","https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"); 
     bootstrapStatus = true;
    };
        
});