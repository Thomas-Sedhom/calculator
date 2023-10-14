const c = document.querySelector(".c");
const exit = document.querySelector(".exit");
const operator1 = Array.from(document.querySelectorAll(".oper"));
const operator2 = Array.from(document.querySelectorAll(".oper2"));
const numbers = Array.from(document.querySelectorAll(".num"));
const equal = document.querySelector(".equal");
const result = document.querySelector(".result");

var content = "";

console.log(numbers);

numbers.forEach(element => element.addEventListener("click", info => add(info)));

operator1.forEach((element, i) => {

        element.addEventListener("click", info => {

            if(i == 0) removeAll(info);

            else if(i == 1 ) removeOne(info);

            else add(info);
        })
});

operator2.forEach((element, i) => {

    element.addEventListener("click", (info) => {

        if(i == operator2.length - 1) final();

        else add(info)
    })
});

// add data to shaw window
function add(info){
    content += info.target.innerHTML;
    result.innerHTML = content;
}

//remove last chat
function removeOne(){
    content = content.substring(0, content.length - 1);
    result.innerHTML = content;
}

//remove all data
function removeAll(){
    content = "";
    result.innerHTML = content;
}

// final result
function final(){
    finalResult = eval(content);
    result.innerHTML = finalResult;
}

