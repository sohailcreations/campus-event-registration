
const Registration = require('./registration');

class RegistrationManager {
    #registrations;

    constructor() {
        this.#registrations = [];
    }

    // Register a new student
    registerStudent(name, registrationNumber, workshop) {
        name = String(name ?? '').trim();
        registrationNumber = String(registrationNumber ?? '').trim();
        workshop = String(workshop ?? '').trim();

        // Validate required fields
        if (!name || !registrationNumber || !workshop) {
            return {
                success: false,
                message: "Error: All fields are required!"
            };
        }

        // Prevent duplicate registration numbers
        const duplicate = this.#registrations.some(
            student =>
                student.getRegistrationNumber() === registrationNumber
        );

        if (duplicate) {
            return {
                success: false,
                message: "Error: Registration number already exists!"
            };
        }

        // Create and store registration object
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

    // Display all registered students
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

    // Q3: Search student by registration number
    searchRegistration(registrationNumber) {
        registrationNumber = String(
            registrationNumber ?? ''
        ).trim();

        if (!registrationNumber) {
            return "Error: Registration number is required!";
        }

        const student = this.#registrations.find(
            student =>
                student.getRegistrationNumber() === registrationNumber
        );

        if (!student) {
            return "Registration not found!";
        }

        return "Registration Found!\n" +
            student.displayDetails();
    }
}
module.exports = RegistrationManager;