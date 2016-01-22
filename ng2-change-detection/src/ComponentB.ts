
import {ChangeDetectionLoggingComponent} from "./ChangeDetectionLoggingComponent";
import {Component, Input} from "angular2/core";
import {ComponentD} from "./ComponentD";
import {ComponentE} from "./ComponentE";

@Component({
    selector: 'component-b',
    directives: [ComponentD, ComponentE],
    template: `<div class="component-b">
                    <component-d [counter]="counter"></component-d>
                    <component-e [counter]="counter"></component-e>
                    <div class="counter">B: {{counter}}</div>
               </div>`
})
export class ComponentB extends ChangeDetectionLoggingComponent  {

    @Input() counter = 0;

    constructor() {
        super('    ComponentB');
    }

}