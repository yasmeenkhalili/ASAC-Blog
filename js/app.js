'use strict';

if (localStorage.getItem('info') === null) {

  localStorage.setItem('info', JSON.stringify([]));
}

let localStorageInfo = JSON.parse(localStorage.getItem('info'));

function Info(name, tilte, subject, content) {
  this.name = name;
  this.tilte = tilte;
  this.subject = subject;
  this.content = content;
  localStorageInfo.push(this);
}

document.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {
  event.preventDefault();
  new Info(event.target.authorName.value,event.target.articleTilte.value,event.target.subjectsname.value,event.target.article.value,event.target.day.value,event.target.month.value,event.target.year.value);
  localStorage.setItem('info',JSON.stringify(localStorageInfo));
}

let userInfo=document.getElementById('userInfo');
let headding=document.createElement('h3');
headding.innerText='Artifical Intelligence basics';
userInfo.appendChild(headding);

for(let i=0;i<localStorageInfo.length;i++){
  let image=document.createElement('img');
  image.setAttribute('src', '/mnt/c/Users/STUDENT/ASAC-Blog/img/asac_ltuc.jpg');
  userInfo.appendChild(image);
  let localStorageInfo = JSON.parse(localStorage.getItem('info'));
//   new Info(this.authorName,this.articleTilte,this.subjectsname,this.article,this.day,this.month,this.year);
  let paragph=document.createElement('p');
  paragph.innerText=localStorageInfo;
  userInfo.appendChild(paragph);
  let likes=Math.floor(Math.random() * 500) + 1;
  userInfo.appendChild(likes);


}