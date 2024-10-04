require('dotenv').config();

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const {ClerkExpressWithAuth, ClerkExpressRequireAuth} = require("@clerk/clerk-sdk-node");
const { createClient } = require("@supabase/supabase-js");
const {memoryStorage} = require("multer");
const multer = require("multer");
const {unlinkSync, readFileSync} = require("node:fs");

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("secret", process.env.CLERK_SECRET_KEY);
console.log("secret", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
console.log("secret1", supabaseUrl);
console.log("secret1", supabaseAnonKey);
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const storage = memoryStorage();
// const upload = multer({ dest: 'uploads/' });
const upload = multer({ storage });

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
    res.render('overview', { script: 'overview.js', clerk: process.env.CLERK_FRONTEND_API, clerk_key: process.env.CLERK_PUBLISHABLE_KEY });
});
// Home route
app.get('/orders/RLnFFgXcgk3mY6Le3/overview',
    ClerkExpressWithAuth({
    // Add options here
    // See the Middleware options section for more details
    }),
    (req, res) => {
    if (!req.auth.userId) {
        res.redirect('/auth/login');
        return;
    }
    res.render('overview', { script: 'overview.js', clerk: process.env.CLERK_FRONTEND_API, clerk_key: process.env.CLERK_PUBLISHABLE_KEY });
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

        res.render('personalInfo', { script: 'personalInfo.js', clerk: process.env.CLERK_FRONTEND_API, clerk_key: process.env.CLERK_PUBLISHABLE_KEY });
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
        res.render('documents', { script: "document.js", clerk: process.env.CLERK_FRONTEND_API, clerk_key: process.env.CLERK_PUBLISHABLE_KEY });
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
        res.render('tasks', { script: "tasks.js", clerk: process.env.CLERK_FRONTEND_API, clerk_key: process.env.CLERK_PUBLISHABLE_KEY });
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
        res.render('vesting', { script: "vesting.js", clerk: process.env.CLERK_FRONTEND_API, clerk_key: process.env.CLERK_PUBLISHABLE_KEY});
});

app.get('/auth/login', (req, res) => {
    res.render('login', { script: 'login.js', layout: 'main-empty', clerk: process.env.CLERK_FRONTEND_API, clerk_key: process.env.CLERK_PUBLISHABLE_KEY });
})

app.patch('/users/:id', async (req, res) => {
    const { id } = req.params;        // Get the user ID from the URL parameters
    const userData = req.body;        // Get the user data from the request body

    try {
        // Update the user in the 'user_info' table where the 'id' matches
        const { data, error } = await supabase
            .from('user_info')
            .update(userData) // userData is an object containing fields to update
            .eq('id', id);    // Ensure the ID matches

        if (error) {
            return res.status(400).json({ error: error.message }); // Return an error if one occurs
        }

        // Return the updated user data
        res.status(200).json({ message: 'User updated successfully', data });
    } catch (error) {
        // Catch any other errors
        res.status(500).json({ error: error.message });
    }
});

//backend api
app.get('/api/users', async (req, res) => {
    // const mockUser = {
    //     id: '1',
    //     fullName: 'Liping Chen',
    //     email: 'flamechen123@gmail.com',
    //     citizenShip: 'us',
    //     ssn: '***-**-89',
    //     gender: 'male',
    //     maritalStatus: 'single',
    //     phone: '240-549-9487',
    //     dateOfBirth: '02/21/1994',
    //     primaryResidence: '8120 Craddock Road, Greenbelt, MD 20770',
    //     firstTimeHomeBuyer: 'yes',
    //     firstTimeHomeBuyerMd: 'yes',
    //     address: '8120 Craddock Road, Greenbelt, MD 20770',
    //     forwardingAddress: 'Same as Current',
    //     firstName: 'Liping',
    //     lastName: 'Chen',
    //     middleName: '',
    //     suffix: '',
    //     cellPhone: '240-549-9487',
    //     homePhone: '',
    //     workPhone: '',
    //     isPrimaryResidence: 'yes',
    //     currentAddress: '8120 Craddock Road',
    //     currentAddressCity: 'Greenbelt',
    //     currentAddressCounty: 'PC',
    //     currentAddressState: 'MD',
    //     currentAddressZipCode: '20770',
    // };
    //
    // const mockUser2 = {
    //     id: '2',
    //     fullName: 'Janelle Johnson',
    //     email: 'janellejohnson@gmail.com',
    //     citizenShip: 'U.S. Citizen',
    //     ssn: '',
    //     gender: 'female',
    //     maritalStatus: '',
    //     phone: '',
    //     dateOfBirth: '',
    // };
    const { data, error } = await supabase
        .from('user_info')
        .select('*');

    if (error) { throw error; }

    res.json(data);
});

app.get('/api/tasks', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('task')
            .select('*'); // Select all columns from the task table

        if (error) { throw error };

        res.status(200).json(data); // Return the list of tasks
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PATCH /tasks/:id - Update the completed status of a task by id
app.patch('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body; // Get the completed status from the request body

    try {
        const { data, error } = await supabase
            .from('task')
            .update({ completed }) // Update the completed status
            .eq('id', id); // Match the row by id

        if (error) throw error;

        res.status(200).json({ message: 'Task updated successfully', data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// app.get('/api/tasks', (req, res) => {
//     const tasks = [
//         {
//             completed: false,
//             dateId: 'uploadPhotoID',
//             link: '/orders/RLnFFgXcgk3mY6Le3/tasks/27iCDMN9tWARhPPMf',
//             imageSrc: 'https://connect.qualia.com/images/artwork/document.png',
//             timeToComplete: 3,
//             title: 'Upload Photo',
//             description: 'Your settlement agency has asked you to upload a copy of your government-issued photo ID for your closing.'
//         },
//         {
//             completed: true,
//             dateId: 'lenderContactInfo',
//             link: "/orders/RLnFFgXcgk3mY6Le3/tasks/LzvSsZ6GDh9bg6i5M",
//             imageSrc: 'https://connect.qualia.com/images/artwork/lending.png',
//             timeToComplete: 3,
//             title: 'Confirm Lender Contact Information',
//             description: 'Your settlement agency has asked you to provide contact information for your lender.'
//         },
//         {
//             completed: false,
//             dateId: 'personalInfo',
//             link: "/orders/RLnFFgXcgk3mY6Le3/tasks/FEwEygDD7NDJD59x5",
//             imageSrc: 'https://connect.qualia.com/images/artwork/avatar1.png',
//             timeToComplete: 15,
//             title: 'Confirm Your Personal Information',
//             description: 'Your settlement agency has asked you to confirm basic personal details for your closing.'
//         },
//         {
//             completed: false,
//             dateId: 'vestingInfo',
//             link: "/orders/RLnFFgXcgk3mY6Le3/tasks/H9C5MgYWefYjyJ8dD",
//             imageSrc: 'https://connect.qualia.com/images/artwork/deed.png',
//             timeToComplete: 10,
//             title: 'Select Your Title Vesting',
//             description: ' Your settlement agency has asked you to select the way you will hold title to your property.'
//         },
//     ]
//
//     res.json(tasks);
// })

app.get('/api/vesting', (req, res) => {
    const vesting = {

    }

    res.json(tasks);
})

app.post('/api/vesting', (req, res) => {

})

app.post('/upload', upload.single('filepond'), async (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
        const { data, error } = await supabase.storage
            .from('qualia') // Replace with your Supabase bucket name
            .upload(`uploads/${file.originalname}`, file.buffer , { upsert: true });

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        // Optionally, get the public URL of the uploaded file
        const { publicURL } = supabase.storage
            .from('qualia')
            .getPublicUrl(data.path);

        res.status(200).json({
            message: 'File uploaded successfully',
            fileUrl: publicURL,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/files', async (req, res) => {
    try {
        // Replace 'your-bucket-name' with your actual Supabase bucket name
        const { data, error } = await supabase.storage
            .from('qualia') // Your bucket name
            .list('uploads');         // The folder path inside the bucket, or '' for the root

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.status(200).json(data); // Returns the list of files and folders
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /vesting/selected - Retrieve the selected Vesting entity
app.get('/vesting/selected', async (req, res) => {
    try {
        // Query the Supabase table to find the selected vesting
        const { data, error } = await supabase
            .from('vesting')
            .select('type')
            .eq('selected', true)
            .single(); // We expect only one record where selected = true

        if (error) throw error;

        // If no vesting is selected, return a 404
        if (!data) {
            return res.status(404).json({ message: 'No selected vesting found.' });
        }

        res.status(200).json(data); // Return the selected vesting
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.patch('/vesting/select/:type', async (req, res) => {
    const { type } = req.params;

    try {
        // Deselect the currently selected vesting (if any)
        const { error: deselectError } = await supabase
            .from('vesting')
            .update({ selected: false })
            .eq('selected', true);

        if (deselectError) throw deselectError;

        // Select the new vesting based on its type
        const { data, error } = await supabase
            .from('vesting')
            .update({ selected: true })
            .eq('type', type)
            .select() // Return the updated row
            .single(); // We expect a single record to be updated

        if (error) throw error;

        // If no vesting matches the type, return a 404
        if (!data) {
            return res.status(404).json({ message: `Vesting with type '${type}' not found.` });
        }

        res.status(200).json(data); // Return the updated vesting record
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
