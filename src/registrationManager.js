const Registration = require('./registration');

class RegistrationManager {
    #registrations;

    constructor() {
        this.#registrations = [];
    }

    registerStudent(name, registrationNumber, workshop) {
        name = String(name ?? '').trim();
        registrationNumber = String(registrationNumber ?? '').trim();
        workshop = String(workshop ?? '').trim();

        if (!name || !registrationNumber || !workshop) {
            return {
                success: false,
                message: "Error: All fields are required!"
            };
        }

        const duplicate = this.#registrations.some(
            student => student.getRegistrationNumber() === registrationNumber
        );

        if (duplicate) {
            return {
                success: false,
                message: "Error: Registration number already exists!"
            };
        }
        const student = new Registration(
            name,
            registrationNumber,
            workshop
        );

        this.#registrations.push(student);

        return {
            success: true,
            message: "Student registered successfully!"
        };
    }
    listRegistrations() {
        if (this.#registrations.length === 0) {
            return "No registrations found.";
        }

        return this.#registrations
            .map((student, index) =>
                `${index + 1}. ${student.displayDetails()}`
            )
            .join('\n');
    }
}
module.exports = RegistrationManager;