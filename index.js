#!/usr/bin/env node

const cmd = require('commander');

const pjson = require('./package.json');

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);

cmd
    .version(pjson.version, '-v, --version')
    .option('-r, --random [quantity]')
    .option('-p, --path', 'path where to save downloaded images')
    .parse(process.argv);


// validating options
if (cmd.random) {
    console.log('get random', cmd.random);
} else {
    console.log('not random');
}

// confirm script processing

console.log("\nGotta Splash 'em all! (thanks to unsplash.com)");
console.log("\nDownloading images");

const ProgressBar = require('progress');
let bar = new ProgressBar(':bar', { total: 100 });

let count = 0;

function barTick() {
    count++;
    bar.tick();
    if (count >= 100) {
        clearInterval(this);
    }
}

setInterval(barTick, 500);
