let now = Date.now();
if (!Date.now) {
    Date.now = function{return new Date().getTime();}
}

const current = document.querySelector(".current");
current.innerHTML = now;
