const btn = document.getElementById('diploma-btn');
const container = document.getElementById("container")
const branch = [
    {
    code:'cs',
    name:"Computer Science"
},  {
    code:'me',
    name:"Mechanical Engineering"
},  {
    code:'ec',
    name:"Electronics Communication"
},  {
    code:'ce',
    name:"Civil Engineering"
}
]

function addbtn(){
}
function openLink(){
    // window.open("https://gptzcse.github.io/AllPapers/Diploma/Computer-Science-Engg/Sem-1/welcome.md","_self")
    container.innerHTML += `<input type="button" value="Diploma">`
}
// btn.onclick = openLink;
