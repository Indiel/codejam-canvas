let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let URL4 = 'data/4x4.json';
let json4 = [];

let xhr4 = new XMLHttpRequest();
xhr4.responseType = 'json';
xhr4.addEventListener('load', function () {
    json4 = xhr4.response;
});
xhr4.open('GET', URL4);
xhr4.send();

let URL32 = 'data/32x32.json';
let json32 = [];

let xhr32 = new XMLHttpRequest();
xhr32.responseType = 'json';
xhr32.addEventListener('load', function () {
    json32 = xhr32.response;
});
xhr32.open('GET', URL32);
xhr32.send();

function draw(data, type) {
    let pixel = canvas.width / data.length;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (type == 'hex') {
                ctx.fillStyle = `#${data[i][j]}`;
            } else if (type == 'rgba') {
                ctx.fillStyle = `rgba(${data[i][j][0]}, ${data[i][j][1]}, ${data[i][j][2]}, ${data[i][j][3]})`;
            }
            ctx.fillRect(i * pixel, j * pixel, pixel, pixel);
        }
    }
}

let button4 = document.getElementById('btn-4');
let button32 = document.getElementById('btn-32');
let image = document.getElementById('btn-image');

button4.addEventListener('click', () => {
    draw(json4, 'hex');
});

button32.addEventListener('click', () => {
    draw(json32, 'rgba');
});

let img = new Image();
img.src = 'data/image.png';
image.addEventListener('click', () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
});