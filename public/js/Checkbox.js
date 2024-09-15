export default function createCheckboxComponent(dataSchemaKey='', name='', selectedValue='true', additionalClassName='', defaultValue) {
    // Create the wrapper div
    const wrapper = document.createElement('div');
    wrapper.classList.add('field', 'checkbox', additionalClassName);

    // Create the hidden input
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    //'borrower_first_time'
    hiddenInput.name = name;
    //'firstTimeBuyer'
    hiddenInput.setAttribute('data-schema-key', dataSchemaKey);
    hiddenInput.value = selectedValue;  // Default to "No"
    wrapper.appendChild(hiddenInput);

    // Create the button container
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('ui', 'compact', 'buttons');

    // Create the "Yes" button
    const yesButton = document.createElement('a');
    yesButton.classList.add('ui', 'button');
    yesButton.setAttribute('data-value', 'true');
    yesButton.tabIndex = 0;
    yesButton.textContent = 'Yes';
    buttonContainer.appendChild(yesButton);

    // Create the "No" button
    const noButton = document.createElement('a');
    noButton.classList.add('ui', 'button');
    noButton.setAttribute('data-value', 'false');
    noButton.tabIndex = 0;
    noButton.textContent = 'No';
    buttonContainer.appendChild(noButton);

    if (selectedValue === 'yes') {
        yesButton.classList.add('active');
    }
    else if (selectedValue === 'no') {
        noButton.classList.add('active');
    }
    else {
        if (defaultValue === 'yes') {
            yesButton.classList.add('active');
        }
        else if (defaultValue === 'no') {
            noButton.classList.add('active');
        }
    }

    wrapper.appendChild(buttonContainer);

    // Event handling for button clicks
    yesButton.addEventListener('click', function () {
        toggleButtons(yesButton, noButton, hiddenInput, 'true');
    });

    noButton.addEventListener('click', function () {
        toggleButtons(noButton, yesButton, hiddenInput, 'false');
    });

    // Return the entire component
    return wrapper;
}

// Helper function to toggle buttons
function toggleButtons(activeButton, inactiveButton, hiddenInput, value) {
    activeButton.classList.add('active');
    inactiveButton.classList.remove('active');
    hiddenInput.value = value;
}