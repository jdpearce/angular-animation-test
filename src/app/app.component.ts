import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

export enum RotationState {
    Default = 'default',
    Left = 'left',
    Right = 'right'
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('rotation', [
            state(
                RotationState.Default,
                style({
                    transform: 'rotate(0)'
                })
            ),
            state(
                RotationState.Right,
                style({
                    transform: 'rotate(90deg)'
                })
            ),
            state(
                RotationState.Left,
                style({
                    transform: 'rotate(-90deg)'
                })
            ),
            transition(`* => ${RotationState.Left}`, [animate('0.1s')]),
            transition(`* => ${RotationState.Right}`, [animate('0.1s')]),
            transition(`* => ${RotationState.Default}`, [animate('0.1s')])
        ])
    ]
})
export class AppComponent {
    title = 'animation-test';
    state: RotationState = RotationState.Default;

    rotateRight(): void {
        this.state = RotationState.Right;
    }
    rotateLeft(): void {
        this.state = RotationState.Left;
    }

    reset(): void {
        this.state = RotationState.Default;
    }
}
