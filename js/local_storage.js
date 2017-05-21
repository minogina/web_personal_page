function getCookie(name){
  var matches=document.cookie.match(new RegExp("(?:^|; )"+name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,'\\$1')+"=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : 'undefined';
}

function setCookie(name,value,expiration){
    var string=name+'='+value+'; expires='+expiration.toGMTString();
    document.cookie=string;
}

var expirationDate=new Date();
expirationDate.setMinutes(expirationDate.getMinutes()+1);

function cookies(){
    if(getCookie('n')=='undefined')
        setCookie('n',1,expirationDate);
    setCookie('Cookie'+getCookie('n'),document.title+'@'+(new Date().toGMTString()),expirationDate);
    setCookie('n',(getCookie('n')-0)+1,expirationDate);

    if(sessionStorage.getItem('n')==null)
        sessionStorage.setItem('n',0);
    sessionStorage.setItem(sessionStorage.getItem('n'),document.title+'@'+new Date().toGMTString());
    sessionStorage.setItem('n',(sessionStorage.getItem('n')-0)+1);
}
window.onload=function(){
    cookies();
    setInterval(GetClock,1000);
}

function printHistory(){
    var tr,td,at;
    var table=document.getElementById('section').appendChild(document.createElement('table'));
    table.className='text';
    table.setAttribute('border','');
    table.setAttribute('cellspacing','0');
    var caption=table.appendChild(document.createElement('caption'));
    caption.className='text';
    caption.innerHTML='История текущего сеанса'; 
    for(var i=0;i<sessionStorage.getItem('n');i++){
        tr=table.appendChild(document.createElement('tr'));
        at=sessionStorage.getItem(i).indexOf('@');
        td=tr.appendChild(document.createElement('td'));
        td.innerHTML=sessionStorage.getItem(i).substr(0,at);
        td=tr.appendChild(document.createElement('td'));
        td.innerHTML=sessionStorage.getItem(i).substr(at+1,sessionStorage.getItem(i).length);
    }
    document.getElementById('section').appendChild(document.createElement('p'));
    table=document.getElementById('section').appendChild(document.createElement('table'));
    table.className='text';
    table.setAttribute('border','');
    table.setAttribute('cellspacing','0');
    caption=table.appendChild(document.createElement('caption'));
    caption.className='text';
    caption.innerHTML='История за всё время'; 
    for(var i=1;i<getCookie('n');i++){
        tr=table.appendChild(document.createElement('tr'));
        at=getCookie('Cookie'+i).indexOf('@');
        td=tr.appendChild(document.createElement('td'));
        td.innerHTML=getCookie('Cookie'+i).substr(0,at);
        td=tr.appendChild(document.createElement('td'));
        td.innerHTML=getCookie('Cookie'+i).substr(at+1,getCookie('Cookie'+i).length);
    }
}