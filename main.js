document.addEventListener("DOMContentLoaded", init);

function init(){
    var weightEl = document.querySelector('#weight');
    var heightEl = document.querySelector('#height');
    var calcButton = document.querySelector('#calcData');
    getCurrentDate();
    calcButton.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#text-export').value = calculateIMT(weightEl.value, heightEl.value);
    });
}

function calculateIMT (w, h) {
    var indexWeightText;
    var recomendation;
    indexWeight = parseFloat(w / Math.pow(h/100, 2));
    if (isNaN(indexWeight) || !isFinite(indexWeight) || indexWeight == 0) {
        return ('Введите корректные параметры роста и веса!');		
    } else {if (indexWeight < 16) {
        indexWeightText = 'Дефицит веса.';
        recomendation = 'Вам нужно больше кушать!!!!';
    } else if (indexWeight < 18.5) {
        indexWeightText = 'Недостаточный вес.';
        recomendation = 'Вам нужно чуть больше кушать!!!!';
    } else if (indexWeight < 25) {
        indexWeightText = 'Нормальный вес.';
        recomendation = 'У Вас всё отлично!!!!';
    } else if (indexWeight < 30) {
        indexWeightText = 'Избыточный вес.';
        recomendation = 'Вам нужно чуть меньше кушать!!!!';
    } else if (indexWeight < 35) {
        indexWeightText = 'Ожирение 1-й степени.';
        recomendation = 'Вам нужно меньше кушать!!!!';
    } else if (indexWeight < 40) {
        indexWeightText = 'Ожирение 2-й степени';
        recomendation = 'Вам нужно почти не кушать!!!!';
    } else if (indexWeight >= 40) {
        indexWeightText = 'Ожирение 3-й степени';
        recomendation = 'Прекращайте кушать!!!!';}}; 
    return (getCurrentDate() + '\n' + 'Сведения о весе: ' + indexWeightText + '\n' + 'Рекомендация: ' + recomendation);
};

function getCurrentDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    return('Сегодня: ' + day + '/' + month + '/' + year + '.');
};
