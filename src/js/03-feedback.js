import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const submitEl=formEl.querySelector('button')
const emailEl = formEl.elements.email;
const textEl = formEl.elements.message;
formEl.addEventListener('input', throttle(calbackInput,500));
function calbackInput(e) {
  const emailText = emailEl.value;
  const text = textEl.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: emailText, message: text })
  );
}
window.addEventListener('load', () => {
  if ((localStorage.length=1)) {
    emailEl.value = '';
    textEl.value = '';
  }else{
  const emailLocal = JSON.parse(localStorage.getItem('feedback-form-state'));
  emailEl.value = emailLocal.email;
  textEl.value = emailLocal.message;
}});
submitEl.addEventListener("click",()=>{
    const a=localStorage.getItem("feedback-form-state")
    console.log(a)
    localStorage.removeItem("feedback-form-state")
})
