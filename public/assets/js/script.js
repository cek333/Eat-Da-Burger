function devourBurger(evt) {
  evt.preventDefault();
  let burgerId = evt.target.dataset.id;
  console.log(`[devourBurger] id=${burgerId}`);
  let settings = {
    method: 'put',
    headers: { 'Content-Type': 'application/json' }
  };
  fetch(`/api/burger/${burgerId}`, settings).then(res => {
    // console.log('[devourBurger] fetch complete.');
    location.reload();
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  // hook up event listeners
  document.querySelector('.devour-it').addEventListener("click", devourBurger);
});