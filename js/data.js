
const focusList = document.querySelectorAll('.size');

focusList.forEach(focusBtn => {

  focusBtn.addEventListener('click', () => {
    document.querySelector('.focus')?.classList.remove('focus');
    focusBtn.classList.add('focus');
  });
  
})


