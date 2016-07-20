/// <reference path="Application/Kernel.ts" />

// import * as app from './Application/Kernel.ts';
// let Kernel = app.Application.Kernel;

try {
    let kernel = new Application.Kernel; 
} catch(e) {
    console.log(e.name);
    console.log(e.message);
}