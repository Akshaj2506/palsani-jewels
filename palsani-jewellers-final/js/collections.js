// the below line is used to prevent the opening of context menu on mouse right click
// document.addEventListener('contextmenu', event => event.preventDefault());

let options = {
   root: null,
   rootMargin: '120px',
   threshold: 0.9
};
let callback = (entries, observer) => {
   entries.forEach(entry => {
      if (entry.target.id) {
         if (entry.isIntersecting) {
            entry.target.play();
         } else {
            entry.target.pause();
         }
      }
   });
}
let observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector("#jewel-video-samples"));

// Appearing elements on scroll

const reveal = () => {
   var reveals = document.querySelectorAll('.reveal');

   for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop =  reveals[i].getBoundingClientRect().top;
      var revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
         reveals[i].classList.add('active');
      }
   }
}
window.addEventListener('load', event => {
   window.addEventListener('scroll', reveal);
})

const radioStore = document.getElementById("visit-store");
const radios = document.forms['schedule-appointment'].elements['appointment-medium'];

if (radioStore.checked) {
   document.getElementById("video-call-form").style.display = "none";
   document.getElementById("store-visit-form").style.display = "grid";
}
for (var i = 0; i < radios.length; i++) {
   radios[i].onclick = function() {
      if (this.value == "visit store") {
         document.getElementById("video-call-form").style.display = "none";
         document.getElementById("store-visit-form").style.display = "grid";
      }
      if (this.value == "video call") {
         document.getElementById("video-call-form").style.display = "block";
         document.getElementById("store-visit-form").style.display = "none";
      }
   }
} 