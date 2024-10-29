
//Primer contacto
/*import { Observable, observable, Subscriber } from 'rxjs'

console.log('RxJS')

const observableAlfa$ = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
    a=b;
    subscriber.next(4);
});

const observador = {
    next: (value) => {
        console.log(value)
    },
    complete: ()=>{
        console.log('observable completado')
    },
    error: (error) => {
        console.log('Error resivido')
        console.error(error)
    }

};

observableAlfa$.subscribe(observador);
*/

//importacion de fromEvent
//import {fromEvent} from 'rxjs'

//fromEvent MouseMoveEvent
/*
const onMouseMove$ = fromEvent(document, "mousemove");

const observadorMouse = {
    next: (event) => {
        console.log(event.clientX)
    },
};

onMouseMove$.subscribe(observadorMouse);
*/

//fromEvent KeyDownEvent

/*
const onKeyDown$ = fromEvent(document, "keydown");

const observadorKeyDown$ = {
    next: (event) =>{
        console.log(event.key)
    }
};

onKeyDown$.subscribe(observadorKeyDown$)
*/