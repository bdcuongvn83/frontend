//author : BUI DUC CUONG 
//ADDRESS: BACH DANG, 15 WARD, BINH THANH DISTRICT, HO CHI MINH CITY, VIETNAM

//var items =[];
var items = [{
  itemName: 'pizza1',
  itemQuantity: 1,
  itemPrice: 1000
},
{
  itemName: 'pizza2',
  itemQuantity: 1,
  itemPrice: 1000
},
{
  itemName: 'pizza3',
  itemQuantity: 1,
  itemPrice: 1000
}];
function fncRemove(index) {
  if (index < items.length) {
    items.splice(index, 1);
  }

  //console.log("items ", items);
  render();
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function fncIncreaseQuantity(index) {
  items[index].itemQuantity++;
  render();
}

function fncDecreaseQuantity(index) {
  items[index].itemQuantity--;
  render();
}

function addFood() {
  var item = {
    itemName: 'item' + getRandomInt(1, 100),
    itemQuantity: 1,
    itemPrice: getRandomInt(500, 1000)
  };

  items.push(item);


  //console.log("items ", items);
  render();
}

$(document).ready(function () {

  $("#checkoutId").click(function () {
    items = [];
    // addFood();//default
    render();
  });
  $("#addFoodId").click(function () {
    addFood();
  });
  render();
});

function render() {
 
  var htmlitems = items.map((item, index) => {
    return `<div class="item"> 

    <div class="itemName">` + item.itemName + `</div>
    <div class="itemQuantity">
        <button class="btnDecrease" onclick="fncDecreaseQuantity(` + index + `)">-</button>
        <input type="number" class="quantity" value="`+ item.itemQuantity + `"></input>
        <button class="btnIncrease" onclick="fncIncreaseQuantity(` + index + `)">+</button>
    </div>
    <div class="itemPrice">
        <span class="money">$`+ item.itemPrice + `</span>
        <button onclick="fncRemove(` + index + `)" class="btnRemove">x</button>
    </div>
    
</div>`
  }
  );


  $("#productId").html(htmlitems.join(''));
  //calculate subTotal
  var subTotal = 0;
  items.forEach((item) => {
    subTotal += item.itemPrice * item.itemQuantity;
  });
  $("#SubTotalId").text('$' + subTotal);

  //calculate shipping
  var shipping = Math.round(10 * subTotal / 100);
  $("#ShippingId").text('$' + shipping);
  //calculate Total
  var total = subTotal + shipping;
  $("#totalId").text('$' + total);


} 