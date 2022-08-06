/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */
var expen, earn, current_v, total;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


expen = 0;
earn = 0;
total = 0;
current_v = 0;


document.getElementById('add').addEventListener('click', (event) => {
  let element_number = document.getElementById('number');
  current_v = getNumberOrString(document.getElementById('number').value);
  if (current_v > 0) {
    let element_list1 = document.getElementById('list1');
    let new_li = document.createElement('li');
    new_li.innerText = current_v;

    element_list1.appendChild(new_li);
    total = (typeof total === 'number' ? total : 0) + current_v;
    earn = (typeof earn === 'number' ? earn : 0) + current_v;
    let element_plus = document.getElementById('plus');
    element_plus.innerText = earn;
  } else {
    let element_list2 = document.getElementById('list2');
    let new_li2 = document.createElement('li');
    new_li2.innerText = current_v;

    element_list2.appendChild(new_li2);
    total = (typeof total === 'number' ? total : 0) + current_v;
    expen = (typeof expen === 'number' ? expen : 0) + current_v;
    let element_minus = document.getElementById('minus');
    element_minus.innerText = expen;
  }
  let element_balance = document.getElementById('balance');
  element_balance.innerText = total;

});
