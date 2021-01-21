const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const userName = document.querySelector(".js-greetings");

const handleSubmit = (event)=>{
    event.preventDefault();
    const value = input.value;
    displayName(value);
    localStorage.setItem("name",value);
}

const getName = ()=>{
    form.classList.add("showing");
    form.addEventListener("submit",handleSubmit);

}

const displayName = (text)=>{
    form.classList.remove("showing");
    userName.classList.add("showing");
    
    userName.innerText = `Hello, ${text}`


}


const loadName = () =>{
    const name = localStorage.getItem("name");

    if(name===null){
        getName();
    }else{
        displayName(name);
    }
}

function init(){
    loadName();
}

init();