import { Component } from "@angular/core";
import { AwHSLModel } from "./aw-palette-color.model";

@Component({
    selector: 'aw-palette',
    styleUrls: ['./aw-palette.component.scss'],
    templateUrl: './aw-palette.component.html',
})
export class AwPaletteComponent {

    // hsl: { h: number, s: number, l: number } = {
    //     h: 0,
    //     s: 0,
    //     l: 0
    // };

    hsl: AwHSLModel;

    constructor() {
        this.hsl = new AwHSLModel();

        this.hsl.hue = 155;
        this.hsl.saturation = 60;
        this.hsl.light = 50;
    }

    get primary(): string {
        return this.hsl.print(
            this.hsl.hue,
            this.hsl.saturation,
            this.hsl.light
        );
    }

    get secondary(): string {
        return this.hsl.print(
            this.hsl.getAnalogNext(),
            this.hsl.saturation,
            this.hsl.light
        );
    }

    get tertiary(): string {
        return this.hsl.print(
            this.hsl.getComplementary(),
            this.hsl.saturation,
            this.hsl.light
        );
    }

}