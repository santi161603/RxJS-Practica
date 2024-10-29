import { fromEvent } from 'rxjs';

const onKeyDown$ = fromEvent(document, "keydown");

const insertLetter = {
    next: (event)=>{
        console.log(event.key);
    }

}

onKeyDown$.subscribe(insertLetter);