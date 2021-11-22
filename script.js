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

//Fonctionnalité 6 :

let cardViewButtons = document.querySelectorAll("button.btn-success");
let cardTexts = document.querySelectorAll("p.card-text")
let cardImgs = document.querySelectorAll("img.card-img-top")

for(let index = 0 ; index < cardViewButtons.length; index++){  
    cardViewButtons[index].addEventListener("mouseover",function(){
        cardTexts[index].classList.toggle("collapse"); 
        if(cardImgs[index].style.width === "20%" ){        
            cardImgs[index].style.width = "100%";
                        
        }else{ 
            cardImgs[index].style.width = "20%";
            
                                      

        }
    });
};

//Fonctionnalité 7 :

let cards = document.querySelectorAll("div.row")[1];
let btnArrow = document.querySelectorAll("a.my-2")[1];

btnArrow.addEventListener("click", function(){
    cards.insertBefore(cards.children[5],cards.children[0]);
});

//Fonctionnalité 8 :





