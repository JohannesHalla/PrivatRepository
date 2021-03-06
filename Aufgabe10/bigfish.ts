namespace Aufgabe10 {

    export class Bigfish {
        x: number;
        y: number;
        r: number;
        g: number;
        b: number;
        speed: number = 3;

        // declare method without keyword function
        move() {
            this.x -= this.speed;
        }

        draw(): void {

            //hitbox
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 75);
            crc2.lineTo(this.x + 143, this.y + 75);
            crc2.lineTo(this.x + 143, this.y);
            crc2.closePath();
            //Main.crc2.stroke();   //Hitbox anzeigen

            //Wolfkörper
            crc2.beginPath();
            crc2.moveTo(this.x + 40, this.y + 25);
            crc2.quadraticCurveTo(this.x + 40 + 120, this.y + 25 - 30, this.x + 40 + 100, this.y + 25 + 50);
            crc2.quadraticCurveTo(this.x + 40 + 80, this.y + 25 - 20, this.x + 40, this.y + 25 + 50);
            crc2.quadraticCurveTo(this.x + 40 + 10, this.y + 25 + 25, this.x + 40, this.y + 25);

            //Kopf         
            crc2.lineTo(this.x + 40 - 10, this.y + 25 - 10);
            crc2.quadraticCurveTo(this.x + 40 - 20, this.y + 25 - 20, this.x + 40 - 25, this.y + 25 - 15);
            crc2.quadraticCurveTo(this.x + 40 - 35, this.y + 25 - 10, this.x + 40 - 40, this.y + 25);
            crc2.quadraticCurveTo(this.x + 40 - 40, this.y + 25 + 15, this.x + 40 - 30, this.y + 25 + 10);
            crc2.quadraticCurveTo(this.x + 40 - 5, this.y + 25 - 5, this.x + 40 - 10, this.y + 25 - 10);

            // Ohren
            crc2.moveTo(this.x + 40 - 10, this.y + 25 - 10);
            crc2.lineTo(this.x + 40 - 5, this.y + 25 - 20);
            crc2.lineTo(this.x + 40 - 15, this.y + 25 - 15);
            crc2.lineTo(this.x + 40 - 15, this.y + 25 - 25);
            crc2.lineTo(this.x + 40 - 20, this.y + 25 - 18);
            crc2.closePath();

            // Mund
            crc2.moveTo(this.x + 40 - 30, this.y + 25 + 10);
            crc2.lineTo(this.x + 40 - 30, this.y + 25 + 2);
            crc2.lineTo(this.x + 40 - 25, this.y + 25 + 2);
            crc2.lineTo(this.x + 40 - 25, this.y + 25 - 4);
            crc2.lineTo(this.x + 40 - 20, this.y + 25 - 4);

            //Augen
            crc2.moveTo(this.x + 40 - 20, this.y + 25 - 8);
            crc2.arc(this.x + 40 - 20, this.y + 25 - 8, 1.5, 0 * Math.PI, 2 * Math.PI);

            crc2.moveTo(this.x + 40 - 27, this.y + 25 - 10);
            crc2.arc(this.x + 40 - 27, this.y + 25 - 10, 1.3, 0 * Math.PI, 2 * Math.PI);

            // Schwanz
            crc2.moveTo(this.x + 40 + 90, this.y + 25);
            crc2.lineTo(this.x + 40 + 130, this.y + 25 - 20);
            crc2.lineTo(this.x + 40 + 140, this.y + 25 - 10);
            crc2.lineTo(this.x + 40 + 130, this.y + 25 - 12);
            crc2.lineTo(this.x + 40 + 130, this.y + 25 - 7);
            crc2.lineTo(this.x + 40 + 122, this.y + 25 - 7);
            crc2.lineTo(this.x + 40 + 122, this.y + 25 - 2);

            crc2.fillStyle = '#696969';
            crc2.fill();

            crc2.closePath();
            crc2.stroke();
    }
    
}
    }