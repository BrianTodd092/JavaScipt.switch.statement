var msg ;

switch(new Date().getDay()) {

case 0 :
msg = document.write('Sunday');
msg = document.getElementById('s').style.display= 'block';
break;
case 1 :
msg = document.write('Monday');
msg = document.getElementById('m').style.display= 'block';
break;
case 2 :
msg = document.write('Tuesday');
msg = document.getElementById('t').style.display= 'block';
break;
case 3 :
msg = dcument.write('Wednesday');
msg = document.getElementById('w').style.display= 'block';
break;
case 4 :
msg = document.write('Thursday');
msg = document.getElementById('th').style.display= 'block';
break;
case 5 :
msg = document.write('Friday');
msg = document.getElementById('f').style.display= 'block';
break;
default :
msg = document.getElementById('sa').style.display= 'block';
msg = document.write('Saturday');

break;
}

document.getElementById('y').textContent= msg;
