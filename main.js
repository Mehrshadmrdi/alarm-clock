const selectMenu = document.querySelectorAll('select');
const timeBox = document.querySelector('.time');

for(let i = 23 ; i >= 0 ; i-- ){
    i = i < 10 ? '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option);
}
for(let i = 59 ; i >= 0 ; i-- ){
    i = i < 10 ? '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option);
}
setInterval((){
    1084
    10841
}, 1000)