
let i = 0;
let text1 = "Привет, Женечка!!!";
let text2 = "Сегодня очень важный день!!!/nВсемирный день пилотов!!!/n.../n.../nха-ха-ха-ха-ха это был розыгрыш./nГораздо важнее то, что в этот день родился очень дорогой мне человек, с которым мы когда-то (дадада я вообще-то помню, что 30 августа, а не когда-то, предупреждая пилочку) связвли наши жизни!/nЯ поздравляю тебя с днем рождения! Ты - замечтальный, солнечный человек, который КАЖДЫЙ день, начиная с нашего самого знакомства, наполняет мою жизнь оргомным количеством света, радости и положительных эмоций./nС каждым новым днем с тобой вместе я только больше и больше становлюсь уверен в том, что ты тот самый мой человек./nЖеня, в тебе есть огромное количество прекрасных качеств, за которые я тебя очень сильно люблю. И сейчас я хочу немного посмотреть на небольшую их часть, ну и просто на какие-то приятные мне моменты, связанные с тобой.";
let speed = 100;

function typeWriter(text, para) {
    if (ok == 2) {
        clearInterval(typeInterval);
    }
    if (i < text.length) {
        let char = text.charAt(i);
        if (char === "/") { // Проверяем на специальный символ для новой строки
            if (text.charAt(i+1) === "n") { // Если следующий символ 'n', вставляем <br>
                document.getElementById(para).innerHTML += "<br>";
                i++; // Пропускаем следующий символ 'n'
            }
        } else {
            document.getElementById(para).innerHTML += char;
        }
        i++;
        speed = Math.random() * 50 + 100;
    } else {
        if (ok == 0) {
            i = 0;
        }
        ok += 1;
    }
}


var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);
//};