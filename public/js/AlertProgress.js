export const createTaskReminderAlert = (taskCount) => {
    // Create the main container
    const container = document.createElement('div');
    container.id = 'taskReminderOrderAlert';
    container.className = 'ui icon warning message';

    // Create the icon
    const icon = document.createElement('i');
    icon.className = 'info circle flat icon';

    // Create the content div
    const content = document.createElement('div');
    content.className = 'content';

    // Create the "View Task" button
    const gotoTasks = document.createElement('a');
    gotoTasks.className = 'ui big right floated warning button';
    gotoTasks.textContent = 'View Task';
    gotoTasks.href = '/orders/RLnFFgXcgk3mY6Le3/tasks';

    // Create the header
    const header = document.createElement('div');
    header.className = 'header';
    header.textContent = `You Have ${taskCount} Outstanding ${taskCount === 1 ? 'Task' : 'Tasks'}`;

    // Create the paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Check the Tasks page to complete all requests and keep your closing on track.';

    // Assemble the elements
    content.appendChild(gotoTasks);
    content.appendChild(header);
    content.appendChild(paragraph);

    container.appendChild(icon);
    container.appendChild(content);

    return container;
}