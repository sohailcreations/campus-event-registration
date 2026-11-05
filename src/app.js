
const readline = require('readline');
const RegistrationManager = require('./registrationManager');

const manager = new RegistrationManager();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Reusable input function
function ask(question) {
    return new Promise(resolve => {
        rl.question(question, resolve);
    });
}

// Register student
async function registerStudent() {
    console.log('\n--- Student Registration ---');

    const name = await ask('Enter Student Name: ');
    const registrationNumber = await ask(
        'Enter Registration Number: '
    );

    console.log('\nAvailable Workshops:');
    console.log('1. Web Development');
    console.log('2. Artificial Intelligence');
    console.log('3. Cyber Security');

    const choice = await ask('Select Workshop (1-3): ');

    const workshops = {
        '1': 'Web Development',
        '2': 'Artificial Intelligence',
        '3': 'Cyber Security'
    };

    const workshop = workshops[choice.trim()] || '';

    const result = manager.registerStudent(
        name,
        registrationNumber,
        workshop
    );

    console.log('\n' + result.message);
}

// List all registrations
function listStudents() {
    console.log('\n--- Registered Participants ---');
    console.log(manager.listRegistrations());
}

// Q3: Search registration
async function searchStudent() {
    console.log('\n--- Search Registration ---');

    const registrationNumber = await ask(
        'Enter Registration Number to Search: '
    );

    const result = manager.searchRegistration(
        registrationNumber
    );

    console.log('\n' + result);
}

// Main application menu
async function main() {
    while (true) {
        console.log('\n================================');
        console.log(' CAMPUS EVENT REGISTRATION SYSTEM');
        console.log('================================');
        console.log('1. Register Student');
        console.log('2. View All Registrations');
        console.log('3. Search Registration');
        console.log('4. Exit');

        const choice = await ask('\nEnter your choice: ');

        switch (choice.trim()) {
            case '1':
                await registerStudent();
                break;

            case '2':
                listStudents();
                break;

            case '3':
                await searchStudent();
                break;

            case '4':
                console.log(
                    '\nThank you for using the system!'
                );
                rl.close();
                return;

            default:
                console.log(
                    '\nInvalid choice! Try again.'
                );
        }
    }
}

// Start application
main().catch(error => {
    console.error('Application error:', error.message);
    rl.close();
});