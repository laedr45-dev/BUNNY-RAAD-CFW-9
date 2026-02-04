// Modal
const modal=document.getElementById('modal');
const openModal=document.getElementById('open-modal');
const closeModal=document.querySelector('.close');
openModal.onclick=()=>{modal.style.display='flex';};
closeModal.onclick=()=>{modal.style.display='none';};
window.onclick=(e)=>{if(e.target==modal)modal.style.display='none';};

// Counter
const counters=document.querySelectorAll('.counter');
counters.forEach(counter=>{
  const updateCount=()=>{
    const target=+counter.getAttribute('data-target');
    const count=+counter.innerText;
    const increment=target/200;
    if(count<target){counter.innerText=Math.ceil(count+increment);setTimeout(updateCount,20);}
    else{counter.innerText=target;}
  };
  updateCount();
});

// Theme Toggle
const themeToggle=document.getElementById('theme-toggle');
themeToggle.onclick=()=>{
  document.body.classList.toggle('light-theme');
  themeToggle.textContent=document.body.classList.contains('light-theme')?'🌞':'🌙';
};

// Back to Top
const backToTop=document.getElementById('back-to-top');
window.onscroll=()=>{if(window.scrollY>300){backToTop.style.display='block';}else{backToTop.style.display='none';}};
backToTop.onclick=()=>{window.scrollTo({top:0,behavior:'smooth'});};
