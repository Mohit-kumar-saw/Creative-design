function reveal(){
  document.querySelectorAll(".reveal").forEach((item)=>{

    let parent=document.createElement("span");
    let child=document.createElement("span");
    parent.classList.add("parent")
    child.classList.add("child")

   child.innerHTML=item.innerHTML;

    parent.appendChild(child);
    item.innerHTML=""

    item.appendChild(parent)

  })
}

function valueSetters(){
  gsap.set("#nav a", {y:"-100%",opacity:0})
  gsap.set("#home span .child", {y:"100%"})
  gsap.set("#home .row img", {opacity:0})

  document.querySelectorAll('#Visual>g').forEach((e)=>{
    var character = e.childNodes[1]?.childNodes[1];
    if (character) {
      character.style.strokeDasharray = character.getTotalLength() + 'px';
      character.style.strokeDashoffset = character.getTotalLength() + 'px';
    } else {
      console.error("Character element not found in:", e);
    }
  })
}

 function loaderAnimation(){
  var tl= gsap.timeline();

  tl.from("#loader .child span",{
    duration:1.4,
    x:100,
    stagger: .2,
    ease:Power3.easeInOut
  })
  .to("#loader .child",{
    duration:1,
    y:"-100%",
    delay:0.5,
    ease:Circ.easeInOut
  })
  .to(" #loader",{
    height:0,
    duration:1,
    delay:.1,
    ease:Circ.easeInOut
  })
  .to(" #green",{
    height:"100%",
    top:0,
    delay:-.3,
    duration:0.8,
    ease:Power3.easeInOut
  })
  .to(" #green",{
    height:"0",
    top:0,
    duration:1,
    delay:-0.3,
    ease:Circ.easeInOut,
    onComplete: function (){
      animateHomepage()
    }
  })

 }

 function animateSvg(){
  
 

  gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
    strokeDashoffset:0,
    duration:2,
    ease:Expo.easeInOut,
  })
 }

 function animateHomepage(){
  

  var tl=gsap.timeline();

  tl.to("#nav a",{
    y:0,
  opacity:1,
  stagger:.1,
  ease:Expo.easeInOut
 

})
  .to("#home .parent .child",{
    y:0,
  opacity:1,
  stagger:.05,
  ease:Expo.easeInOut
 

})
  .to("#home .row img",{
  opacity:1,
  ease:Expo.easeInOut,
  delay:-.5,
 onComplete:function () {
   animateSvg();
 }

})
 }

 
function cardHoverEffect(){
  document.querySelectorAll(".cnt").forEach(function (cnt){
    var showingImage;
    cnt.addEventListener("mousemove", function (dets){
      console.log(dets.target);
      document.querySelector('#cursor').children[dets.target.dataset.index].style.opacity=1
      showingImage= dets.target;
      document.querySelector('#cursor').children[dets.target.dataset.index].style.transform  = `translate(${dets.clientX}px, ${dets.clientY}px`
      showingImage.style.filter= "grayscale(1)"
    })

    cnt.addEventListener("mouseleave", function(dets){
      document.querySelector('#cursor').children[showingImage.dataset.index].style.opacity=0
      showingImage.style.filter= "grayscale(0)"

    })
  })

  

}

cardHoverEffect()

reveal();
valueSetters();
loaderAnimation();

