import {
    trigger,
    transition,
    state,
    animate,
    style
} from '@angular/animations';

export const dropDownAnimate =
    trigger('childAnimation', [
        // ...
        state('open', style({
            width: '250px',
            opacity: 1,
            backgroundColor: '#fff'
        })),
        state('closed', style({
            width: '100px',
            backgroundColor: '#fff',
            color: 'black',
            fontWeight: '600'
        })),
        transition(':leave', [
            animate('1s ease-out', style({
                opacity: 0.3,
                transform: 'translateY(100%)'
            }))
        ]),
        transition(':enter', [
            style({
                opacity: 0.3,
                transform: 'translateY(-100%)'
            }),
            animate('1s ease-in')
        ]),
    ])