class Registration {
    #name;
    #registrationNumber;
    #workshop;

    constructor(name, registrationNumber, workshop) {
        this.#name = name;
        this.#registrationNumber = registrationNumber;
        this.#workshop = workshop;
    }

    getName() {
        return this.#name;
    }

    getRegistrationNumber() {
        return this.#registrationNumber;
    }

    getWorkshop() {
        return this.#workshop;
    }

    displayDetails() {
        return `Name: ${this.#name} | Registration No: ${this.#registrationNumber} | Workshop: ${this.#workshop}`;
    }
}

module.exports = Registration;