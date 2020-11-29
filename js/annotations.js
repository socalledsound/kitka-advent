
const container = document.querySelector('#container');
const divs = Array.from({ length: 31 });
const baseURL = 'http://www.kitka.org/wintersongsdaily/dec'

const storage = window.localStorage;

const stars = JSON.parse(storage.getItem('starsInStorageArray') || "[]");
// const stars = [];
console.log(stars);


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
    div.id = `box${boxId}`;
    if(gone){
        div.className += '';
    }
    if(pulsing){
        div.className += ' pulsing';
        div.addEventListener('click', (e)=>{
            // console.log(id);
            // console.log(starOffsets[id-1]);
            const {id, x, y} = starOffsets[boxId - 1];
            const rotVal = Math.random() * 180;
            const found = stars.find(el => el.id === boxId);
            if(!found){
                stars.push({id, x, y, rotVal});
                storage.setItem('starsInStorageArray', JSON.stringify(stars));
                // boxes[boxId - 1].gone = true;
                // divs[boxId - 1].className = 'box';
                // divs[star.id-1].className = 'box';
               
            } 
            loadStars(stars);
            setTimeout(() => changePage(boxId), 500);
            // e.target.className = '';
            // e.target.className = 'box';
        })
    }
    container.appendChild(div);
    return div
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

function loadStars(stars){
    stars.forEach((star, i) => {
        createStar(star.id, star.x, star.y, star.rotVal);
        // divs[star.id].className = '';
        // console.log(divs);
        divs[star.id - 1 ].className = '';
    })
}



divs.forEach((div, i) => {
    const { id, x, y, w, h, pulsing, gone} = boxes[i]; 
    divs[i] = createBorder(id, x, y, w, h, pulsing, gone);
    console.log(divs);
})


loadStars(stars);


// document.body.addEventListener('mousemove', (e)=> {
//     const rect = e.target.getBoundingClientRect();
//     // console.log('x:', e.clientX - rect.x);
//     // console.log('y:', e.clientY - rect.y);
// })



// boxes.forEach(box => {
//     console.log('hi');
//     createBorder(box.id, box.x, box.y, box.w, box.h, box.pulsing, box.gone);
// })

// stars.forEach((star) =>{
//     createStar(star.id, star.x, star.y);
// })

function changePage(i){
    document.location.href = `${baseURL}${i}`;
}
