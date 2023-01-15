//@ login page 에서 작동하는 js
//@ 아이디와 패스워드를 브라우저에 입력했을 때, 그 정보가 서버로 request 하게 되고 이를 처리하는 과정이 서버가 해야한다
'use strick';

const { post } = require('../../../routes/home');

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

  //@ fetch로 전달받은 아이디 비밀번호를 서버로 보낸다
  //@ 브라우저에서 요청할 때 요청을 받을 수 있는 API가 만들어져 있어야 한다
  //@ 우리는 JSON으로 정보를 넘길 것 이다.
  //@ fetch로 넘기는 정보를 받을 API가 필요하다
  //@ headers: 어떤 형태의 정보를 넘기는가
  fetch('/login', {
    method: 'POST',
    headers: {"Content-Type": "application/json"}
    body: JSON.stringify(req),
  });
}
