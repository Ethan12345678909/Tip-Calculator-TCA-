let billAmount = 200;
let numberDiners = 4;
let serviceQuality = 'Great';

function calculateTip(){
  let tipPercent
switch (serviceQuality) {
  case 'Great':
    tipPercent = 0.20;
    break;
    case 'Good':
    tipPercent = 0.20;
    break;
    case 'Terrible':
    tipPercent = 0.20;
    break;
}
  return tipPercent * billAmount;
}

function calculateBill() {
  return calculateTip() + billAmount
}

function divideBill() {
  return calculateBill() / numberDiners
}

console.log('Total Tip: $' + calculateTip())
console.log('Total Bill: $' + calculateBill())
console.log('Each Person Owes: $' + divideBill())