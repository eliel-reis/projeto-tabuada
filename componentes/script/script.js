function tabuada(){
    var n1 = document.getElementById("txn1")
    var tab = document.getElementById("seltab")
    if (n1.value.length == 0){
        alert("Por favor digite um número!")
    } else{
        var nt = Number(n1.value) 
        var c = 1
        tab.innerHTML = " "
        while (c <= 10){
            var item = document.createElement("option")
            item.text = `${nt} X ${c} = ${nt*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}