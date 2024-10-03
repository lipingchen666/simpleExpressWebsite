import {fetchTaskData, fetchUserData} from "./common.js";
import { CompletedFormComponent } from "./CompletedFormComponent.js";

const init = async () => {
    const userData = await fetchUserData();
    const wrapper = document.getElementById('personalInformationTask')
    if (wrapper) {
        wrapper.innerHTML = '';
        const form = CompletedFormComponent(userData);
        wrapper.appendChild(form);
    }

    const tasks = await fetchTaskData();

    const inCompleteTaskCount = tasks.reduce((acc, task) => {
        if (!task.completed) {
            return acc + 1;
        }

        return acc
    }, 0);

    if (inCompleteTaskCount) {
        document.querySelector('.active.item.task-span').querySelector('span').textContent = inCompleteTaskCount;
    }
}

init();