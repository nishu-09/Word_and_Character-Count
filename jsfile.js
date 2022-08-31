const countwords=()=>{
    let noc=document.getElementById('word-count-input').value.length;
    let now=document.getElementById('word-count-input').value;
    now=now.match(/\w+/g);
    now=now.length;
    document.getElementById('word-count').innerHTML=now;
    document.getElementById('character-count').innerHTML=noc;
}
const clrs=document.getElementById('clr');
const text=document.getElementById("word-count-input");
clrs.onclick=()=>{
    text.value="";
    document.getElementById('word-count').innerHTML=0;
    document.getElementById('character-count').innerHTML=0;
}