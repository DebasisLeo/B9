document.getElementById('cb').addEventListener('click',function()
{
    let tp=parseFloat(document.getElementById('total').innerText)
    
    if (document.getElementById('coop').value==="EID30") {
        document.getElementById('grand').innerText=tp/20;
    }
    else
    {
        document.getElementById('grand').innerText=tp;
    }
})
