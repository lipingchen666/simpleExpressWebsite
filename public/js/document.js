import {renderFileList} from "./FileCard.js";

const init = async () => {
    if (document.querySelector('.filepond')) {
        FilePond.create(document.querySelector('.filepond'), {
            server: {
                url: '/upload',
            },
            labelIdle: 'Drag & Drop your ids or <span class="filepond--label-action">Browse</span>',
        });
    }

    if (document.querySelector('.filepond.driver-front-scan')) {
        FilePond.create(document.querySelector('.filepond.driver-front-scan'), {
            server: {
                url: '/upload',
            },
            labelIdle: 'Drag & Drop your license front side or <span class="filepond--label-action">Browse</span>',
        });
    }

    if (document.querySelector('.filepond.driver-back-scan')) {
        FilePond.create(document.querySelector('.filepond.driver-back-scan'), {
            server: {
                url: '/upload',
            },
            labelIdle: 'Drag & Drop your license back side or <span class="filepond--label-action">Browse</span>',
        });
    }

    if (document.querySelector('.filepond.ssn-front-scan')) {
        FilePond.create(document.querySelector('.filepond.ssn-front-scan'), {
            server: {
                url: '/upload',
            },
            labelIdle: 'Drag & Drop your SSN card front side or <span class="filepond--label-action">Browse</span>',
        });
    }

    if (document.querySelector('.filepond.ssn-back-scan')) {
        FilePond.create(document.querySelector('.filepond.ssn-back-scan'), {
            server: {
                url: '/upload',
            },
            labelIdle: 'Drag & Drop your SSN card back side or <span class="filepond--label-action">Browse</span>',
        });
    }

    const files = await listAllUploadedFiles();

    const fileNodes = renderFileList(files);
    document.querySelector('.ui.stackable.cards').appendChild(fileNodes);
    console.log("files", files);
}

const listAllUploadedFiles = async () => {
    const response = await fetch('/api/files');
    return await response.json();

    // Add files to the FilePond instance
}

init();
