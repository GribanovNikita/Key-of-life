const maxCategory = localStorage.getItem('maxCategory');
let maxValue = localStorage.getItem('maxValue');
const results = localStorage.getItem('results');

const data = results;
const parsedData = JSON.parse(data);

const sortedData = Object.entries(parsedData)
    .sort((a, b) => b[1] - a[1])
    .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});

let currentIndex = 0;

function displayCurrentCategory() {
    const categories = Object.keys(sortedData);
    const currentCategory = categories[currentIndex];

    const categoryValues = Object.values(sortedData);
    const currentValues = categoryValues[currentIndex];

    if (currentCategory == 'social') {
        document.getElementById('res').classList.remove('material', 'logic', 'tech', 'physics', 'art');
        document.getElementById('res').classList.add('social');
    
        document.getElementById('prof').innerHTML = 'Социально-коммуникативная активность'
    
        document.getElementById('exp_info').innerHTML = '<b>Социально-коммуникативная активность -</b> включает ценности, которые помогают организовать деятельность других, убеждать, учить, воспитывать. Из людей с преобладанием этого типа ценностей получаются хорошие организаторы, учителя, юристы, работники сферы обслуживания.';
        document.getElementById('prof1').innerHTML = 'Лингвист';
        document.getElementById('prof2').innerHTML = 'Журналист';
        document.getElementById('prof3').innerHTML = 'Медиатор';
        document.getElementById('prof4').innerHTML = 'Экскурсовод';
        document.getElementById('prof5').innerHTML = 'SMM-специалист';
        document.getElementById('prof6').innerHTML = 'Социальный работник';
        document.getElementById('prof7').innerHTML = 'Политолог';
        document.getElementById('prof8').innerHTML = 'Администратор';
        document.getElementById('prof9').innerHTML = 'Психолог';
        document.getElementById('prof10').innerHTML = 'Воспитатель детского сада';
        document.getElementById('prof11').innerHTML = 'Учитель';
        document.getElementById('prof12').innerHTML = 'HR-специалист';
    
        document.getElementById('img1').src = 'img/social (1).svg';
        document.getElementById('img2').src = 'img/social (2).svg';
        document.getElementById('img3').src = 'img/social (3).svg';       

        let prog = document.getElementById('myProg');
        prog.classList.remove('mat', 'log', 'tec', 'ph', 'ar');
        prog.classList.add('soc');
        prog.value = currentValues;
        
        let percent = currentValues * 3;
        document.getElementById('percent_num').innerHTML = percent + '%';
        document.getElementById('percent_num').style.color = '#33A175';
    }
    
    else if (currentCategory == 'material') {
        document.getElementById('res').classList.remove('logic', 'tech', 'physics', 'art', 'social');

        document.getElementById('res').classList.add('material');
    
        document.getElementById('prof').innerHTML = 'Материально-экономическая активность'
    
        document.getElementById('exp_info').innerHTML = '<b>Материально-экономическая активность -</b> характеризуется ярко выраженной потребностью в сохранении и продолжении своей жизни, что проявляется в придании особого значения материальным ценностям, их правильному распределению, использованию и сохранению.';
        document.getElementById('prof1').innerHTML = 'Бухгалтер';
        document.getElementById('prof2').innerHTML = 'Финансист';
        document.getElementById('prof3').innerHTML = 'Ресторатор';
        document.getElementById('prof4').innerHTML = 'Копирайтер';
        document.getElementById('prof5').innerHTML = 'Банкир';
        document.getElementById('prof6').innerHTML = 'Страховой агент';
        document.getElementById('prof7').innerHTML = 'Финансовый аналитик';
        document.getElementById('prof8').innerHTML = 'Аудитор';
        document.getElementById('prof9').innerHTML = 'Налоговый консультант';
        document.getElementById('prof10').innerHTML = 'Инвестиционный аналитик';
        document.getElementById('prof11').innerHTML = 'Бизнесмен';
        document.getElementById('prof12').innerHTML = 'Экономист';
    
        document.getElementById('img1').src = 'img/mat (1).svg';
        document.getElementById('img2').src = 'img/mat (2).svg';
        document.getElementById('img3').src = 'img/mat (3).svg';
    
        let prog = document.getElementById('myProg');

        prog.classList.remove('log', 'tec', 'ph', 'ar', 'soc');
        prog.classList.add('mat');
        prog.value = currentValues;
        
        let percent = currentValues * 3;
        document.getElementById('percent_num').innerHTML = percent + '%';
        document.getElementById('percent_num').style.color = '#E9D205';
    
    }
    
    else if (currentCategory == 'logic') {
        document.getElementById('res').classList.remove('material', 'tech', 'physics', 'art', 'social');

        document.getElementById('res').classList.add('logic');
    
        document.getElementById('prof').innerHTML = 'Интеллектуальная активность'
    
        document.getElementById('exp_info').innerHTML = '<b>Интеллектуальная активность -</b> это профессии, которые связаны с исследованиями, анализом, интеллектуальным мышлением. Таким людям присущи рациональность, аналитический склад ума и независимость суждений.';
        document.getElementById('prof1').innerHTML = 'Веб-разработчик';
        document.getElementById('prof2').innerHTML = 'Аналитик';
        document.getElementById('prof3').innerHTML = 'SEO-специалист';
        document.getElementById('prof4').innerHTML = 'Тестировщик ПО';
        document.getElementById('prof5').innerHTML = 'Учёный';
        document.getElementById('prof6').innerHTML = 'Следователь';
        document.getElementById('prof7').innerHTML = 'Адвокат';
        document.getElementById('prof8').innerHTML = 'Врач';
        document.getElementById('prof9').innerHTML = 'Разработчик игр';
        document.getElementById('prof10').innerHTML = 'Детектив';
        document.getElementById('prof11').innerHTML = 'Криминалист';
        document.getElementById('prof12').innerHTML = 'Юрист';
    
        document.getElementById('img1').src = 'img/log (1).svg';
        document.getElementById('img2').src = 'img/log (2).svg';
        document.getElementById('img3').src = 'img/log (3).svg';
    
        let prog = document.getElementById('myProg');
        prog.classList.remove('mat', 'tec', 'ph', 'ar', 'soc');
        prog.classList.add('log');
        prog.value = currentValues;
        
        let percent = currentValues * 3;
        document.getElementById('percent_num').innerHTML = percent + '%';
        document.getElementById('percent_num').style.color = '#B84DE2';
    
    }
    
    else if (currentCategory == 'tech') {
        document.getElementById('res').classList.remove('material', 'logic', 'physics', 'art', 'social');

        document.getElementById('res').classList.add('tech');
    
        document.getElementById('prof').innerHTML = 'Практико-техническая активность'
    
        document.getElementById('exp_info').innerHTML = '<b>Практико-техническая активность -</b> активность проявляется в изготовлении предметов, обслуживании машин. Таким людям обычно характерны любовь и понимание техники, умение работать руками, выносливость.';
        document.getElementById('prof1').innerHTML = 'Инженер';
        document.getElementById('prof2').innerHTML = 'Физик';
        document.getElementById('prof3').innerHTML = 'Химик';
        document.getElementById('prof4').innerHTML = 'Металлург';
        document.getElementById('prof5').innerHTML = 'Наладчик оборудование';
        document.getElementById('prof6').innerHTML = 'Электрик';
        document.getElementById('prof7').innerHTML = 'Энергетик';
        document.getElementById('prof8').innerHTML = 'Конструктор';
        document.getElementById('prof9').innerHTML = 'Системный администратор';
        document.getElementById('prof10').innerHTML = 'Водитель';
        document.getElementById('prof11').innerHTML = 'Строитель';
        document.getElementById('prof12').innerHTML = 'Пилот';
    
        document.getElementById('img1').src = 'img/tech (1).svg';
        document.getElementById('img2').src = 'img/tech (2).svg';
        document.getElementById('img3').src = 'img/tech (3).svg';
    
        let prog = document.getElementById('myProg');
        prog.classList.remove('mat', 'log', 'ph', 'ar', 'soc');
        prog.classList.add('tec');
        prog.value = currentValues;
        
        let percent = currentValues * 3;
        document.getElementById('percent_num').innerHTML = percent + '%';
        document.getElementById('percent_num').style.color = '#74B1FA';
    
    }
    
    else if (currentCategory == 'physics') {
        document.getElementById('res').classList.remove('material', 'logic', 'tech', 'art', 'social');

        document.getElementById('res').classList.add('physics');
    
        document.getElementById('prof').innerHTML = 'Cоматическая активность'
    
        document.getElementById('exp_info').innerHTML = '<b>Соматическая активность -</b> проявление своих ценностей в моторной направленности. Предполагается наличие хорошей физической подготовки, здоровья и волевых качеств. Такие люди часто любят спорт, настойчивы и целеустремлённы.';
        document.getElementById('prof1').innerHTML = 'Тренер';
        document.getElementById('prof2').innerHTML = 'Спортсмен';
        document.getElementById('prof3').innerHTML = 'Водитель';
        document.getElementById('prof4').innerHTML = 'Лётчик';
        document.getElementById('prof5').innerHTML = 'Танкист';
        document.getElementById('prof6').innerHTML = 'Следователь';
        document.getElementById('prof7').innerHTML = 'Сотрудник полиции';
        document.getElementById('prof8').innerHTML = 'Прокурор';
        document.getElementById('prof9').innerHTML = 'Археолог';
        document.getElementById('prof10').innerHTML = 'Геолог';
        document.getElementById('prof11').innerHTML = 'Охранник';
        document.getElementById('prof12').innerHTML = 'Курьер';
    
        document.getElementById('img1').src = 'img/ph (1).svg';
        document.getElementById('img2').src = 'img/ph (2).svg';
        document.getElementById('img3').src = 'img/ph (3).svg';
    
        let prog = document.getElementById('myProg');
        prog.classList.remove('mat', 'log', 'tec', 'ar', 'soc');
        prog.classList.add('ph');
        prog.value = currentValues;
        
        let percent = currentValues * 3;
        document.getElementById('percent_num').innerHTML = percent + '%';
        document.getElementById('percent_num').style.color = '#E77101';
    
    }
    
    else if (currentCategory == 'art') {
        document.getElementById('res').classList.remove('material', 'logic', 'tech', 'physics', 'social');

        document.getElementById('res').classList.add('art');
    
        document.getElementById('prof').innerHTML = 'Художественная активность'
    
        document.getElementById('exp_info').innerHTML = '<b>Художественная активность -</b> стремление что-то выражать, творить. По способу проявления можно выделить  художественную, музыкальную, театральную и др. виды активности.';
        document.getElementById('prof1').innerHTML = 'Веб-дизайнер';
        document.getElementById('prof2').innerHTML = 'Дизайнер';
        document.getElementById('prof3').innerHTML = 'Актёр';
        document.getElementById('prof4').innerHTML = 'Режиссёр';
        document.getElementById('prof5').innerHTML = 'Писатель';
        document.getElementById('prof6').innerHTML = 'Ведущий';
        document.getElementById('prof7').innerHTML = 'Журналист';
        document.getElementById('prof8').innerHTML = 'Художник';
        document.getElementById('prof9').innerHTML = 'Фотограф';
        document.getElementById('prof10').innerHTML = 'Флорист';
        document.getElementById('prof11').innerHTML = 'Скульптор';
        document.getElementById('prof12').innerHTML = 'Стилист';
    
        document.getElementById('img1').src = 'img/art (1).svg';
        document.getElementById('img2').src = 'img/art (2).svg';
        document.getElementById('img3').src = 'img/art (3).svg';
    
        let prog = document.getElementById('myProg');
        prog.classList.remove('mat', 'log', 'tec', 'ph', 'soc');
        prog.classList.add('ar');
        prog.value = currentValues;
        
        let percent = currentValues * 3;
        document.getElementById('percent_num').innerHTML = percent + '%';
        document.getElementById('percent_num').style.color = '#DF4A3A';
    
    }
}

function navigateForward() {
    if (currentIndex < Object.keys(sortedData).length - 1) {
        currentIndex++;
        displayCurrentCategory();
    } else {
        console.log("Already at the last category.");
    }
}

function navigateBackward() {
    if (currentIndex > 0) {
        currentIndex--;
        displayCurrentCategory();
    } else {
        console.log("Already at the first category.");
    }
}

// Пример использования кнопок для навигации
document.getElementById('next').addEventListener('click', navigateForward);
document.getElementById('prev').addEventListener('click', navigateBackward);

displayCurrentCategory();


