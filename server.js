require('dotenv').config();

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const {ClerkExpressWithAuth, ClerkExpressRequireAuth} = require("@clerk/clerk-sdk-node");

const app = express();

console.log("secret", process.env.CLERK_SECRET_KEY);
console.log("secret", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

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

app.get('/',
    ClerkExpressWithAuth({
        // Add options here
        // See the Middleware options section for more details
    }),
    (req, res) => {
    console.log("auth", req.auth.userId);
    if (!req.auth.userId) {
        res.redirect('/auth/login');
        // res.redirect('https://wanted-parrot-2.accounts.dev/sign-in');
        return;
    }
    res.render('overview');
});
// Home route
app.get('/orders/RLnFFgXcgk3mY6Le3/overview', (req, res) => {
    res.render('overview', { script: 'overview.js' });
});

app.get('/orders/RLnFFgXcgk3mY6Le3/tasks/FEwEygDD7NDJD59x5',
    ClerkExpressWithAuth({
        // Add options here
        // See the Middleware options section for more details
    }),
    (req, res) => {
        if (!req.auth.userId) {
            res.redirect('/auth/login');
            return;
        }

        res.render('personalInfo', { script: 'personalInfo.js' });
});

app.get('/orders/RLnFFgXcgk3mY6Le3/documents',
    ClerkExpressWithAuth({
    // Add options here
    // See the Middleware options section for more details
    }),
    (req, res) => {
        if (!req.auth.userId) {
            res.redirect('/auth/login');
            return;
        }
        res.render('documents', { script: "document.js" });
});

app.get('/orders/RLnFFgXcgk3mY6Le3/tasks/',
    ClerkExpressWithAuth({
    // Add options here
    // See the Middleware options section for more details
    }),
    (req, res) => {
        if (!req.auth.userId) {
            res.redirect('/auth/login');
            return;
        }
        res.render('tasks', { script: "tasks.js" });
})

app.get('/orders/RLnFFgXcgk3mY6Le3/tasks/H9C5MgYWefYjyJ8dD',
    ClerkExpressWithAuth({
    // Add options here
    // See the Middleware options section for more details
    }),
    (req, res) => {
        if (!req.auth.userId) {
            res.redirect('/auth/login');
            return;
        }
        res.render('vesting', { script: "vesting.js" });
});

app.get('/auth/login', (req, res) => {
    res.render('login', { script: 'login.js', layout: 'main-empty' });
})


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
            completed: false,
            dateId: 'uploadPhotoID',
            link: '/orders/RLnFFgXcgk3mY6Le3/tasks/27iCDMN9tWARhPPMf',
            imageSrc: 'https://connect.qualia.com/images/artwork/document.png',
            timeToComplete: 3,
            title: 'Upload Photo',
            description: 'Your settlement agency has asked you to upload a copy of your government-issued photo ID for your closing.'
        },
        {
            completed: true,
            dateId: 'lenderContactInfo',
            link: "/orders/RLnFFgXcgk3mY6Le3/tasks/LzvSsZ6GDh9bg6i5M",
            imageSrc: 'https://connect.qualia.com/images/artwork/lending.png',
            timeToComplete: 3,
            title: 'Confirm Lender Contact Information',
            description: 'Your settlement agency has asked you to provide contact information for your lender.'
        },
        {
            completed: false,
            dateId: 'personalInfo',
            link: "/orders/RLnFFgXcgk3mY6Le3/tasks/FEwEygDD7NDJD59x5",
            imageSrc: 'https://connect.qualia.com/images/artwork/avatar1.png',
            timeToComplete: 15,
            title: 'Confirm Your Personal Information',
            description: 'Your settlement agency has asked you to confirm basic personal details for your closing.'
        },
        {
            completed: false,
            dateId: 'vestingInfo',
            link: "/orders/RLnFFgXcgk3mY6Le3/tasks/H9C5MgYWefYjyJ8dD",
            imageSrc: 'https://connect.qualia.com/images/artwork/deed.png',
            timeToComplete: 10,
            title: 'Select Your Title Vesting',
            description: ' Your settlement agency has asked you to select the way you will hold title to your property.'
        },
    ]

    res.json(tasks);
})

app.get('/api/vesting', (req, res) => {
    const vesting = {

    }

    res.json(tasks);
})


// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
