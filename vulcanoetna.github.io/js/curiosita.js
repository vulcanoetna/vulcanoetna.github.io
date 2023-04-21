//curiosita
let curiosita = [

    "L’Etna ha avuto origine come un vulcano sottomarino" , "L’Etna detiene il record di eruzioni mortali" , "Il nome deriva dal greco Aitne che significa Brucio" , "L’Etna forma grotte di neve" , "L’Etna è meta dei turisti per sciare" 
  
  ];


  function estrazione() {
  
    if(curiosita.length != 0){
      
  
        let num = Math.floor(Math.random() * curiosita.length);
    
        var node = document.createElement('li');
        node.appendChild(document.createTextNode(curiosita[num]));
 
        document.getElementById("testo").appendChild(node);
    
        curiosita.splice(num , 1)
        
    }
    else{
        alert("curiosita finite")
    }
  }

  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}