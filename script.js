function changeColor() {
    document.body.style.backgroundColor = 'black';
}
let y=[]
function calculate(){
    let x;
    if (document.getElementById('drop').value==='add')
        x=Number(document.getElementById('i1').value)+Number(document.getElementById('i2').value);
    else if (document.getElementById('drop').value==='substract')
        x=Number(document.getElementById('i1').value)-Number(document.getElementById('i2').value);
    else if (document.getElementById('drop').value==='multiply')
        x=Number(document.getElementById('i1').value)*Number(document.getElementById('i2').value);
    else if (document.getElementById('drop').value==='divide')
        x=Number(document.getElementById('i1').value)/Number(document.getElementById('i2').value);
    console.log(x);
    document.getElementById('result').innerText = `${x}\n${y}`;
    y.push(x);

    
}