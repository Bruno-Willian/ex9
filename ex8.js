function PAC() {
    var Vi = parseInt(document.getElementById('vI').value);
    var VF = parseInt(document.getElementById('vF').value);
    var R = parseInt(document.getElementById('r').value);
    var Res = document.getElementById('res');
    Res.innerHTML = "";


 for(let i =Vi; i <= VF; i = i+R){
     Res.innerHTML+= i +"-";
 }




}

function PAD() {
    var Vi = parseInt(document.getElementById('vI').value);
    var VF = parseInt(document.getElementById('vF').value);
    var R = parseInt(document.getElementById('r').value);
    var Res = document.getElementById('RES');
    Res.innerHTML = "";


 for(let i = VF; i >= Vi; i = i-R){
     Res.innerHTML+= i +"-";
 }




}