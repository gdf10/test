const products = [  { id: 1, name: 'Наушники Sonic', cat: 'Аудио', icon: '🎧', price: 4990, rate: 4.7 },  
                    { id: 2, name: 'Колонка Bumper', cat: 'Аудио', icon: '🔊', price: 3290, rate: 4.4 },  
                    { id: 3, name: 'Смарт-часы Pulse', cat: 'Носимые', icon: '⌚', price: 8990, rate: 4.6 },  
                    { id: 4, name: 'Фитнес-браслет Fit', cat: 'Носимые', icon: '📿', price: 2490, rate: 4.2 },  
                    { id: 5, name: 'Клавиатура Click', cat: 'Компьютер', icon: '⌨️', price: 5490, rate: 4.8 },  
                    { id: 6, name: 'Мышь Glide', cat: 'Компьютер', icon: '🖱️', price: 1990, rate: 4.5 },  
                    { id: 7, name: 'Веб-камера Eye', cat: 'Компьютер', icon: '📷', price: 3790, rate: 4.1 },  
                    { id: 8, name: 'Powerbank 20000', cat: 'Аксессуары', icon: '🔋', price: 2190, rate: 4.6 },
                  ];
const money=(n) => n.toLocaleString('en-US')+'$';
const state={q:'',cat:'Все',sort:'def'};
const $=(id) =>document.getElementById(id);

let cart = {};
try { 
    cart = JSON.parse(localStorage.getItem('shop-cart')) || {}; 
}catch { 
    cart = {}; 
}
const saveCart = () => { 
    try { 
        localStorage.setItem('shop-cart', JSON.stringify(cart)); 
    } catch {} 
};

/*const userSettings = {
  theme: 'dark',
  fontSize: 16,
  notifications: true
};

// 1. Преобразуем объект в строку и сохраняем
localStorage.setItem('settings', JSON.stringify(userSettings));

// 2. Читаем строку и преобразуем обратно в объект
const savedSettings = JSON.parse(localStorage.getItem('settings'));
console.log(savedSettings.theme); // "dark" */

function visible() {
    const q=state.q.trim().toLowerCase();
    const list=products
        .filter((p) => state.cat==='Все'||p.cat===state.cat)
        .filter((p) => p.name.toLowerCase().includes(q));
};

console.log('1');
setTimeout(()=>console.log('2'),0);
console.log('3');

/*
function имяФункции(параметры, callback) {
    //какая-то асинхронная операция
    //например:  setTimeout,fetch,чтение файла и тд

    //когда операция завершится:
        if(успех) {
            callback(null,результат);
        } else {
            callback(ошибка,null)    
        }
}
        
function loadData(callback) {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      callback(null, "Данные загружены!");
    } else {
      callback("Ошибка загрузки", null);
    }
  }, 1000);
}
  

function fetchData(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data))  // Передаём данные в callback
      .catch(error => console.error(error));
  }
  
  fetchData("https://api.example.com/data", (data) => {
    console.log("Получены данные:", data);
  });

(data) => { console.log(data); } – callback, который сработает после загрузки данных.
*/
setTimeout(() => {
    console.log("Прошло 2 секунды!");
}, 2000);

setTimeout(() => {
  console.log('10 sec')
},1000)

const result=array.filter((element,index,array) => {
    return condition;
}, thisArg);


