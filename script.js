const menuBtn=document.querySelector(".menu-btn"), navLinks=document.querySelector(".nav-links");
menuBtn.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const modal=document.getElementById("bookingModal");
function openModal(){modal.classList.add("open");modal.setAttribute("aria-hidden","false")}
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

function openEmail(subject, body){
  window.location.href=`mailto:Lily.mxb5@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const fields=e.currentTarget.querySelectorAll("input, textarea");
  const name=fields[0].value, email=fields[1].value, message=fields[2].value;
  openEmail(`Tutorly Contact — ${name}`,`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  document.getElementById("formMessage").textContent="Opening your email app…";
});

document.getElementById("bookingForm").addEventListener("submit",e=>{
  e.preventDefault();
  const f=e.currentTarget;
  const name=f.querySelector('input[type="text"]').value;
  const email=f.querySelector('input[type="email"]').value;
  const selects=f.querySelectorAll("select");
  const subject=selects[0].value;
  const format=selects[1].value;
  const message=f.querySelector("textarea").value;
  openEmail(`Tutorly Booking Request — ${name}`,`Student name: ${name}\nParent/guardian email: ${email}\nSubject: ${subject}\nPreferred format: ${format}\n\nNotes:\n${message || "None"}`);
  document.getElementById("bookingMessage").textContent="Opening your email app…";
});
