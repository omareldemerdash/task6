var btnadd = document.querySelectorAll(".items #item #btnadd")
var cart = document.querySelector("#cart #content")
var btnshow = document.querySelector("#btnshow")
var totaldiv = document.querySelector(".totalprice")
var price = document.querySelector(" .totalprice #price")
var totalPrice = 0

btnadd.forEach(function (item){
    
        item.onclick=function() {
            totalPrice  +=   +(item.getAttribute("price"))
            cart.innerHTML += item.getAttribute("title") + ",, &nbsp;"

            if (cart.innerHTML != "" ){
                btnshow.style.display = "block";
                totaldiv.style.display= "block";
            }
        }

        
    
    
})
btnshow.onclick = function () {
    price.innerHTML = totalPrice
}