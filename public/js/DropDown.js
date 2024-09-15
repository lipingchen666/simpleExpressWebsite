const htmlString = `
<div class="ui search selection dropdown user" id="cool">
                <input type="hidden" name="ZJ8NPcbieqQJb9Y8S" value="Male" data-schema-key="gender"
                       autocomplete="new-password">


                <input class="search" autocomplete="new-password" tabindex="0">


                <div class="text value">Liping Chen</div>


                <i class="dropdown icon"></i>


                <div class="menu" tabindex="-1">


                    <div class="item active selected" data-value="1">Liping Chen</div>


                    <div class="item" data-value="2">Janelle Johnson</div>


                </div>
            </div>
`

const DropDown = (options, selectedValue, onSelect, additionalClass='', name='') => {
    const dropdown = document.createElement('div');
    dropdown.classList.add('ui', 'search', 'selection', 'dropdown', additionalClass);

    // Create the hidden input
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = name;
    hiddenInput.value = selectedValue;
    hiddenInput.setAttribute('data-schema-key', 'value');
    hiddenInput.setAttribute('autocomplete', 'new-password');
    dropdown.appendChild(hiddenInput);

    // Create the search input
    const searchInput = document.createElement('input');
    searchInput.classList.add('search');
    searchInput.setAttribute('autocomplete', 'new-password');
    searchInput.setAttribute('tabindex', '0');
    dropdown.appendChild(searchInput);

    // Create the text value div
    const textValue = document.createElement('div');
    textValue.classList.add('text', 'value');
    textValue.textContent = options.find(option => option.value === selectedValue)?.text;
    if (!textValue.textContent) {
        textValue.textContent = 'Select an option';
    }
    dropdown.appendChild(textValue);

    // Create the dropdown icon
    const dropdownIcon = document.createElement('i');
    dropdownIcon.classList.add('dropdown', 'icon');
    dropdown.appendChild(dropdownIcon);

    // Create the menu div
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.setAttribute('tabindex', '-1');

    // Add each option to the menu
    options.forEach(option => {
        const item = document.createElement('div');
        item.classList.add('item');
        if (option.value === selectedValue) {
            item.classList.add('active', 'selected');
        }
        item.setAttribute('data-value', option.value);
        item.textContent = option.text;
        menu.appendChild(item);
    });

    dropdown.appendChild(menu);

    dropdown.addEventListener('click', function (e) {
        e.stopPropagation();
        closeAllDropdowns();
        dropdown.classList.toggle('active');
        dropdown.classList.toggle('visible');
        menu.classList.toggle('visible');
        menu.classList.toggle('transition');
        menu.style.display = 'block !important';
    });

    menu.querySelectorAll('.item').forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            const value = e.target.dataset.value;
            const text = e.target.textContent;

            // Update the hidden input and text value
            hiddenInput.value = value;
            textValue.textContent = text;

            // Update the selected item
            menu.querySelector('.item.active.selected')?.classList.remove('active', 'selected');
            item.classList.add('active', 'selected');

            // Call the onSelect callback
            if (onSelect) {
                onSelect(value);
            }

            closeAllDropdowns();
        });
    });

    document.addEventListener('click', closeAllDropdowns);

    function closeAllDropdowns() {
        document.querySelectorAll('.ui.search.selection.dropdown').forEach(function (dropdown) {
            const menu = dropdown.querySelector('.menu');
            dropdown.classList.remove('active', 'visible');
            menu.classList.remove('visible', 'transition');
            menu.style.display = 'none';
        });
    }

    return dropdown;
}

export default DropDown;