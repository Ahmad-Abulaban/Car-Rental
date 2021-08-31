'use strict';



let container = document.getElementById('container');


let tableEl = document.getElementById('mytable');
tableEl.id = ('mytable');
container.appendChild(tableEl);
let array = [];
let array2 = [];
function addDetails(CustomerName, CarModel, CarPrice){
//   this.CustomerName = CustomerName;
//   this.CarModel = CarModel;
  this.array = [];
  this.array2 = [];
  //   array.push(CustomerName);
  //   array2.push(CarModel);
  this.CarPrice = CarPrice;
  this.CarPrice = randomNumber;
  array.push(this);
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

readFromLocalStoage();
readFromLocalStoage1();
let Myform = document.getElementById('Myform');
Myform.addEventListener('submit', addOrder);

function addOrder(event){
  event.preventDefault();
  let CustomerName = event.target.CustomerName.value;
  //   let CarModels = event.target.CarModels.checked;
  array.push(CustomerName);
  //   array2.push(CarModels);
  saveToLocalStoage();
  saveToLocalStoage1();
  renderList();


}



function renderList(){
  let container = document.getElementById('container');
  container.innerHTML = '';
  let ulEl = document.createElement('ul');
  container.appendChild(ulEl);
  for(let i = 0; i < array.length; i++){
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `${i + 1}.${array[i]}`;
    let pEl = document.createElement('p');
    liEl.appendChild(pEl);
    liEl.setAttribute('id', 'ord');
    pEl.textContent = array2[i];
    pEl.setAttribute('id', 'det');
    // let pEl1 = document.createElement('p');
    // pEl1.id = 'remove';
    // pEl1.textContent = 'X';


  }

}





renderList();
function saveToLocalStoage(){
  let data = JSON.stringify('array');
  localStorage.setItem('array', data);

}

function readFromLocalStoage(){
  if(localStorage.getItem('array')){
    array = JSON.parse(localStorage.getItem(array));
  }
}

function saveToLocalStoage1(){
  let data = JSON.stringify('array1');
  localStorage.setItem('array1', data);

}

function readFromLocalStoage1(){
  if(localStorage.getItem('array2')){
    array2 = JSON.parse(localStorage.getItem(array2));
  }
}
