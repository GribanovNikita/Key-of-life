let currentQuestion = 0;
let answers = [];
const questions = [
    { text: "1. Вы на выставке. Что вас больше привлекает в экспонатах?", variants:["А - цвет, совершенство форм", "Б - их внутреннее устройство (как и из чего они сделаны)"], options: ["a", "b", "c", "d"]},
    {text: "2. Какие черты характера в человеке вам больше нравятся?", variants:["А - дружелюбие, чуткость, отсутствие корысти", "Б - мужество, смелость, выносливость"], options: ["a", "b", "c", "d"]},
    {text: "3. Служба быта оказывает людям различные услуги (изготавливает обувь, шьет одежду ...), считаете ли вы необходимым?", variants:["А - и впредь развивать эту отрасль, чтобы всесторонне обслуживать людей", "Б - лучше создавать такую технику, которой можно было бы самим пользоваться в быту"], options: ["a", "b", "c", "d"]},
    {text: "4. Какое награждение вас больше бы обрадовало?", variants:["А - за общественную деятельность на благо общества", "Б - за научное изобретение"], options: ["a", "b", "c", "d"]},
    {text: "5. Вы смотрите военный или спортивный парад. Что больше привлекает ваше внимание?", variants:["А - слаженность ходьбы, грациозность участников парада", "Б - внешнее оформление колонн (знамена, одежда и пр.)"], options: ["a", "b", "c", "d"]},
    {text: "6. Представьте, что у вас много свободного времени. Чем бы вы охотнее занялись?", variants:["А - чем-либо практическим (ручным трудом)", "Б - общественной работой (на добровольных началах)"], options: ["a", "b", "c", "d"]},
    {text: "7. Какую выставку вы бы с большим удовольствием посмотрели?", variants:["А - новинок научной аппаратуры (в области физики, химии, биологии)", "Б - новые продовольственные товары"], options: ["a", "b", "c", "d"]},
    {text: "8. Если бы в школе было только два кружка, какой бы вы выбрали?", variants:["А - музыкальный", "Б - технический"], options: ["a", "b", "c", "d"]},
    {text: "9. Если бы вам предоставили пост директора школы, на что бы вы обратили больше внимания?", variants:["А - на сплочение коллектива", "Б - на создание необходимых удобств"], options: ["a", "b", "c", "d"]},
    {text: "10. Какие журналы вы бы с большим удовольствием читали?", variants:["А - литературно-художественные", "Б - научно-популярные"], options: ["a", "b", "c", "d"]},
    {text: "11. Что важнее для человека?", variants:["А - создавать себе благополучный, удобный быт", "Б - жить без некоторых удобств, но иметь возможность пользоваться сокровищами искусства"], options: ["a", "b", "c", "d"]},
    {text: "12. Что для благополучия общества необходимо?", variants:["А - техника", "Б - правосудие"], options: ["a", "b", "c", "d"]},
    {text: "13. Какую из двух книг вы бы с большим удовольствием читали?", variants:["А - о развитии науки в нашей страны", "Б - о достижениях спортсменов нашей стране"], options: ["a", "b", "c", "d"]},
    {text: "14. В газете две статьи разного содержания. Какая из них вызвала у вас большую заинтересованность?", variants:["А - статья о машине нового типа", "Б - статья о новой научной теории"], options: ["a", "b", "c", "d"]},
    {text: "15. Какая из двух работ на свежем воздухе вас больше бы привлекла?", variants:["А - ходячая работа (агроном, лесничий, дорожный мастер)", "Б - работа с машинами"], options: ["a", "b", "c", "d"]},
    {text: "16. Какая, на ваш взгляд, задача школы важнее?", variants:["А - подготовить учащихся к работе с людьми, чтобы они могли помогать другим создавать материальные блага", "Б - подготовить учащихся к практической деятельности, к умению создавать материальные блага"], options: ["a", "b", "c", "d"]},
    {text: "17. Что, на ваш взгляд, следует больше ценить у участников самодеятельности?", variants:["А - то, что они несут людям искусство и красоту", "Б - то, что они выполняют общественно-полезную работу"], options: ["a", "b", "c", "d"]},
    {text: "18. Какая, на ваш взгляд, область деятельности человека в дальнейшем будет иметь доминирующее значение?", variants:["А - физика", "Б - физическая культура"], options: ["a", "b", "c", "d"]},
    {text: "19. Что обществу принесет больше пользы?", variants:["А - забота о благосостоянии граждан", "Б - изучение поведения людей"], options: ["a", "b", "c", "d"]},
    {text: "20. Какого характера научную работу вы бы выбрали?", variants:["А - работу с книгами в библиотеке", "Б - работу на свежем воздухе в экспедиции"], options: ["a", "b", "c", "d"]},
    {text: "21. Представьте, что вы профессор университета. Какому бы предмету вы отдали предпочтение в свободное от работы время?", variants:["А - занятиям по литературе", "Б - опытам по физике, химии"], options: ["a", "b", "c", "d"]},
    {text: "22. Вам предоставляется возможность совершить путешествие в разные страны. В качестве кого вы бы охотнее поехали?", variants:["А - как известный спортсмен на международные соревнования", "Б - как известный специалист внешней торговли с целью покупки необходимых товаров для нашей страны"], options: ["a", "b", "c", "d"]},
    {text: "23. Какие лекции с большим удовольствием слушали бы вы?", variants:["А - о выдающихся художниках", "Б - о выдающихся ученых"], options: ["a", "b", "c", "d"]},
    {text: "24. Что вас больше всего привлекает при чтении книг?", variants:["А - яркое изображение смелости и храбрости героев", "Б - прекрасный литературный стиль"], options: ["a", "b", "c", "d"]},
    {text: "25. Вам предоставляется выбор профессии, Какой из них вы бы отдали предпочтение?", variants:["А - физической культуре или другой работе, связанной с движением", "Б - работе малоподвижной, но связанной с созданием новой техники"], options: ["a", "b", "c", "d"]},
    {text: "26. Какими выдающимися учеными вы больше интересуетесь?", variants:["А - Поповым и Циолковским", "Б - Менделеевым и Павловым"], options: ["a", "b", "c", "d"]},
    {text: "27. Как вам кажется, на что следовало бы в школе обратить большее внимание?", variants:["А - на спорт, так как это нужно для укрепления здоровья учашихся", "Б - на успеваемость учащихся, так как это необходимо для их будущего"], options: ["a", "b", "c", "d"]},
    {text: "28. Что бы вас больше заинтересовало в печати?", variants:["А - сообщение о состоявшейся художественной выставке", "Б - известие о прошедшем митинге в защиту прав человека"], options: ["a", "b", "c", "d"]},
    {text: "29. Если бы вам представилась возможность занять определенный пост, какой бы вы выбрали?", variants:["А - главного инженера завода", "Б - директора универмага"], options: ["a", "b", "c", "d"]},
    {text: "30. Как вы считаете, что важнее?", variants:["А - много знать", "Б - создавать материальные блага"], options: ["a", "b", "c", "d"]}
];

const results = {
  art: 0,
  tech: 0,
  social: 0,
  logic: 0,
  physics: 0,
  material: 0
};

let maxCategory = null;
let maxValue = -Infinity;

const clearRadioButtons = () => {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radioButton) => {
    radioButton.checked = false; // Сбрасываем выбор у каждого radio button
  });
};

const nextQuestion = () => {
    const selectedAnswer = document.querySelector('input[name="answ1"]:checked');
    if (currentQuestion === 0 || selectedAnswer) { // Добавляем проверку наличия выбранного ответа или если это первый вопрос
      if (selectedAnswer) {
        if (currentQuestion == 1){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.art += 3;
              break;
            case 'b':
              results.tech += 3;
              break;
            case 'c':
              results.art += 2;
              results.tech += 1;
              break;
            case 'd':
              results.art += 1;
              results.tech += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 2){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.social += 3;
              break;
            case 'b':
              results.physics += 3;
              break;
            case 'c':
              results.social += 2;
              results.physics += 1;
              break;
            case 'd':
              results.social += 1;
              results.physics += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 3){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.material += 3;
              break;
            case 'b':
              results.tech += 3;
              break;
            case 'c':
              results.material += 2;
              results.tech += 1;
              break;
            case 'd':
              results.material += 1;
              results.tech += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 4){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.social += 3;
              break;
            case 'b':
              results.logic += 3;
              break;
            case 'c':
              results.social += 2;
              results.logic += 1;
              break;
            case 'd':
              results.social += 1;
              results.logic += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 5){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.physics += 3;
              break;
            case 'b':
              results.art += 3;
              break;
            case 'c':
              results.physics += 2;
              results.art += 1;
              break;
            case 'd':
              results.physics += 1;
              results.art += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 6){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.tech += 3;
              break;
            case 'b':
              results.social += 3;
              break;
            case 'c':
              results.tech += 2;
              results.social += 1;
              break;
            case 'd':
              results.tech += 1;
              results.social += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 7){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.logic += 3;
              break;
            case 'b':
              results.material += 3;
              break;
            case 'c':
              results.logic += 2;
              results.material += 1;
              break;
            case 'd':
              results.logic += 1;
              results.material += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 8){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.art += 3;
              break;
            case 'b':
              results.tech += 3;
              break;
            case 'c':
              results.art += 2;
              results.tech += 1;
              break;
            case 'd':
              results.art += 1;
              results.tech += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 9){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.social += 3;
              break;
            case 'b':
              results.material += 3;
              break;
            case 'c':
              results.social += 2;
              results.material += 1;
              break;
            case 'd':
              results.social += 1;
              results.material += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 10){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.art += 3;
              break;
            case 'b':
              results.logic += 3;
              break;
            case 'c':
              results.art += 2;
              results.logic += 1;
              break;
            case 'd':
              results.art += 1;
              results.logic += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 11){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.material += 3;
              break;
            case 'b':
              results.art += 3;
              break;
            case 'c':
              results.material += 2;
              results.art += 1;
              break;
            case 'd':
              results.material += 1;
              results.art += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 12){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.tech += 3;
              break;
            case 'b':
              results.social += 3;
              break;
            case 'c':
              results.tech += 2;
              results.social += 1;
              break;
            case 'd':
              results.tech += 1;
              results.social += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 13){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.logic += 3;
              break;
            case 'b':
              results.physics += 3;
              break;
            case 'c':
              results.logic += 2;
              results.physics += 1;
              break;
            case 'd':
              results.logic += 1;
              results.physics += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 14){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.tech += 3;
              break;
            case 'b':
              results.logic += 3;
              break;
            case 'c':
              results.tech += 2;
              results.logic += 1;
              break;
            case 'd':
              results.tech += 1;
              results.logic += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 15){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.physics += 3;
              break;
            case 'b':
              results.tech += 3;
              break;
            case 'c':
              results.physics += 2;
              results.tech += 1;
              break;
            case 'd':
              results.physics += 1;
              results.tech += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 16){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.social += 3;
              break;
            case 'b':
              results.material += 3;
              break;
            case 'c':
              results.social += 2;
              results.material += 1;
              break;
            case 'd':
              results.social += 1;
              results.material += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 17){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.art += 3;
              break;
            case 'b':
              results.social += 3;
              break;
            case 'c':
              results.art += 2;
              results.social += 1;
              break;
            case 'd':
              results.art += 1;
              results.social += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 18){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.logic += 3;
              break;
            case 'b':
              results.physics += 3;
              break;
            case 'c':
              results.logic += 2;
              results.physics += 1;
              break;
            case 'd':
              results.logic += 1;
              results.physics += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 19){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.material += 3;
              break;
            case 'b':
              results.social += 3;
              break;
            case 'c':
              results.material += 2;
              results.social += 1;
              break;
            case 'd':
              results.material += 1;
              results.social += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 20){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.logic += 3;
              break;
            case 'b':
              results.physics += 3;
              break;
            case 'c':
              results.logic += 2;
              results.physics += 1;
              break;
            case 'd':
              results.logic += 1;
              results.physics += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 21){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.art += 3;
              break;
            case 'b':
              results.logic += 3;
              break;
            case 'c':
              results.art += 2;
              results.logic += 1;
              break;
            case 'd':
              results.art += 1;
              results.logic += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 22){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.physics += 3;
              break;
            case 'b':
              results.material += 3;
              break;
            case 'c':
              results.physics += 2;
              results.material += 1;
              break;
            case 'd':
              results.physics += 1;
              results.material += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 23){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.art += 3;
              break;
            case 'b':
              results.social += 3;
              break;
            case 'c':
              results.art += 2;
              results.social += 1;
              break;
            case 'd':
              results.art += 1;
              results.social += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 24){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.physics += 3;
              break;
            case 'b':
              results.art += 3;
              break;
            case 'c':
              results.physics += 2;
              results.art += 1;
              break;
            case 'd':
              results.physics += 1;
              results.art += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 25){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.tech += 3;
              break;
            case 'b':
              results.physics += 3;
              break;
            case 'c':
              results.tech += 2;
              results.physics += 1;
              break;
            case 'd':
              results.tech += 1;
              results.physics += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 26){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.tech += 3;
              break;
            case 'b':
              results.logic += 3;
              break;
            case 'c':
              results.tech += 2;
              results.logic += 1;
              break;
            case 'd':
              results.tech += 1;
              results.logic += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 27){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.physics += 3;
              break;
            case 'b':
              results.material += 3;
              break;
            case 'c':
              results.physics += 2;
              results.material += 1;
              break;
            case 'd':
              results.physics += 1;
              results.material += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 28){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.art += 3;
              break;
            case 'b':
              results.social += 3;
              break;
            case 'c':
              results.art += 2;
              results.social += 1;
              break;
            case 'd':
              results.art += 1;
              results.social += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 29){
          document.getElementById('nextButton').innerHTML = 'Завершить';
          switch(selectedAnswer.value)
          {
            case 'a':
              results.material += 3;
              break;
            case 'b':
              results.tech += 3;
              break;
            case 'c':
              results.material += 2;
              results.tech += 1;
              break;
            case 'd':
              results.material += 1;
              results.tech += 2;
              break;
          }
          answers.push(selectedAnswer.value);
        }
        if (currentQuestion == 30){
          switch(selectedAnswer.value)
          {
            case 'a':
              results.logic += 3;
              break;
            case 'b':
              results.material += 3;
              break;
            case 'c':
              results.logic += 2;
              results.material += 1;
              break;
            case 'd':
              results.logic += 1;
              results.material += 2;
              break;
          }
          answers.push(selectedAnswer.value);
          localStorage.setItem('results', JSON.stringify(results));
        }
      }

      for (const category in results) {
        if (results[category] > maxValue) {
          maxValue = results[category];
          maxCategory = category;
        }
      }

      if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        document.getElementById('question').innerText = question.text;
        document.getElementById('var_1').innerText = question.variants[0];
        document.getElementById('var_2').innerText = question.variants[1];
        document.getElementById('answ1').innerText = question.options[0];
        document.getElementById('answ2').innerText = question.options[1];
        document.getElementById('answ3').innerText = question.options[2];
        document.getElementById('answ4').innerText = question.options[3];
        currentQuestion++;
        document.getElementById('number_of_questions').innerText = currentQuestion + '/30'
      } else {

        answers.pop();

        localStorage.setItem('maxCategory', maxCategory);
        localStorage.setItem('maxValue', maxValue);

        document.getElementById('nextButton').disabled = true; // Disable the Next button after displaying results
        window.location.href='results.html';
      }
    }
  clearRadioButtons();
};


window.onload = nextQuestion;

document.getElementById("nextButton").addEventListener('click', nextQuestion);

document.querySelectorAll('input[type=radio]').forEach(radio => {
    radio.addEventListener('change', (event) => {answers[currentQuestion - 1] = event.target.value;
    });
});
