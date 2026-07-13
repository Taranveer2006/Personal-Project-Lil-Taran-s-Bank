const button = document.getElementById('1stbutton');
const paragraph = document.getElementById('balanceText');
const container = document.querySelector('div');
let balance = 5000;

function ensureButton(id, text, handler) {
  let element = document.getElementById(id);
  if (!element && container) {
    element = document.createElement('button');
    element.id = id;
    element.type = 'button';
    element.textContent = text;
    element.style.display = 'none';
    container.appendChild(element);
  }

  if (element && handler) {
    element.addEventListener('click', handler);
  }

  return element;
}

const depositButton = ensureButton('2ndbutton', 'Deposit Money', function() {
  const depositAmount = prompt('Enter the amount to deposit:');
  if (depositAmount !== null && depositAmount !== '' && !isNaN(depositAmount)) {
    balance += parseFloat(depositAmount);
    paragraph.textContent = `Your balance is $${balance}`;
  }
});

const withdrawButton = ensureButton('3rdbutton', 'Withdraw Money', function() {
  const withdrawAmount = prompt('Enter the amount to withdraw:');
  if (withdrawAmount !== null && withdrawAmount !== '' && !isNaN(withdrawAmount)) {
    balance -= parseFloat(withdrawAmount);
    paragraph.textContent = `Your balance is $${balance}`;
  }
});

if (button && paragraph) {
  button.addEventListener('click', function() {
    if (button.textContent === 'Check Balance') {
      paragraph.textContent = `Your balance is $${balance}`;
      button.textContent = 'Log Out';
      if (depositButton) depositButton.style.display = 'inline-block';
      if (withdrawButton) withdrawButton.style.display = 'inline-block';
    } else {
      paragraph.textContent = 'Click the button to see your balance.';
      button.textContent = 'Check Balance';
      if (depositButton) depositButton.style.display = 'none';
      if (withdrawButton) withdrawButton.style.display = 'none';
    }
  });
}

