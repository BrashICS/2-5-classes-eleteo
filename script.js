/*
 * ICS4U - Mr. Brash 🐿️
 * 2.5 - Classes
 *
 * Classes are BLUEPRINTS of an abstract data type.
 * To create a copy of one (called an instance) we use "new"
 * See the README.md file.
 * 
 * Author:
 */

'use strict';

class Circle {
    name = "Circle";
    radius = 1;
    area() {
        return Math.PI*this.radius**2
    }
}

class Rectangle {
    name = "Rectangle";
    length = 1;
    width = 1;
    area() {
        return this.length * this.width;
    }
    perimeter() {
        return this.length*2 + this.width*2;
    }
    is_square() {
        if (this.length == this.width) {
            return true;
        }
        else return false;
    }
}

class Vehicle {
    type = "";
    num_wheels;
    num_doors;
    num_seats;
    fuel = "";
    can_fly = false;
}

let rec = new Rectangle();
rec.name = "r";
rec.length = 4;
rec.width = 4;
console.log(rec.area());
console.log(rec.perimeter());
console.log(rec.is_square());