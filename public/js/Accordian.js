function createAccordion() {
    // Create the main container div
    const columnDiv = document.createElement('div');
    columnDiv.className = 'column';

    // Create the field container
    const fieldDiv = document.createElement('div');
    fieldDiv.setAttribute('data-field-name', 'tenants in common');
    fieldDiv.className = 'field';

    // Create the checkbox container
    const checkboxDiv = document.createElement('div');
    checkboxDiv.className = 'ui toggle checkbox checked';

    // Create the hidden checkbox input
    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.setAttribute('data-schema-key', 'tenants in common');
    checkboxInput.name = 'tenants in common';
    checkboxInput.tabIndex = 0;
    checkboxInput.className = 'hidden';

    // Create the label
    const label = document.createElement('label');
    label.textContent = 'Tenants In Common';

    // Append input and label to the checkbox container
    checkboxDiv.appendChild(checkboxInput);
    checkboxDiv.appendChild(label);

    // Append checkbox container to the field container
    fieldDiv.appendChild(checkboxDiv);

    // Create the vestinginfo element
    const vestingInfo = document.createElement('vestinginfo');
    vestingInfo.className = 'ui positive message';
    vestingInfo.textContent = 'Each owner holds his/her own interest. In the event an owner passes away, his/her interest passes to his/her heirs.';

    // Create the ownership percentage header
    const header = document.createElement('h4');
    header.className = 'ui header percentage';
    header.textContent = 'Ownership Percentage';

    // Create the list container
    const listDiv = document.createElement('div');
    listDiv.className = 'ui equal width vertically divided list';

    // Create the item container
    const itemDiv = document.createElement('div');
    itemDiv.className = 'ui item';

    // Create the three fields container
    const fieldsDiv = document.createElement('div');
    fieldsDiv.className = 'three fields';

    // Create the borrower percentage field
    const borrowerFieldDiv = document.createElement('div');
    borrowerFieldDiv.setAttribute('data-field-name', 'borrowers.0.percentage');
    borrowerFieldDiv.className = 'required field';

    // Create the borrower label
    const borrowerLabel = document.createElement('label');
    borrowerLabel.textContent = 'Liping Chen';

    // Create the input container
    const inputDiv = document.createElement('div');
    inputDiv.className = 'ui input';

    // Create the text input
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.setAttribute('inputmode', 'decimal');
    textInput.name = '4mnvFFQjf8AvML5kM';
    textInput.setAttribute('data-schema-key', 'borrowers.0.percentage');
    textInput.className = 'text_input';
    textInput.tabIndex = 0;
    textInput.autocomplete = 'off';

    // Append input to the input container
    inputDiv.appendChild(textInput);

    // Append label and input container to the borrower field
    borrowerFieldDiv.appendChild(borrowerLabel);
    borrowerFieldDiv.appendChild(inputDiv);

    // Append borrower field to the three fields container
    fieldsDiv.appendChild(borrowerFieldDiv);

    // Append three fields container to the item
    itemDiv.appendChild(fieldsDiv);

    // Append item to the list container
    listDiv.appendChild(itemDiv);

    // Append elements to the main container
    columnDiv.appendChild(fieldDiv);
    columnDiv.appendChild(vestingInfo);
    columnDiv.appendChild(header);
    columnDiv.appendChild(listDiv);

    // Return the constructed Node
    return columnDiv;
}
