 let polsavetel = document.querySelector('.polsavetel');
 let take = document.querySelector('.take');
 let give = document.querySelector('.give');
 let img = document.querySelector('.img');
 let good = document.querySelector('.good');
 let attention = document.querySelector('.Attention');


 /*кнопка получить*/ 
    take.onclick = function () {
    img.style.display = 'block';
    give.style.display = 'block';
    attention.style.display = 'block';
    let names = prompt('вам необходимо ввести имя');
    polsavetel.innerHTML = 'Благословление получил пользователь ' + names;
    polsavetel.style.color = 'red';
  }


  /*кнопка отдать*/ 
    give.onclick = function () {
    img.style.display = 'none';
    give.style.display = 'none';
    polsavetel.style.display = 'none';
    attention.style.display = 'none';
   }


/*счетчик*/ 
     let x = 0;
     good.onclick = function () {
     x++;
     good.innerHTML = 'вы совершили:' + x;
     if ( x === 5) {
         alert('Молодец!');
     }
 }