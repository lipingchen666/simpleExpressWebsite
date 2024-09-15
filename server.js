const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();



// Set up Handlebars as the view engine
app.engine('hbs', exphbs.engine({
    extname: 'hbs', // Set the file extension for Handlebars files to .hbs
    defaultLayout: 'main', // Use the main.hbs layout by default
    layoutsDir: path.join(__dirname, 'views', 'layouts'), // Set the layout directory
    partialsDir: path.join(__dirname, 'views', 'partials') // Set the partials directory
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files like CSS from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/orders/RLnFFgXcgk3mY6Le3/overview', (req, res) => {
    res.render('overview');
});

app.get('/orders/RLnFFgXcgk3mY6Le3/tasks/FEwEygDD7NDJD59x5', (req, res) => {
    const user = [{
        firstName: 'Liping',
        lastName: 'Chen',
        email: 'flamechen123@gmail.com',
    }]
    res.render('personalInfo');
});

app.get('/orders/RLnFFgXcgk3mY6Le3/documents', (req, res) => {
    res.render('documents');
});

app.get('/orders/RLnFFgXcgk3mY6Le3/tasks/', (req, res) => {
    res.render('tasks');
})

app.get('/orders/RLnFFgXcgk3mY6Le3/tasks/H9C5MgYWefYjyJ8dD', (req, res) => {
    res.render('vesting');
});


//backend api
app.get('/api/user', (req, res) => {
    const mockUser = {
        id: '1',
        fullName: 'Liping Chen',
        email: 'flamechen123@gmail.com',
        citizenShip: 'us',
        ssn: '***-**-89',
        gender: 'male',
        maritalStatus: 'single',
        phone: '240-549-9487',
        dateOfBirth: '02/21/1994',
        primaryResidence: '8120 Craddock Road, Greenbelt, MD 20770',
        firstTimeHomeBuyer: 'yes',
        firstTimeHomeBuyerMd: 'yes',
        address: '8120 Craddock Road, Greenbelt, MD 20770',
        forwardingAddress: 'Same as Current',
        firstName: 'Liping',
        lastName: 'Chen',
        middleName: '',
        suffix: '',
        cellPhone: '240-549-9487',
        homePhone: '',
        workPhone: '',
        isPrimaryResidence: 'yes',
        currentAddress: '8120 Craddock Road',
        currentAddressCity: 'Greenbelt',
        currentAddressCounty: 'PC',
        currentAddressState: 'MD',
        currentAddressZipCode: '20770',
    };

    const mockUser2 = {
        id: '2',
        fullName: 'Janelle Johnson',
        email: 'janellejohnson@gmail.com',
        citizenShip: 'U.S. Citizen',
        ssn: '',
        gender: 'female',
        maritalStatus: '',
        phone: '',
        dateOfBirth: '',
    };
    const mockUsers = [mockUser, mockUser2];

    res.json(mockUsers);
});

app.get('/api/tasks', (req, res) => {
    const tasks = [
        {
            status: 'sent',
            name: 'Select Your Title Vesting',
            type: 'vesting'
        },
        {
            status: 'sent',
            type: 'uploadID'
        },
        {
            status: 'sent',
            type: 'personal Info'
        },
        {
            status: 'completed',
            type: 'lenderInfo'
        }
    ]

    res.json(tasks);
})


// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
