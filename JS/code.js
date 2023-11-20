const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

let parsedCollisions
let collisionBlocks
let background
let doors
let count = 0;
const player = new Player({
 
    imageSrc: '../assets/king/idle.png',
    frameRate: 11,
    animations:{
        idleRight:{
            frameRate: 11,
            frameBuffer:4,
            loop: true,
            imageSrc: '../assets/king/idle.png',
        },
        idleLeft:{
            frameRate: 11,
            frameBuffer:4,
            loop: true,
            imageSrc: '../assets/king/idleLeft.png',
        },
        runRight:{
            frameRate: 8,
            frameBuffer:4,
            loop: true,
            imageSrc: '../assets/king/runRight.png',
        },
        runLeft:{
            frameRate: 8,
            frameBuffer:4,
            loop: true,
            imageSrc: '../assets/king/runLeft.png',
    
        },
        enterDoor:{
            frameRate: 8,
            frameBuffer:6,
            loop: false,
            imageSrc: '../assets/enterDoor.png',
            onComplete:() =>{
                aumentarContador()
                console.log('completed animation')
                overlay.opacity
                gsap.to(overlay, {
                    opacity:1,
                    onComplete: () =>{
                        level++,
                        levels[level].init(),
                        player.switchSprite('idleRight'),
                        player.preventInput = false,
                        gsap.to(overlay,{
                            opacity:0
                        })

                    }
                })
            },
            
    
        },
    }
})

let level = 1
let levels = {
    1:{
        init: () => {
            parsedCollisions = collissionsLevel1.parse2D()
            collisionBlocks = parsedCollisions.crateObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            
            if(player.currentAnimation){
                player.currentAnimation.isActive = false;
            }
            
            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
    },
    imageSrc: '../assets/Mapa 1 (1).png'
        })
        
        doors = [
            new Sprite({
                position:{
                    x:780,
                    y:277,
        
                },
                imageSrc:'../assets/Portas.png',
                frameRate: 5,
                frameBuffer:4,
                loop: false,
                autoplay: false,
            }),
        ]
        
    },
},

2:{
    init: () => {
        parsedCollisions = collissionsLevel2.parse2D()
        collisionBlocks = parsedCollisions.crateObjectsFrom2D()
        player.collisionBlocks = collisionBlocks
        player.position.x = 96
        player.position.y = 140

        if(player.currentAnimation){
            player.currentAnimation.isActive = false;
        }

        background = new Sprite({
            position: {
                x: 0,
                y: 0,
},
imageSrc: '../assets/Mapa 3 (1).png'
    })
    
    doors = [
        new Sprite({
            position:{
                x:767,
                y:340,
    
            },
            imageSrc:'../assets/Portas.png',
            frameRate: 5,
            frameBuffer:4,
            loop: false,
            autoplay: false,
        })
    ]

    fakeDoors = [
        new Sprite({
            position:{
                x:722,
                y:336,
    
            },
            imageSrc:'../assets/doorOpen.png',
            frameRate: 5,
            frameBuffer:4,
            loop: false,
            autoplay: false,
        })
    ]
}
},
3:{
    init: () => {
        parsedCollisions = collissionsLevel3.parse2D()
        collisionBlocks = parsedCollisions.crateObjectsFrom2D()
        player.collisionBlocks = collisionBlocks
        player.position.x = 750
        player.position.y = 230

        if(player.currentAnimation){
            player.currentAnimation.isActive = false;
        }

        background = new Sprite({
            position: {
                x: 0,
                y: 0,
},
imageSrc: '../assets/Mapa 2 (1).png'
    })
    
    doors = [
        new Sprite({
            position:{
                x:137,
                y:340,
    
            },
            imageSrc:'../assets/Portas.png',
            frameRate: 5,
            frameBuffer:4,
            loop: false,
            autoplay: false,
        })
    ]
}
}
}

function atualizarContador(){
    document.getElementById('ponto').innerText = count;
}


const overlay = {
    opacity: 0,
}

const keys = {
    w: {
        pressed: false,
    },
    a:{
        pressed: false, 
    },
    d:{
        pressed:false,
    },
}
function animate(){
    window.requestAnimationFrame(animate)
    
    background.draw()
    collisionBlocks.forEach(CollisionBlock =>{
        CollisionBlock.draw()
    })

    doors.forEach((door) =>{
        door.draw()
    })
    
    
    player.handleInput(keys)
    player.draw();
    player.update();


    c.save()
    c.globalAlpha = overlay.opacity
    c.fillStyle = 'black'
    c.fillRect(0,0,canvas.width,canvas.height)
    c.restore()

}
levels[level].init()
animate();

function aumentarContador() {
    console.log('Deu certo');
    count++;
    atualizarContador();
  }

  function atualizarContador() {
    document.getElementById('count').innerText = count;
  }