const Accordion = ({
    type='tenants by the entirety',
    checked,
    description="Only married couples may hold title in this manner. Each spouse holds an undivided interest in the property. Should one spouse predecease the other, the property transfers to the surviving spouse.",
    callback,
                   }) => {
    function createColumnNode() {
        // Create the outer div with class "column"
        const columnDiv = document.createElement('div');
        columnDiv.className = 'column';

        // Create the inner div with data-field-name and class "field"
        const fieldDiv = document.createElement('div');
        fieldDiv.setAttribute('data-field-name', type);
        fieldDiv.className = 'field';

        // Create the inner div with class "ui toggle checkbox checked"
        const toggleCheckboxDiv = document.createElement('div');
        toggleCheckboxDiv.className = `ui toggle checkbox ${checked ? 'checked' : ''}`;

        // Create the input element
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.setAttribute('data-schema-key', type);
        input.name = type;
        input.tabIndex = 0;
        input.className = 'hidden';
        input.checked = !!checked;

        fieldDiv.addEventListener('click', () => {
            if (callback && typeof callback === 'function') {
                console.log("here");
                callback(); // Pass the checked state to the callback
            }
        });

        // Create the label element
        const label = document.createElement('label');
        label.textContent = type;
        // Append input and label to the checkbox div
        toggleCheckboxDiv.appendChild(input);
        toggleCheckboxDiv.appendChild(label);

        // Append the checkbox div to the field div
        fieldDiv.appendChild(toggleCheckboxDiv);

        // Create the vestinginfo element
        const vestingInfo = document.createElement('vestinginfo');
        vestingInfo.className = `ui message ${checked ? "positive" : "" }`;
        vestingInfo.textContent = description;

        // Append the field div and vestinginfo to the column div
        columnDiv.appendChild(fieldDiv);
        columnDiv.appendChild(vestingInfo);

        if (type === "tenants in common" && checked) {
            // const percentageNode = createBorrowerPercentageNode('Liping Chen', 'ownership-percentage', 'ownership-percentage');
            const percentageNode = createBorrowersPercentageNode({ name: 'Liping Chen', inputName: "liping"}, { name: 'Janelle Lynn Johnson', inputName: "janelle" });
            columnDiv.appendChild(percentageNode);
        }

        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';
        rowDiv.appendChild(columnDiv)

        // Return the constructed column div
        return rowDiv;
    }

    return createColumnNode();
}

const createBorrowerPercentageNode = (borrowerName, inputName, dataSchemaKey) => {
    // Create the main container
    const container = document.createElement('div');
    container.className = 'ui equal width vertically divided list';

    // Create the item div
    const item = document.createElement('div');
    item.className = 'ui item';

    // Create the fields div
    const fields = document.createElement('div');
    fields.className = 'three fields';

    // Create the required field div
    const requiredField = document.createElement('div');
    requiredField.className = 'required field';
    requiredField.setAttribute('data-field-name', 'borrowers.0.percentage');

    // Create the label
    const label = document.createElement('label');
    label.textContent = borrowerName;

    // Create the input container
    const inputContainer = document.createElement('div');
    inputContainer.className = 'ui input';

    // Create the input element
    const input = document.createElement('input');
    input.type = 'text';
    input.inputMode = 'decimal';
    input.name = inputName;
    input.setAttribute('data-schema-key', dataSchemaKey);
    input.className = 'text_input';
    input.tabIndex = '0';
    input.autocomplete = 'off';
    input.value = '50%';

    // Assemble the elements
    inputContainer.appendChild(input);
    requiredField.appendChild(label);
    requiredField.appendChild(inputContainer);
    fields.appendChild(requiredField);
    item.appendChild(fields);
    container.appendChild(item);

    return container;
}

function createBorrowersPercentageNode(borrower1, borrower2) {
    // Create the main container
    const container = document.createElement('div');
    container.className = 'ui equal width vertically divided list';

    // Function to create a borrower field
    function createBorrowerField(borrower, index) {
        const item = document.createElement('div');
        item.className = 'ui item';

        const fields = document.createElement('div');
        fields.className = 'three fields';

        const requiredField = document.createElement('div');
        requiredField.className = 'required field';
        requiredField.setAttribute('data-field-name', `borrowers.${index}.percentage`);

        const label = document.createElement('label');
        label.textContent = borrower.name;

        const inputContainer = document.createElement('div');
        inputContainer.className = 'ui input';

        const input = document.createElement('input');
        input.type = 'text';
        input.inputMode = 'decimal';
        input.name = borrower.inputName;
        input.setAttribute('data-schema-key', `borrowers.${index}.percentage`);
        input.className = 'text_input';
        input.tabIndex = '0';
        input.autocomplete = 'off';
        input.value = '50%';
        input.disabled = true;

        inputContainer.appendChild(input);
        requiredField.appendChild(label);
        requiredField.appendChild(inputContainer);
        fields.appendChild(requiredField);
        item.appendChild(fields);

        return item;
    }

    // Create and append fields for both borrowers
    container.appendChild(createBorrowerField(borrower1, 0));
    container.appendChild(createBorrowerField(borrower2, 1));

    return container;
}

const createLiveValue = (initialValue) => {
    let value = initialValue;
    let listeners = [];

    const getValue = () => value;

    const setValue = (nextValue) => {
        value = nextValue;

        for (const listener of listeners) {
            listener(value);
        }
    };

    const addListener = (listener) => {
        listeners.push(listener);
    };

    const removeListener = (listener) => {
        listeners = listeners.filter(fn => fn !== listener);
    };

    return [
        getValue,
        setValue,
        addListener,
        removeListener
    ];
};

export const renderAccordions = (containerClass, selectedVestingInitial='Solo Owner') => {
    const [selectedVesting, setSelectedVesting, addVestingStatusListener, removeVestingStatusListener] = createLiveValue(0);
    const vestingOptions = [
        {
            type: 'Sole Owner',
            checked: selectedVestingInitial === 'Solo Owner',
            description: "One party owns the property."
        },
        {
            type: 'tenants in common',
            checked: selectedVestingInitial === 'tenants in common',
            description: "Each owner holds his/her own interest. In the event an owner passes away, his/her interest passes to his/her heirs."
        },
        {
            type: 'Joint tenants',
            checked: selectedVestingInitial === 'Joint tenants',
            description: "Each owner holds an undivided interest in the entire property. In the event an owner passes away, his/her interest transfers to the surviving owner(s)."

        },
        {
            type: 'tenants by the entirety',
            checked: selectedVestingInitial === 'tenants by the entirety',
            description: "Only married couples may hold title in this manner. Each spouse holds an undivided interest in the property. Should one spouse predecease the other, the property transfers to the surviving spouse."
        },
    ]

    vestingOptions.forEach((vestingOption, index) => {
        const accordion = Accordion(
            {
            ...vestingOption, callback: () => {  setSelectedVesting(index) }
        })

        let currentAccordion = accordion;

        addVestingStatusListener((selectedIndex) => {
            const newCheckedValue = selectedIndex === index ? !currentAccordion.querySelector('input[type="checkbox"]').checked : false

            const newAccordion = Accordion({
                ...vestingOption,
                checked: newCheckedValue,
                callback: () => {  setSelectedVesting(index) }
            })
            currentAccordion.replaceWith(newAccordion);
            currentAccordion = newAccordion;
        })

        document.querySelector(containerClass).appendChild(accordion);
    })
}
