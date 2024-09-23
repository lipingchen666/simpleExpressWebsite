import {creatTaskComponent} from "./Task.js";
import { fetchTaskData } from "./common.js";
import {ProgressBar} from "./ProgressBar.js";

const init = async () => {
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

        const inCompleteTaskCount = tasks.reduce((acc, task) => {
            if (!task.completed) {
                return acc + 1;
            }

            return acc
        }, 0);

        if (inCompleteTaskCount) {
            // const taskReminderAlert = createTaskReminderAlert(inCompleteTaskCount);
            // document.querySelector('#orderOverview .ui.container .alert-progress').appendChild(taskReminderAlert);
            document.querySelector('.ui.five.item.huge.tabular.menu a[href="/orders/RLnFFgXcgk3mY6Le3/tasks"]').querySelector('span').textContent = inCompleteTaskCount;
        }

        document.querySelector('.progress-container').appendChild( progressBar)
    }
}

init();