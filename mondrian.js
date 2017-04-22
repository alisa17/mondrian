
(function(){

function init(){
    //  var canvas = document.getElementsByTagName('canvas')[0];
    //  var c = canvas.getContext('2d');
     //
    //  var container = {x:100,y:100,width:1200,height:800};
    //  var circles = [{x:400,y:400,r:50,color:25,vx:6,vy:10},
    //                 {x:500,y:300,r:100,color:125,vx:2,vy:-8},
    //                 {x:800,y:350,r:25,color:285,vx:20,vy:-20},
    //                 {x:800,y:700,r:75,color:325,vx:13,vy:-8},
    //                 {x:400,y:500,r:120,color:175,vx:-4,vy:-6}
    //  ];

    var myCanvas = document.getElementById("canvas");


var context = myCanvas.getContext("2d");

        var lines = [{
                x: 0,
                y: 0,
                w: 7,
                color: 'red',
                vx: 0,
                vy: 9
            },
            {
                    x: 0,
                    y: 0,
                    w: 3,
                    color: 'black',
                    vx: 0,
                    vy: 5
                }
        ];


     function draw(){

       context.clearRect(0, 0, context.canvas.width, context.canvas.height);
       context.strokeRect(0, 0, context.canvas.width, context.canvas.height);

       for (var i = 0; i < lines.length; i++) {
           var line = lines[i];
           context.fillStyle = line.color;
           context.fillRect(line.x, line.y, context.canvas.width, line.w);


           if ((line.y + line.vy + line.w > context.canvas.height) || (line.y - line.w + line.vy < 0)) {
               line.vy = -line.vy;
           }
           line.x += line.vx;
           line.y += line.vy;
       }



         requestAnimationFrame(draw);

     }


    requestAnimationFrame(draw);


}

//invoke function init once document is fully loaded
window.addEventListener('load',init,false);

}());  //self invoking function
