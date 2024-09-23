import { fetchTaskData } from './common.js';
import { createTaskReminderAlert } from "./AlertProgress.js";

const init = async () => {
    const tasks = await fetchTaskData();

    const inCompleteTaskCount = tasks.reduce((acc, task) => {
        if (!task.completed) {
            return acc + 1;
        }

        return acc
    }, 0);

    if (inCompleteTaskCount) {
        const taskReminderAlert = createTaskReminderAlert(inCompleteTaskCount);
        document.querySelector('#orderOverview .ui.container .alert-progress').appendChild(taskReminderAlert);

        document.querySelector('.ui.six.item.huge.tabular.menu a[href="/orders/RLnFFgXcgk3mY6Le3/tasks"]').querySelector('span').textContent = inCompleteTaskCount;
    }
}

init();