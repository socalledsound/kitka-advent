

function createBorder(boxId, x, y, w, h, pulsing, gone){
    const anchor = document.createElement('a');
    anchor.className= 'divLink';
    anchor.href = `${baseURL}${boxId}`;
    const div = document.createElement('div');
    // div.appendChild(anchor);
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    div.style.width = `${w}px`;
    div.style.height = `${h}px`;
    div.className = 'box';
    if(gone){
        div.className += '';
    }
    if(pulsing){
        div.className += ' pulsing';
        div.addEventListener('click', (e)=>{
            // console.log(id);
            // console.log(starOffsets[id-1]);
            const {id, x, y} = starOffsets[boxId-1];
            const rotVal = Math.random() * 180;
            stars.push({id, x, y, rotVal});
           // users.push({id: 1, foo: "bar"});
           // 
            // visited
            // stars.push(starOffsets[id-1]);
            stars.forEach((star) =>{
                createStar(star.id, star.x, star.y, star.rotVal);
                e.target.className = 'box';

            })
        })
    }
    container.appendChild(div);
}

function createStar(id, x, y, rotVal){
    const star = document.createElement('div');
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.transform = `rotate(${rotVal}deg)`;
    star.className = 'star';
    star.id = `star${id}`;
    const img = document.createElement('img');
    img.src = 'img/star.png';
    star.appendChild(img);
    container.appendChild(star);
}



const baseURL = 'http://www.kitka.org/wintersongsdaily/dec'

const storage = window.localStorage;

const stars = JSON.parse(storage.getItem('starsFromStorage') || "[]");
// console.log(stars);

// stars = Array.from({length : starOffsets.length}, (star, i) => starOffsets[i]);
// stars = [];


document.body.addEventListener('mousemove', (e)=> {
    const rect = e.target.getBoundingClientRect();
    // console.log('x:', e.clientX - rect.x);
    // console.log('y:', e.clientY - rect.y);
})


const container = document.querySelector('#container');

boxes.forEach(box => {
    console.log('hi');
    createBorder(box.id, box.x, box.y, box.w, box.h, box.pulsing, box.gone);
})

// stars.forEach((star) =>{
//     createStar(star.id, star.x, star.y);
// })
