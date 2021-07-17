var v1 = localStorage.getItem("big5_scores").substring(1).slice(0,-1);
var big5array = v1.split(",");
console.log(big5array);
big5array[0].replace("[", "");
console.log(big5array[0]);
var openn = parseInt(big5array[0]);
var conscience = parseInt(big5array[1]);
var extra = parseInt(big5array[2]);
var agree = parseInt(big5array[3]);
var neuro = parseInt(big5array[4]);

document.addEventListener("DOMContentLoaded", () => { scoresload(openn, conscience, extra, agree, neuro); });


function scoresload(o,c,e,a,n){
    document.getElementById("open").innerHTML = o;
    document.getElementById("cons").innerHTML = c;
    document.getElementById("extra").innerHTML = e;
    document.getElementById("agree").innerHTML = a;
    document.getElementById("neuro").innerHTML = n;
    var pero = (o/50)*100;
    var perc = (c/50)*100;
    var pere = (e/50)*100;
    var pera = (a/50)*100;
    var pern = (n/50)*100;
    
    document.getElementById("open").style["width"] = pero + "%";
    document.getElementById("cons").style["width"] = perc + "%";
    document.getElementById("extra").style["width"] = pere + "%";
    document.getElementById("agree").style["width"] = pera + "%";
    document.getElementById("neuro").style["width"] = pern + "%";
}