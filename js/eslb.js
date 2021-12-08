var re=document.getElementsByClassName('region')[0];
var rpic=document.getElementsByClassName('pic')[0];
var class1=document.getElementsByClassName('clas')[0];
var more1=document.getElementsByClassName('more')[0];
function reg(){
    re.style.display='flex';
    rpic.style.display='none';
    class1.style.display='none';
    more1.style.display='none';
}
function pric(){
    re.style.display='none';
    rpic.style.display='flex';
    class1.style.display='none';
    more1.style.display='none';
}
function cla(){
    re.style.display='none';
    rpic.style.display='none';
    class1.style.display='flex';
    more1.style.display='none';
}
function mor(){
    re.style.display='none';
    rpic.style.display='none';
    class1.style.display='none';
    more1.style.display='flex';
}