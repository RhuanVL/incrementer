let count = 0;

const RESULT = document.getElementById('RESULT');

function incremental(){
    if(count >= 10)
    {
        count = 0;
        alert("Limite excedido");
    }
    count++;
    RESULT.innerHTML = count;
}

function decremental(){
    if(count <= 0){
        count = 1;
        alert("Números negativos não são permitidos");
    }
    count--;
    RESULT.innerHTML = count;
}