(function() {

    function init() {

        const myCanvas = document.getElementById("canvas");
        const context = myCanvas.getContext("2d");
        const canvasWidth = context.canvas.width;
        const canvasHeight = context.canvas.height;


        function getRandomInt(low, high) {
            const randomFloat = Math.random() * (high - low) + low;
            return Math.floor(randomFloat);
        };

        function generateLines(size, maxVelocity) {
            const lines = [];

            for (let i = 0; i < size; i++) {
                const line = {};
                if (Math.random() > 0.5) {
                    line.x = 0;
                    line.y = 0;
                    line.vy = getRandomInt(1, maxVelocity);
                    line.vx = 0;
                    line.h = getRandomInt(1, line.vy);
                    line.w = canvasWidth;
                    line.color = Math.random() < 0.7 ? 'black' : 'red';
                    lines.push(line);
                } else {
                    line.x = 0;
                    line.y = 0;
                    line.vx = getRandomInt(1, maxVelocity);
                    line.vy = 0;
                    line.w = getRandomInt(1, line.vx);
                    line.h = canvasHeight;
                    line.color = Math.random() < 0.7 ? 'black' : 'red';
                    lines.push(line);

                }
            }
            return lines;
        }

        const lines = generateLines(15, 15);




        /*   var lines = [{
                    x: 0,
                    y: 0,
                    w: canvasWidth,
                    h: 7,
                    color: 'red',
                    vx: 0,
                    vy: 9
                },
                {
                    x: 0,
                    y: 0,
                    w: canvasWidth,
                    h: 3,
                    color: 'black',
                    vx: 0,
                    vy: 5
                },
                {
                    x: 0,
                    y: 5,
                    w: 8,
                    h: canvasHeight,
                    color: 'black',
                    vx: 15,
                    vy: 0
                }

            ]; */


        function draw() {

            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            context.strokeRect(0, 0, context.canvas.width, context.canvas.height);

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                context.fillStyle = line.color;
                context.fillRect(line.x, line.y, line.w, line.h);


                if ((line.x + line.vx + line.w > canvasWidth) || (line.x - line.w + line.vx < 0)) {
                    line.vx = -line.vx;
                }
                if ((line.y + line.vy + line.h > canvasHeight) || (line.y - line.h + line.vy < 0)) {
                    line.vy = -line.vy;
                }
                line.x += line.vx;
                line.y += line.vy;
            }



            requestAnimationFrame(draw);

        }


        requestAnimationFrame(draw);

        function playSound(id) {
            const audio = document.getElementById(id);
            // Stop the sound in case it's already playing
            audio.pause();
            audio.currentTime = 0;
            audio.play();
        }


        playSound('old');


    }

    //invoke function init once document is fully loaded
    window.addEventListener('load', init, false);

}()); //self invoking function
