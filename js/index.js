let el = document.querySelectorAll('.hoverElement');

let k = 0;

for (let i = 0; i < el.length; i++) {
    el[i].onclick =  function() {
        el[i].style.background = 'red';
        console.log(k);
        k++;
    };
    console.log(el[i]);
    
}