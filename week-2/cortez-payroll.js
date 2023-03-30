let name1 = 'Ludwig';

let name2 = 'Beethoven';

let address1 = '505 Main Street';

let hireDate1 = new Date('03/15/2023').toLocaleString('en-US');

let payRate1 = (18.9).toFixed(1);

let name3 = 'Johann';

let name4 = 'Bach';

let address2 = '512 Main Street';

let hireDate2 = new Date('03/15/2023').toLocaleString('en-US');

let payRate2 = (25.5).toFixed(1);

let name5 = 'Wolfgang';

let name6 = 'Mozart';

let address3 = '600 Main Street';

let hireDate3 = new Date('03/15/2023').toLocaleString('en-US');

let payRate3 = (50.1).toFixed(1);

document.querySelector('ul:nth-of-type(1) li:nth-of-type(1)').innerHTML = name1;

document.querySelector('ul:nth-of-type(1) li:nth-of-type(2)').innerHTML = name2;

document.querySelector('ul:nth-of-type(1) li:nth-of-type(3)').innerHTML =
  address1;

document.querySelector('ul:nth-of-type(1) li:nth-of-type(4)').innerHTML =
  hireDate1;

document.querySelector('ul:nth-of-type(1) li:nth-of-type(5)').innerHTML =
  payRate1;

document.querySelector('ul:nth-of-type(2) li:nth-of-type(1)').innerHTML = name3;

document.querySelector('ul:nth-of-type(2) li:nth-of-type(2)').innerHTML = name4;

document.querySelector('ul:nth-of-type(2) li:nth-of-type(3)').innerHTML =
  address2;

document.querySelector('ul:nth-of-type(2) li:nth-of-type(4)').innerHTML =
  hireDate2;

document.querySelector('ul:nth-of-type(2) li:nth-of-type(5)').innerHTML =
  payRate2;

document.querySelector('ul:nth-of-type(3) li:nth-of-type(1)').innerHTML = name5;

document.querySelector('ul:nth-of-type(3) li:nth-of-type(2)').innerHTML = name6;

document.querySelector('ul:nth-of-type(3) li:nth-of-type(3)').innerHTML =
  address3;

document.querySelector('ul:nth-of-type(3) li:nth-of-type(4)').innerHTML =
  hireDate3;

document.querySelector('ul:nth-of-type(3) li:nth-of-type(5)').innerHTML =
  payRate3;
