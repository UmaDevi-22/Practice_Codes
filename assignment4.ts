// Exercise1

// Exercise 1: Basic Abstract Class
abstract class Shape {
    constructor(protected color: string) {}
    abstract calculateArea(): number;
    getColor(): string {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color: string, private radius: number) {
        super(color);
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(color: string, private width: number, private height: number) {
        super(color);
    }
    calculateArea(): number {
        return this.width * this.height;
    }
}


// Exercise2


interface Vehicle {
    speed: number;
    move(): void;
}

class Car implements Vehicle {
    constructor(public speed: number) {}
    move(): void {
        console.log(`Car is moving at ${this.speed} km/h`);
    }
}

class Bicycle implements Vehicle {
    constructor(public speed: number) {}
    move(): void {
        console.log(`Bicycle is moving at ${this.speed} km/h`);
    }
}

const car = new Car(80);
car.move();

const bicycle = new Bicycle(20);
bicycle.move();

// Exercise3

interface Flyable {
    fly(): void;
}

abstract class Bird {
    constructor(protected name: string) {}
    eat(): void {
        console.log(`${this.name} is eating.`);
    }
}

class Eagle extends Bird implements Flyable {
    fly(): void {
        console.log(`${this.name} is soaring high.`);
    }
}

class Sparrow extends Bird implements Flyable {
    fly(): void {
        console.log(`${this.name} is flying.`);
    }
}

const eagle = new Eagle("Eagle");
eagle.eat();
eagle.fly();

const sparrow = new Sparrow("Sparrow");
sparrow.eat();
sparrow.fly();

//Exercise4

interface Person {
    name: string;
    speak(): void;
}

interface Employee extends Person {
    salary: number;
    work(): void;
}

class Developer implements Employee {
    constructor(public name: string, public salary: number) {}
    speak(): void {
        console.log(`${this.name} says: Hello!`);
    }
    work(): void {
        console.log(`${this.name} is coding.`);
    }
}

const developer = new Developer("Alice", 70000);
developer.speak();
developer.work();


// Advanced 
// exercise 1

abstract class BankAccount {
    constructor(protected accountNumber: number, protected balance: number) {}
    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
    abstract withdraw(amount: number): boolean;
    getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends BankAccount {
    private withdrawalLimit: number = 500;
    withdraw(amount: number): boolean {
        if (amount > this.withdrawalLimit || amount > this.balance) {
            console.log("Withdrawal denied: exceeds limit or insufficient funds.");
            return false;
        }
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        return true;
    }
}

class CheckingAccount extends BankAccount {
    private overdraftLimit: number = 200;
    withdraw(amount: number): boolean {
        if (amount > this.balance + this.overdraftLimit) {
            console.log("Withdrawal denied: exceeds overdraft limit.");
            return false;
        }
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        return true;
    }
}

const savings = new SavingsAccount(12345, 1000);
savings.deposit(200);
savings.withdraw(600);
savings.withdraw(300);

const checking = new CheckingAccount(67890, 500);
checking.deposit(100);
checking.withdraw(700);
checking.withdraw(100);
