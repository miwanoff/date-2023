// let d = new Date();
// let d2 = new Date();
// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// d2.setTime(d2.getTime() + 24 * 60 * 60 * 1000);
// // console.log(d2.setTime(d2.getTime() + 5 * 24 * 60 * 60 * 1000));
// console.log(d.getDate()); 
// console.log(weekday[d.getDay()]); // 0 1 2 3 4 5 6 
// console.log(month[d.getMonth()]);
// // console.log(Math.floor((d2.getTime() - d.getTime())/(60* 60 * 1000 )));
// console.log(d);

let d1 = new Date();
let d2 = new Date(2024,0,1);
let ms = (d2.getTime() - d1.getTime());//разница в милисекундах
let s = ms / 1000;//разница в секундах
let m = s / 60;//разница в минутах
let h = m / 60;//разница в часах
let d = Math.floor(h / 24);//разница в днях
document.write ('Сегодня ' + d1.getDate() + '. ' +  (d1.getMonth() + 1) + '.' + d1.getFullYear() + '\nОсталось до ' + d2.getDate() + '.' +
  (d2.getMonth() + 1) + '.' + d2.getFullYear() + ': дней - ' + d + '; часов - ' + h +
'; минут - ' + m + '; секунд - ' + s);
