/// <reference path="Application/Kernel.ts" />

// import * as app from './Application/Kernel.ts';
// let Kernel = app.Application.Kernel;

import $ = require('jquery');

try {
    console.log('created kernel');
    let kernel = new Application.Kernel($); 
    console.log('created kernel');
} catch(e) {
    console.log(e.name);
    console.log(e.message);
}