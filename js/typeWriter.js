
let i = 0;
let text1 = "Привет, Женечка!!!";
let text2 = "Я тебя люблю/nТы такая красота и волшебство./nЯ восхищаюсь тобой каждый день";

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