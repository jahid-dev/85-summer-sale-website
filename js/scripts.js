let itemName = document.getElementById('itemName')
let count = itemName.childElementCount;
count = 0;
function btnClick(e){

    let item = e.parentNode.childNodes[1].childNodes[3].childNodes[1].childNodes[3].innerText;
    let priceNode = e.parentNode.childNodes[1].childNodes[3].childNodes[1].childNodes[5].childNodes[0].innerText;
    let price = parseFloat(priceNode);

    let p = document.createElement('p');
    count ++;
    p.innerHTML = count + '.&nbsp;&nbsp;&nbsp;' + item + '&nbsp;&nbsp;&nbsp;'
    p.classList.add('remove');
    itemName.appendChild(p);

    let totalField = document.getElementById('total-price');
    let totalString = totalField.innerText;
    let totalPrice = parseFloat(totalString);
    let sum = totalPrice + price;
    totalField.innerText = sum; 

    let sumPrice = document.getElementById('total-price');
    sumPrice.innerText = sum.toFixed(2);

    let total = element('total');
    total.innerText = sum.toFixed(2);


      if (sum >= 200){
        let applyButton = document.getElementById('apply-button');
        applyButton.removeAttribute('disabled')  
      }

      if (sum > 0){
        let makePurchaseButton = element('make-purchase');
        makePurchaseButton.removeAttribute('disabled')
        console.log(makePurchaseButton);
      }

      //discount price
      
      document.getElementById('apply-button').addEventListener('click' ,function(){
        let applyField = element('apply-field').value;
        let couponCode = element('coupon-code').innerText;
        console.log(couponCode);

        if(applyField == couponCode){
          let sumTotalPrice = elementNumber('total-price');
          let discountPrice = (sumTotalPrice * 20) / 100;
          let discount = discountPrice.toFixed(2);
          let discountElement = element('discount-price');
          discountElement.innerText = discount;

          //now overall total
          let elementTotal = element('total');
          let overallTotal = sumTotalPrice - discountPrice;

          elementTotal.innerText = overallTotal.toFixed(2);

        }else{
          alert('you enter a wrong coupon');
          location.reload();
        }
      })
//call by element 
}
function elementNumber(id){
  let element = document.getElementById(id);
  let elementString = element.innerText;
  let number = parseFloat(elementString);
  return number;
}

function element(id){
  let element = document.getElementById(id);
  return element;
}

