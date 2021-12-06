


//grabbing hero 
const hero = document.querySelector(".hero");

//grabbing text 
const text = hero.querySelector("h1");

const walk = 100;  //100px

//method for creating shadow
function shadow(e)
{

    //get width and height of thing we have hovered over
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;

    let x = e.offsetX;
    let y = e.offsetY;




    //this is the thing we listened on i.e hero
    //target is the thing it actually triggered on

    if( this !== e.target)
    {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    
    const xWalk = Math.round((x/width * walk) - walk/2);
    const yWalk = Math.round((y/height * walk) - walk/2);


    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk*-1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk*-1}px 0 rgba(0,255,0,0.7),
    ${yWalk*-1}px ${xWalk}px 0 rgba(0,0,255,0.7)`;

    

}



 hero.addEventListener("mousemove", shadow);