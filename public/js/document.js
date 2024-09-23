const init = async () => {
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
}

init();
