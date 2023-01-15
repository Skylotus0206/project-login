//@ login page 에서 작동하는 js
//@ 아이디와 패스워드를 브라우저에 입력했을 때, 그 정보가 서버로 request 하게 되고 이를 처리하는 과정이 서버가 해야한다
'use strick';

//@DOM()
const id = document.querySelector('#id');
const password = document.querySelector('#password');
const button = document.querySelector('button');

button.addEventListener('click', login);

function login() {
  //@ 아이디와 비밀번호 값을 가져온다
  const req = {
    id: id.value,
    password: password.value,
  };
}
