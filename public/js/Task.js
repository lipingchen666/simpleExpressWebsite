export const taskComponent = (dataId, imageHref, imageSrc, minutes, title, sentTime, description, actionHref, completed) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.setAttribute('data-id', 'uploadPhotoID');

    // Create anchor tag with class 'image' and href
    const anchorTag = document.createElement('a');
    anchorTag.className = 'image';
    anchorTag.href = '/orders/RLnFFgXcgk3mY6Le3/tasks/27iCDMN9tWARhPPMf';

    // Create image tag with src
    const imgTag = document.createElement('img');
    imgTag.src = 'https://connect.qualia.com/images/artwork/document.png';

    // Append image to anchor tag
    anchorTag.appendChild(imgTag);

    // Create content div with class 'content'
    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';

    // Create status element
    const status = document.createElement('status');
    status.className = 'ui basic label';
    status.innerText = '3 mins';

    // Create header div with text
    const headerDiv = document.createElement('div');
    headerDiv.className = 'header';
    headerDiv.innerText = 'Upload Photo ID';

    // Create meta div with span inside
    const metaDiv = document.createElement('div');
    metaDiv.className = 'meta';
    const span = document.createElement('span');
    span.innerText = 'Sent Sep 19th';
    metaDiv.appendChild(span);

    // Create description div with a paragraph inside
    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'description';
    const p = document.createElement('p');
    p.innerText = 'Your settlement agency has asked you to upload a copy of your government-issued photo ID for your closing.';
    descriptionDiv.appendChild(p);

    // Create actions div
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';
    const actionAnchor = document.createElement('a');
    actionAnchor.className = 'ui big primary labeled icon button';
    actionAnchor.href = '/orders/RLnFFgXcgk3mY6Le3/tasks/27iCDMN9tWARhPPMf';

    // Create icon element and append to action anchor
    const icon = document.createElement('i');
    icon.className = 'star icon';
    actionAnchor.appendChild(icon);
    actionAnchor.appendChild(document.createTextNode('View Submission'));

    // Append anchor to actions div
    actionsDiv.appendChild(actionAnchor);

    // Append all created elements to content div
    contentDiv.appendChild(status);
    contentDiv.appendChild(headerDiv);
    contentDiv.appendChild(metaDiv);
    contentDiv.appendChild(descriptionDiv);
    contentDiv.appendChild(actionsDiv);

    // Append anchor and content div to the main item div
    itemDiv.appendChild(anchorTag);
    itemDiv.appendChild(contentDiv);

    // Append the created node to the document (for example, in a parent div with id 'container'

    return itemDiv;
}

export const creatTaskComponent = ({dataId, link, imageSrc, title, timeToComplete, description, completed}) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.setAttribute('data-id', dataId);

    // Create anchor tag with class 'image' and href
    const anchorTag = document.createElement('a');
    anchorTag.className = `image ${completed ? "completed" : ""}`;
    anchorTag.href = link;

    // Create image tag with src
    const imgTag = document.createElement('img');
    imgTag.src = imageSrc;

    // Append image to anchor tag
    anchorTag.appendChild(imgTag);

    // Create content div with class 'content'
    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';

    // Create status element
    const status = document.createElement('status');
    status.className = 'ui basic label';
    status.innerText = completed ? "completed" : `${timeToComplete} mins`;

    // Create header div with text
    const headerDiv = document.createElement('div');
    headerDiv.className = 'header';
    headerDiv.innerText = title;

    // Create meta div with span inside
    const metaDiv = document.createElement('div');
    metaDiv.className = 'meta';
    const span = document.createElement('span');
    const innerText = completed ? 'Completed a while ago' : 'Sent this week'
    span.innerText = innerText;
    metaDiv.appendChild(span);

    // Create description div with a paragraph inside
    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'description';
    const p = document.createElement('p');
    p.innerText = description;
    descriptionDiv.appendChild(p);

    // Create actions div
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';
    const actionAnchor = document.createElement('a');
    const className = completed ? "ui big basic button" : 'ui big primary labeled icon button';
    actionAnchor.className = className;
    actionAnchor.href = link;

    // Create icon element and append to action anchor
    if (!completed) {
        const icon = document.createElement('i');
        icon.className = 'star icon';
        actionAnchor.appendChild(icon);
    }

    actionAnchor.appendChild(document.createTextNode('View Submission'));

    // Append anchor to actions div
    actionsDiv.appendChild(actionAnchor);

    // Append all created elements to content div
    contentDiv.appendChild(status);
    contentDiv.appendChild(headerDiv);
    contentDiv.appendChild(metaDiv);
    contentDiv.appendChild(descriptionDiv);
    contentDiv.appendChild(actionsDiv);

    // Append anchor and content div to the main item div
    itemDiv.appendChild(anchorTag);
    itemDiv.appendChild(contentDiv);

    // Append the created node to the document (for example, in a parent div with id 'container'

    return itemDiv;
}
