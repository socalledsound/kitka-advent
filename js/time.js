function getImage(currentHour){
    console.log(currentHour);
    if(currentHour < 8 || currentHour > 19){
        console.log('night');
        return nightImage; 
    } else {
        console.log('day');
        return dayImage;
    }
}


function setBoxes(currentDay){
   boxes.forEach( box => {

        if(currentDay >= box.id){
            box.pulsing = true;
       }
     
     

   })
}

// setInterval(outline, 1000);


const mainImage = document.querySelector('#main-image');
const dayImage = 'img/winter-day-use.png';
const nightImage = 'img/winter-night-use.jpg';
const time = new Date();
const hours = time.getHours();
// const day = time.getDate();
 const day = 31;

let currentImage = getImage(hours);
mainImage.src = currentImage;

setBoxes(day);

let counter = 0;

// function outline(){
//     console.log(counter);
//     console.log(boxes[counter].id);
//     boxes[counter].current = true;
//     boxes.forEach(item => {
//         console.log('hi');
//         createBorder(item.id, item.x, item.y, item.w, item.h, item.past, item.current);
//     })
//     counter++
// }


