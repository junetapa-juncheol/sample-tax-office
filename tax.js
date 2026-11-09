'use strict';
const form=document.getElementById('contact-form');
document.getElementById('fill-example').addEventListener('click',()=>{form.elements.nickname.value='샘플 방문자';form.elements.email.value='hello@example.com';form.elements.topic.value='기장 안내';form.elements.message.value='기장 서비스의 진행 과정이 궁금합니다.';form.elements.consent.checked=true;});
form.addEventListener('submit',e=>{e.preventDefault();const result=document.getElementById('form-result');result.hidden=false;if(form.elements.website.value){result.textContent='입력 내용을 확인해 주세요.';return;}if(!form.checkValidity()){result.textContent='필수 항목과 이메일 형식을 확인해 주세요.';form.reportValidity();return;}result.textContent='데모 안내: 문의 화면 체험이 완료되었습니다. 입력 내용은 저장되거나 전송되지 않았습니다.';result.focus();form.reset();});
