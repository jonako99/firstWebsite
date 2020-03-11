let flowers = [];

const addFlower = (ev)=>{
    ev.preventDefault();
    let flower = {
        id: Date.now(),
        name: document.getElementById('name').value,
        color: document.getElementById('color').value
    }
    flowers.push(flower);
    document.forms[0].reset();


    console.warn('added' , {flowers} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);


}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addMovie);
});