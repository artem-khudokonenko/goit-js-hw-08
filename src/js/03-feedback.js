import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const submitEl=formEl.querySelector('button')
const emailEl = formEl.email;
const textEl = formEl.message;
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
  const emailLocal = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (emailLocal) {
    emailEl.value = emailLocal.email || "";
    textEl.value = emailLocal.message || "";

  }});
submitEl.addEventListener("click",(e)=>{
  e.preventDefault()
  if (emailEl.value &&textEl.value) {
    
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
    formEl.reset()
    localStorage.removeItem("feedback-form-state")
    
  }else{
    return alert("Fill in all")
  }
})
