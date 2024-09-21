import { CompletedFormComponent } from "./CompletedFormComponent.js";
import {creatTaskComponent, taskComponent} from "./Task.js";
import { ProgressBar } from "./ProgressBar.js";
import { renderAccordions} from "./Accordian.js";

// const wrapper = document.getElementById('personalInformationTask')
//
// wrapper.innerHTML = '';
// const form = CompletedFormComponent();
// wrapper.appendChild(form);


async function fetchUserData() {
    try {
        const response = await fetch('/api/user');
        const data = await response.json();
        console.log('User data:', data);
        // You can use the data to update the DOM or perform other actions
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

async function fetchTaskData() {
    try {
        const response = await fetch('/api/tasks');
        const data = await response.json();
        console.log('Task Data:', data);
        // You can use the data to update the DOM or perform other actions
        return data;
    } catch (error) {
        console.error('Error fetching task data:', error);
    }
}

async function init() {
    const userData = await fetchUserData();
    const wrapper = document.getElementById('personalInformationTask')
    if (wrapper) {
        wrapper.innerHTML = '';
        const form = CompletedFormComponent(userData);
        wrapper.appendChild(form);
    }

    // dropzone
    // Dropzone.options.myDropzone = {
    //     paramName: "file", // The name that will be used to transfer the file
    //     maxFilesize: 2, // MB
    //     acceptedFiles: ".jpeg,.jpg,.png,.gif", // File types you want to accept
    //     dictDefaultMessage: "Drag files here or click to upload.", // Custom message
    //     init: function() {
    //         this.on("success", function(file, response) {
    //             console.log("File successfully uploaded: ", response);
    //         });
    //         this.on("error", function(file, errorMessage) {
    //             console.error("Error uploading file: ", errorMessage);
    //         });
    //     }
    // };
    // const dropzone1 = new Dropzone("#my-dropzone", { url: "/file/post" });
    if (document.querySelector('.filepond')) {
        FilePond.create(document.querySelector('.filepond'), {
            server: {
                url: '/upload',
                process: '/upload', // Server endpoint to process files
                revert: '/revert', // Server endpoint to revert uploads
                restore: '/restore', // Server endpoint to restore uploads
                load: '/load', // Server endpoint to load files
                fetch: null // If you need to fetch files dynamically
            },
            labelIdle: 'Drag & Drop your ids or <span class="filepond--label-action">Browse</span>',
        });
    }

    if (document.querySelector('.filepond.driver-front-scan')) {
        FilePond.create(document.querySelector('.filepond.driver-front-scan'), {
            server: {
                url: '/upload',
                process: '/upload', // Server endpoint to process files
                revert: '/revert', // Server endpoint to revert uploads
                restore: '/restore', // Server endpoint to restore uploads
                load: '/load', // Server endpoint to load files
                fetch: null // If you need to fetch files dynamically
            },
            labelIdle: 'Drag & Drop your license front side or <span class="filepond--label-action">Browse</span>',
        });
    }

    if (document.querySelector('.filepond.driver-back-scan')) {
        FilePond.create(document.querySelector('.filepond.driver-back-scan'), {
            server: {
                url: '/upload',
                process: '/upload', // Server endpoint to process files
                revert: '/revert', // Server endpoint to revert uploads
                restore: '/restore', // Server endpoint to restore uploads
                load: '/load', // Server endpoint to load files
                fetch: null // If you need to fetch files dynamically
            },
            labelIdle: 'Drag & Drop your license back side or <span class="filepond--label-action">Browse</span>',
        });
    }

    if (document.querySelector('.filepond.ssn-front-scan')) {
        FilePond.create(document.querySelector('.filepond.ssn-front-scan'), {
            server: {
                url: '/upload',
                process: '/upload', // Server endpoint to process files
                revert: '/revert', // Server endpoint to revert uploads
                restore: '/restore', // Server endpoint to restore uploads
                load: '/load', // Server endpoint to load files
                fetch: null // If you need to fetch files dynamically
            },
            labelIdle: 'Drag & Drop your SSN card front side or <span class="filepond--label-action">Browse</span>',
        });
    }

    if (document.querySelector('.filepond.ssn-back-scan')) {
        FilePond.create(document.querySelector('.filepond.ssn-back-scan'), {
            server: {
                url: '/upload',
                process: '/upload', // Server endpoint to process files
                revert: '/revert', // Server endpoint to revert uploads
                restore: '/restore', // Server endpoint to restore uploads
                load: '/load', // Server endpoint to load files
                fetch: null // If you need to fetch files dynamically
            },
            labelIdle: 'Drag & Drop your SSN card back side or <span class="filepond--label-action">Browse</span>',
        });
    }
    if (document.querySelector(".ui.very.relaxed.divided.items")) {
        const tasks = await fetchTaskData();
        tasks.forEach(task => {
            const taskItem = creatTaskComponent({
                dataId: task.dataId,
                link: task.link,
                imageSrc: task.imageSrc,
                title: task.title,
                timeToComplete: task.timeToComplete,
                description: task.description,
                completed: task.completed,
            })
            document.querySelector(".ui.very.relaxed.divided.items").appendChild(taskItem);
        });
        // const taskItem = taskComponent({});
        // document.querySelector(".ui.very.relaxed.divided.items").appendChild(taskItem);
        if (document.querySelector('.progress-container')) {
            const numCompleted = tasks.reduce((acc, task) => {
                const numToAdd = task.completed ? 1 : 0;
                return acc + numToAdd;
            }, 0)

            const progressBar = ProgressBar({
                percent: (numCompleted / tasks.length) * 100,
                numCompleted,
                numTotal: tasks.length,
            })

            document.querySelector('.progress-container').appendChild( progressBar)
        }
    }

    renderAccordions(".ui.equal.width.vertically.divided.grid.vesting");
}
// Call the async function
init();


