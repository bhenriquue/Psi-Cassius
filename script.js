
/* MENU MOBILE */
function toggleMenu(){
  document.getElementById("menu").classList.toggle("show");
}

/* ANIMAÇÃO SCROLL */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{threshold:0.12});

document.querySelectorAll(".reveal").forEach(el=>{
  observer.observe(el);
});


/* MODAL */
function openModal(type){

  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  const text = document.getElementById("modal-text");

  const data = {
    ansiedade: {
      title: "Ansiedade",
      text: "Trabalho terapêutico focado no controle da ansiedade, técnicas de respiração, reestruturação cognitiva e redução de sintomas físicos e mentais."
    },
    depressao: {
      title: "Depressão",
      text: "Acompanhamento psicológico para compreensão da depressão, fortalecimento emocional e estratégias de enfrentamento."
    },
    relacionamentos: {
      title: "Relacionamentos",
      text: "Ajuda para lidar com conflitos, dependência emocional e comunicação saudável."
    },
    autoconhecimento: {
      title: "Autoconhecimento",
      text: "Processo terapêutico voltado para compreensão de si mesmo, emoções e padrões de comportamento."
    }
  };

  title.innerText = data[type].title;
  text.innerText = data[type].text;

  modal.style.display = "flex";
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(e){
  const modal = document.getElementById("modal");
  if(e.target == modal){
    modal.style.display = "none";
  }
};


/* CARDS */
function toggleCard(el){
  el.classList.toggle("active");
}


/* MENU MOBILE (corrigido duplicação removida) */
/* já definido acima */


/* ===== DEPOIMENTOS ===== */

let currentTestimonial = 0;

function showTestimonial(index){

  const items = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".dots span");

  if(index >= items.length){
    currentTestimonial = 0;
  } else if(index < 0){
    currentTestimonial = items.length - 1;
  } else {
    currentTestimonial = index;
  }

  items.forEach(item => item.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  if(items[currentTestimonial]){
    items[currentTestimonial].classList.add("active");
  }

  if(dots[currentTestimonial]){
    dots[currentTestimonial].classList.add("active");
  }
}

function changeTestimonial(dir){
  showTestimonial(currentTestimonial + dir);
}

function goToTestimonial(index){
  showTestimonial(index);
}

/* AUTO PLAY CORRIGIDO */
setInterval(() => {
  showTestimonial(currentTestimonial + 1);
}, 6000);

/* INIT */
showTestimonial(0);