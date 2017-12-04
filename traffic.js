let trains = require('./train.js')();
let cars = require('./car.js')();
let traffic = [trains, cars];

process.stdin.on('readable', () => {
    const chunk = (process.stdin.read() + '').trim();
    if (chunk.toLowerCase() === 'car') {
        traffic = cars;
    } else if (chunk.toLowerCase() === 'train') {
        traffic = trains;
    } else if (chunk !== null) {
        let output = traffic[parseInt(chunk) - 1];
        process.stdout.write(output ? output : `555555.....\n`);
    } else {
        process.stdout.write(`555555.....\n`);
    }
});

process.stdin.on('end', () => {
    process.stdout.write('end');
});
