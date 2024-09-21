let ar=[];
let c=1;
function clickBtn(event)
{
    const seat = event.innerText;
    const index = ar.indexOf(seat);
    if (ar.length<=3 && index === -1 ) {
        event.classList.add('bg-red-300')
        event.classList.add('text-white')
      
        ar.push(event.innerText);
        document.getElementById('zero').innerText=ar.length;
        document.getElementById('four').innerText=40-ar.length;
        document.getElementById('u-tex').classList.add('hidden')
     let ul1=document.getElementById('u-1');
     ul1.innerHTML +=`<li class="flex justify-between">
     <span> ${event.innerText} </span>
     <span>Economy</span>
     <span>550</span>
     
     </li>`
     document.getElementById('total').innerText=550*c;
     let tp=parseFloat(document.getElementById('total').innerText)
     c++;
     
     if (ar.length>3) {
        document.getElementById('coop').removeAttribute('disabled');
        document.getElementById('cb').removeAttribute('disabled');
        
     }
    }
    else if(index !== -1)
    {ar.pop(event.innerText);
        event.classList.remove('bg-red-300')
        event.classList.remove('text-white')
        document.getElementById('four').innerText=40-ar.length;
        deleteLastChild()
       
    }
    else
    {
        return alert("maximum seat booked")
    }
    
 
}
function deleteLastChild() {
    let ul = document.getElementById('u-1');
    if (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }
}