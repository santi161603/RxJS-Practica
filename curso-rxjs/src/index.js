import { Observable, observable, Subscriber } from 'rxjs'

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
