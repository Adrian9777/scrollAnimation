
document.addEventListener("DOMContentLoaded", function() {
   // Verzeichnispfad zu den Bildern
   const bilderOrdner = "bilder/";
 
   // Array mit Bildernamen (annimm, dass die Bilder im Ordner vorhanden sind)
   let bilderNamen = [];
   for (let i = 0; i <= 3; i++){
       bilderNamen[i] = ["bild" + i + ".jpg"]
    }
    console.log(bilderNamen)


 
   // Element, in das die Bilder eingefügt werden sollen
   const bildergalerieElement = document.getElementById("bildergalerie");
 
   // Schleife durch die Bildernamen und füge jedes Bild zur HTML-Seite hinzu
   bilderNamen.forEach(function(bildName) {
     // Erstelle ein img-Element
     const bildElement = document.createElement("img");
     console.log(bildElement)
 
     // Setze den Quellpfad für das Bild
     bildElement.src = bilderOrdner + bildName;
 
     // Füge das Bild zum Bildergalerie-Element hinzu
     bildergalerieElement.appendChild(bildElement);
   });
 });




document.addEventListener('DOMContentLoaded', ()=>{
   imageScrollAnimation();
})




function imageScrollAnimation(){
   const wrapper = document.querySelector('#scrollDiv');
   const images = document.getElementsByTagName('img');
   //erstest img in nodeList
   console.log(images)
   images[0].classList.add('active');
   // const müsste direkt initalisiert werden
   let scrollingTimer;

   wrapper.addEventListener('wheel', (e)=>{
      e.preventDefault();
      clearTimeout(scrollingTimer);

      scrollingTimer = setTimeout(function() {
         for (let index = 0; index < images.length; index++) {
            let img = images[index];
            //class list erlaub änderungen oder abfragen in der CSS Klasse des Elements
            let check = img.classList.contains('active')
            console.log(check)
            if(check){
               //beim aktuellen Element wird sie class active entfernt
               img.classList.remove('active');
               if(index !== images.length - 1){
                  // nächstes elemnt wird active solange es nicht das letzte element ist
                  img.nextElementSibling.classList.add('active')
               }else{
                  // letztes element
                  img.classList.remove('active');
                  images[0].classList.add('active');
               }
               break;
            }
         }
     }, 5); 
   })

}
