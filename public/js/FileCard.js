export function createFileCardNode(fileData) {
    const {
        id,
        name,
        sharedBy,
        sentDate,
        archivedVersions
    } = fileData;

    // Create the main file element
    const fileElement = document.createElement('file');
    fileElement.className = 'ui link card';
    fileElement.dataset.id = id;
    fileElement.dataset.name = name;

    // Create the content div
    const contentDiv = document.createElement('div');
    contentDiv.className = 'ui icon header content';

    // Create the icon
    const iconElement = document.createElement('i');
    iconElement.className = 'disabled pdf file outline icon';

    // Create the name span
    const nameSpan = document.createElement('span');
    nameSpan.className = 'name';
    nameSpan.textContent = name;

    // Create the meta div
    const metaDiv = document.createElement('div');
    metaDiv.className = 'meta';
    metaDiv.textContent = `Shared by ${sharedBy}`;

    // Append elements to content div
    contentDiv.appendChild(iconElement);
    contentDiv.appendChild(nameSpan);
    contentDiv.appendChild(metaDiv);

    // Create the extra content div
    const extraContentDiv = document.createElement('div');
    extraContentDiv.className = 'extra content';

    // Create the meta span
    const metaSpan = document.createElement('span');
    metaSpan.className = 'meta';

    // Create the sent date span
    const sentDateSpan = document.createElement('span');
    sentDateSpan.textContent = `Sent ${sentDate}`;

    // Create the file actions dropdown
    const fileActionsElement = document.createElement('fileactions');
    fileActionsElement.className = 'ui floating dropdown icon basic button';
    fileActionsElement.tabIndex = '0';

    const moreIcon = document.createElement('i');
    moreIcon.className = 'flat more icon';

    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'right menu';
    dropdownMenu.tabIndex = '-1';

    const archivedItem = document.createElement('div');
    archivedItem.className = 'item';
    archivedItem.dataset.id = id;

    const dropdownIcon = document.createElement('i');
    dropdownIcon.className = 'dropdown icon';

    const archivedText = document.createTextNode('Archived');

    const subMenu = document.createElement('div');
    subMenu.className = 'menu';

    const subMenuHeader = document.createElement('div');
    subMenuHeader.className = 'header';
    subMenuHeader.textContent = 'Previous Versions';

    subMenu.appendChild(subMenuHeader);

    // Add archived versions
    archivedVersions.forEach(version => {
        const versionElement = document.createElement('oldversion');
        versionElement.className = 'item';
        versionElement.dataset.id = version.id;
        versionElement.dataset.name = version.name;
        versionElement.textContent = `Sent ${version.date}`;
        subMenu.appendChild(versionElement);
    });

    // Assemble the dropdown
    archivedItem.appendChild(dropdownIcon);
    archivedItem.appendChild(archivedText);
    archivedItem.appendChild(subMenu);
    dropdownMenu.appendChild(archivedItem);
    fileActionsElement.appendChild(moreIcon);
    fileActionsElement.appendChild(dropdownMenu);

    // Assemble the meta span
    metaSpan.appendChild(sentDateSpan);
    metaSpan.appendChild(fileActionsElement);

    // Assemble the extra content div
    extraContentDiv.appendChild(metaSpan);

    // Assemble the main file element
    fileElement.appendChild(contentDiv);
    fileElement.appendChild(extraContentDiv);

    return fileElement;
}

export function renderFileList(files) {
    // Create the container div
    const containerDiv = document.createElement('div');
    containerDiv.className = 'ui stackable cards';

    // Iterate through the files
    files.forEach(file => {
        // Prepare the data for createFileCardNode
        const fileData = {
            id: file.id,
            name: file.name,
            sharedBy: 'Janelle', // You might want to replace this with actual data if available
            sentDate: new Date(file.created_at).toLocaleString(), // Format the date as needed
            archivedVersions: [] // Add archived versions if available
        };

        // Create the file card node
        const fileNode = createFileCardNode(fileData);

        // Append the file node to the container
        containerDiv.appendChild(fileNode);
    });

    return containerDiv;
}

