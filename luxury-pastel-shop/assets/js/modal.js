
const modal=document.getElementById('promoModal');
const openBtn=document.getElementById('openModal');
const closeBtn=document.getElementById('closeModal');

if(openBtn){
openBtn.addEventListener('click',()=>{
modal.classList.remove('hidden');
});
}

if(closeBtn){
closeBtn.addEventListener('click',()=>{
modal.classList.add('hidden');
});
}
