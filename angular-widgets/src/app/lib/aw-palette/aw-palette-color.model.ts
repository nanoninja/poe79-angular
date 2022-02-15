export class AwHSLModel {

    hue: number = 0;
    saturation: number = 0;
    light: number = 0;

    getComplementary(): number {
        return this.getHueFromAngle(180);
    }

    getAnalogPrev(): number {
        return this.hue - 30;
    }

    getAnalogNext(): number {
        return this.hue + 30;
    }

    print(hue: number, saturation: number, light: number): string {
        return `hsl(${hue}, ${saturation}%, ${light}%)`;
    }

    private getHueFromAngle(angle: number): number {
        if ((this.hue + angle) > 360) {
            return this.hue - angle;
        }
        return this.hue + angle;
    }

}