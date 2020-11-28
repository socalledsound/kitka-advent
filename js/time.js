function getImage(currentHour, day){
    console.log(currentHour);
    if(currentHour < 6 || currentHour > 19){
        if(day === 31){
            return nightGreenImage
        } 
        return nightWinterImage; 
    } else {
        if(day === 31){
            return dayGreenImage
        } 
        return dayWinterImage;
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
const time = new Date();
const hours = time.getHours();
//const day = time.getDate();
 const day = 31;

let currentImage = getImage(hours, day);
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


