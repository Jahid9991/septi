let ince = document.getElementById('Inch');
let fot = document.getElementById('Foot');
let encountered = false;
let resultts = document.getElementById('results')
let form = document.querySelector('form')
var totalVal = 0
 

function result(){
    if(ince.value !=""|| fot.value !=""){
        var r = (ince.value**2)*fot.value/2304
        if(isNaN(r)){
            resultts.innerText = 'Wrong Input'
        }else{
        var li = document.createElement('li')
        li.className = 'list-box'
        var delB= document.createElement('button')
        delB.innerText = 'x'
        delB.className = 'delButton'
        span = document.createElement('span')
        span.append(r)
        li.append('Last septi = ')
        li.append(span)
        li.append(delB)
        var del = document.createElement('input')
        var ItemsL = document.getElementById('item-list')
        ItemsL.appendChild(li)
        ince.value = "";
        fot.value = "";}
        totalVal = r + totalVal;
        var xs= document.getElementById('total')
        xs.innerText = totalVal
    }else{
        resultts.innerText = 'Wrong Input'
    }
   
}
form.addEventListener('click', delFunction)
function delFunction(e){
    e.preventDefault();
    if(e.target.classList.contains('delButton')){
        var ItemsL = document.getElementById('item-list')
        var li = e.target.parentElement;
        ItemsL.removeChild(li)
        var z = li.querySelector('span').innerHTML
        // console.log(z)
        totalVal = totalVal - z
        // if(totalVal >=0){
        // if(xs.innerText<0){
        //     xs.innerText = 0
        // }else{
        var xs= document.getElementById('total')
            // if(xs.value <0){
        xs.innerText = totalVal
            // }
        
    // }
            // else{
            // var xs= document.getElementById('total')
            // xs.innerText = "You've nothing put"
            // }
    }
}