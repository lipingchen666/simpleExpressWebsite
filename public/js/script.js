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
    // renderAccordions(".ui.equal.width.vertically.divided.grid.vesting");
}
// Call the async function
init();


