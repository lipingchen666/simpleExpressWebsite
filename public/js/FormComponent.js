import { CompletedFormComponent } from "./CompletedFormComponent.js";
import DropDown from "./DropDown.js";
import Checkbox from "./Checkbox.js";

const ComponentHtml = `
<form id="okay" class="ui form" autocomplete="new-password">
        <afdropdowninput class="required field">
            <label>
                Person
            </label>
            <div class="ui search selection dropdown users" id="cool">
<!--                <input type="hidden" name="ZJ8NPcbieqQJb9Y8S" value="Male" data-schema-key="gender"-->
<!--                       autocomplete="new-password">-->


<!--                <input class="search" autocomplete="new-password" tabindex="0">-->


<!--                <div class="text value">Liping Chen</div>-->


<!--                <i class="dropdown icon"></i>-->


<!--                <div class="menu" tabindex="-1">-->


<!--                    <div class="item active selected" data-value="1">Liping Chen</div>-->


<!--                    <div class="item" data-value="2">Janelle Johnson</div>-->


<!--                </div>-->
            </div>
        </afdropdowninput>
        <h4 class="ui dividing status completed header">
            Your Personal Info
        </h4>
        <div class="indent">
            <div class="four fields">
                <div data-field-name="first_name" class="required field">
                    <label>
                        First Name
                    </label>
                    <div class="ui input">
                        <input type="text" name="firstName" data-schema-key="firstName" class="text_input"
                               tabindex="0" autocomplete="off">
                    </div>
                </div>
                <div data-field-name="middle_name" class="field">
                    <label>
                        Middle Name
                    </label>
                    <div class="ui input">
                        <input type="text" name="middleName" data-schema-key="middleName" class="text_input"
                               tabindex="0" autocomplete="off">
                    </div>
                </div>
                <div data-field-name="last_name" class="required field">
                    <label>
                        Last Name
                    </label>
                    <div class="ui input">
                        <input type="text" name="lastName" data-schema-key="lastName" class="text_input"
                               tabindex="0" autocomplete="off">
                    </div>
                </div>


                <div data-field-name="suffix" class="field">


                    <label>


                        Suffix


                    </label>


                    <div class="ui input">


                        <input type="text" name="suffix" data-schema-key="suffix" class="text_input"
                               tabindex="0" autocomplete="off">


                    </div>
                </div>


            </div>
            <div class="three fields">


                <afdropdowninput class="required field">


                    <label>


                        Gender


                    </label>


                    <div class="ui search selection dropdown gender" id="cool">
                        <input type="hidden" name="gender" value="Male" data-schema-key="gender"
                               autocomplete="new-password">


                        <input class="search" autocomplete="new-password" tabindex="0">


                        <div class="text">Male</div>


                        <i class="dropdown icon"></i>


                        <div class="menu" tabindex="-1">


                            <div class="item active selected" data-value="Male">Male</div>


                            <div class="item" data-value="Female">Female</div>


                        </div>
                    </div>
                </afdropdowninput>


                <afdropdowninput class="required field">
                    <label>
                        Marital Stat
                    </label>
                    <div class="ui search selection dropdown marital-status">
                        <input type="hidden" name="maritalStatus" value="Single" data-schema-key="maritalStatus"
                               autocomplete="new-password">
                        <input class="search" autocomplete="new-password" tabindex="0">


                        <div class="text">Single</div>


                        <i class="dropdown icon"></i>


                        <div class="menu" tabindex="-1">


                            <div class="item" data-value="Married">Married</div>


                            <div class="item" data-value="Unmarried">Unmarried</div>


                            <div class="item active selected" data-value="Single">Single</div>


                            <div class="item" data-value="Reg. Dom. Partnership">Reg. Dom. Partnership</div>


                            <div class="item" data-value="Unknown">Unknown</div>


                            <div class="item" data-value="Widow">Widow</div>


                            <div class="item" data-value="Widower">Widower</div>


                        </div>
                    </div>
                </afdropdowninput>


                <afdropdowninput class="required field">


                    <label>


                        Citizenship Status


                    </label>


                    <div class="ui search selection dropdown citizenshipStatus">
                        <input type="hidden" name="ievCSSeJGyFh4dFMC" value="U.S. Citizen" data-schema-key="citizenShip"
                               autocomplete="new-password">


                        <input class="search" autocomplete="new-password" tabindex="0">


                        <div class="text">U.S. Citizen</div>


                        <i class="dropdown icon"></i>


                        <div class="menu" tabindex="-1">


                            <div class="item active selected" data-value="U.S. Citizen">U.S. Citizen</div>


                            <div class="item" data-value="Resident Alien">Resident Alien</div>


                            <div class="item" data-value="Non-Resident Alien">Non-Resident Alien</div>


                            <div class="item" data-value="Other">Other</div>


                        </div>
                    </div>
                </afdropdowninput>


            </div>
            <div class="three fields">


                <div data-field-name="SSN" class="field">


                    <label>


                        SSN


                        <span class="helpIcon"
                              data-content="For security purposes, once submitted, this field's value is obscured when it is displayed.">
            <i class="styled link help circle flat icon"></i>

          </span>


                    </label>


                    <div class="ui sensitivePlaceholder input">


                        <input type="text" inputmode="numeric" placeholder="***-**-**68" name="TbKa9YBWQriF368Sc"
                               data-schema-key="ssn" class="text_input" tabindex="0" autocomplete="off" value="***-**-**68">


                    </div>
                </div>


                <div class="field checkbox">


                    <label>


                        Will you be giving power of attorney?


                        <span class="helpIcon"
                              data-content="A power of attorney gives another party (the Attorney-in-Fact) the power to sign documents on your behalf.">
            <i class="styled link help circle flat icon"></i>

          </span>


                    </label>


                    <input type="hidden" name="power_of_attorney.has" data-schema-key="power_of_attorney.has">
                    <div class="ui compact buttons">


                        <a class="ui button" data-value="true" tabindex="0">

                            Yes
                        </a>


                        <a class="ui active button" tabindex="0">

                            No
                        </a>

                    </div>
                </div>


            </div>
        </div>


        <h4 class="ui dividing completed status header">
            Your Contact Info
        </h4>
        <div class="indent">
            <div class="two fields">


                <div data-field-name="email" class="required field">


                    <label>


                        Email


                    </label>


                    <div class="ui input">


                        <input type="text" name="email" data-schema-key="email" class="text_input"
                               tabindex="0" autocomplete="off">


                    </div>
                </div>


                <div data-field-name="cell_phone" class="required field">


                    <label>


                        Cell Phone


                    </label>


                    <div class="ui input">


                        <input type="text" inputmode="tel" name="ELbqtpxYSb5ygLGSs" data-schema-key="cellPhone"
                               class="text_input" tabindex="0" autocomplete="off">


                    </div>
                </div>


            </div>
            <div class="three fields">


                <div data-field-name="home_phone" class="field">


                    <label>


                        Home Phone


                    </label>


                    <div class="ui input">


                        <input type="text" inputmode="tel" name="NTTXst5S3uPNYRDrr" data-schema-key="homePhone"
                               class="text_input" tabindex="0" autocomplete="off">


                    </div>
                </div>


                <div data-field-name="work_phone" class="field">


                    <label>


                        Work Phone


                    </label>


                    <div class="ui input">


                        <input type="text" inputmode="tel" name="NtLBqpYQ6e75qsrzY" data-schema-key="workPhone"
                               class="text_input" tabindex="0" autocomplete="off">


                    </div>
                </div>


                <div data-field-name="fax" class="field">


                    <label>


                        Fax


                    </label>


                    <div class="ui input">


                        <input type="text" inputmode="tel" name="c2tuuQWFsQRsnjgof" data-schema-key="fax"
                               class="text_input" tabindex="0" autocomplete="off">


                    </div>
                </div>


            </div>
        </div>


        <h4 class="ui dividing completed status header">
            Current Address
        </h4>
        <div class="indent">
            <p>Please enter your current address, where you will receive mail
                <span class="underline">until this transaction is complete</span>.
            </p>
            <addresssearch>


                <input type="hidden" placeholder="" value="38.9858558" name="Qnsg2BiZtEurCbDBW"
                       data-schema-key="current_address.latitude" class="text_input" autocomplete="new-password">


                <input type="hidden" placeholder="" value="-76.8662631" name="AE762hroWjdx5gEHG"
                       data-schema-key="current_address.longitude" class="text_input" autocomplete="new-password">


                <addressfields class="fields">


                    <div class="address1 ten wide field">


                        <label>


                            <a class="customLabel link" tabindex="-1" href="#">International?</a>


                            Address


                        </label>


                        <div class="ui fluid search">
                            <div class="ui icon fluid input">


                                <i class="cancel link icon" data-content="Clear Address"></i>


                                <input class="prompt" type="text" autocomplete="new-password"
                                       placeholder="Search address..." name="k7JRQpYhuoHpa5giQ"
                                       data-schema-key="currentAddress">
                            </div>
                            <div class="results"></div>
                        </div>
                    </div>


                    <div data-field-name="current_address.address_2" class="six wide field">


                        <label>


                            Apt, Suite, Etc.


                        </label>


                        <div class="ui input">


                            <input type="text" name="jJ5WGSnk8zdcRARxv" data-schema-key="currentAddress2"
                                   class="text_input" tabindex="0" autocomplete="new-password">


                        </div>
                    </div>


                </addressfields>
                <div class="four fields">


                    <div data-field-name="current_address.city" class="field">


                        <label>


                            City


                        </label>


                        <div class="ui input">


                            <input type="text" name="xdsRSdGtMkQQp5c46" data-schema-key="currentAddressCity"
                                   class="text_input" tabindex="0" autocomplete="new-password">


                        </div>
                    </div>


                    <div data-field-name="current_address.county" class="field">


                        <label>


                            County


                        </label>


                        <div class="ui input">


                            <input type="text" name="ZZaEf29dntRmYRiJZ" data-schema-key="currentAddressCounty"
                                   class="text_input" tabindex="0" autocomplete="new-password">


                        </div>
                    </div>


                    <afdropdowninput class="field">


                        <label>


                            State


                        </label>


                        <div class="ui search selection dropdown">
                            <input type="hidden" name="Zf8GsMYjEr5jygpDt" value="MD"
                                   data-schema-key="currentAddressState" autocomplete="new-password">


                            <input class="search" autocomplete="new-password" tabindex="0">


                            <div class="text">MD</div>


                            <i class="cancel link icon"></i>


                            <div class="menu" tabindex="-1">


                                <div class="item" data-value="AK">AK</div>


                                <div class="item" data-value="AL">AL</div>


                                <div class="item" data-value="AR">AR</div>


                                <div class="item" data-value="AZ">AZ</div>


                                <div class="item" data-value="CA">CA</div>


                                <div class="item" data-value="CO">CO</div>


                                <div class="item" data-value="CT">CT</div>


                                <div class="item" data-value="DC">DC</div>


                                <div class="item" data-value="DE">DE</div>


                                <div class="item" data-value="FL">FL</div>


                                <div class="item" data-value="GA">GA</div>


                                <div class="item" data-value="HI">HI</div>


                                <div class="item" data-value="IA">IA</div>


                                <div class="item" data-value="ID">ID</div>


                                <div class="item" data-value="IL">IL</div>


                                <div class="item" data-value="IN">IN</div>


                                <div class="item" data-value="KS">KS</div>


                                <div class="item" data-value="KY">KY</div>


                                <div class="item" data-value="LA">LA</div>


                                <div class="item" data-value="MA">MA</div>


                                <div class="item active selected" data-value="MD">MD</div>


                                <div class="item" data-value="ME">ME</div>


                                <div class="item" data-value="MI">MI</div>


                                <div class="item" data-value="MN">MN</div>


                                <div class="item" data-value="MO">MO</div>


                                <div class="item" data-value="MS">MS</div>


                                <div class="item" data-value="MT">MT</div>


                                <div class="item" data-value="NC">NC</div>


                                <div class="item" data-value="ND">ND</div>


                                <div class="item" data-value="NE">NE</div>


                                <div class="item" data-value="NH">NH</div>


                                <div class="item" data-value="NJ">NJ</div>


                                <div class="item" data-value="NM">NM</div>


                                <div class="item" data-value="NV">NV</div>


                                <div class="item" data-value="NY">NY</div>


                                <div class="item" data-value="OH">OH</div>


                                <div class="item" data-value="OK">OK</div>


                                <div class="item" data-value="OR">OR</div>


                                <div class="item" data-value="PA">PA</div>


                                <div class="item" data-value="RI">RI</div>


                                <div class="item" data-value="SC">SC</div>


                                <div class="item" data-value="SD">SD</div>


                                <div class="item" data-value="TN">TN</div>


                                <div class="item" data-value="TX">TX</div>


                                <div class="item" data-value="UT">UT</div>


                                <div class="item" data-value="VA">VA</div>


                                <div class="item" data-value="VT">VT</div>


                                <div class="item" data-value="WA">WA</div>


                                <div class="item" data-value="WI">WI</div>


                                <div class="item" data-value="WV">WV</div>


                                <div class="item" data-value="WY">WY</div>


                                <div class="item" data-value="VI">VI</div>


                            </div>
                        </div>
                    </afdropdowninput>


                    <div data-field-name="current_address.zipcode" class="field">


                        <label>


                            Zipcode


                        </label>


                        <div class="ui input">


                            <input type="text" inputmode="numeric" name="BcKqhpxBoX3ADDHjJ"
                                   data-schema-key="currentAddressZipcode" class="text_input" tabindex="0"
                                   autocomplete="new-password">


                        </div>
                    </div>


                </div>


            </addresssearch>
        </div>

        <h4 class="ui dividing status completed header">
            Forwarding Address
        </h4>
        <div class="indent">
            <p>Will you receive mail at a different location <span
                    class="underline">after this transaction is complete</span>?</p>


            <div class="field checkbox">

                <input type="hidden" name="forwarding_address_same_as_current"
                       data-schema-key="forwardingAddressSameAsCurrent" value="true">
                <div class="ui compact buttons">


                    <a class="ui button" tabindex="0">

                        Yes
                    </a>


                    <a class="ui active button" data-value="true" tabindex="0">

                        No
                    </a>

                </div>
            </div>


        </div>


        <h4 class="ui dividing status completed header">
            Additional Questions
        </h4>
        <div class="indent">
            <div class="ui equal width stackable grid">


                <div class="row">
                    <div class="column">
                        <p>Will the property be your primary residence?</p>
                    </div>
                    <div class="column">


                        <div class="field checkbox is-primary-residence">

                            <input type="hidden" name="borrower_primary_residence"
                                   data-schema-key="isPrimaryResidence" value="true">
                            <div class="ui compact buttons">


                                <a class="ui active button" data-value="true" tabindex="0">

                                    Yes
                                </a>


                                <a class="ui button" tabindex="0">

                                    No
                                </a>

                            </div>
                        </div>


                    </div>
                </div>


                <div class="row">
                    <div class="column">
                        <p>Is this your first time buying a home?</p>
                    </div>
                    <div class="column">


                        <div class="field checkbox first-time-home-buyer">

                            <input type="hidden" name="borrower_first_time" data-schema-key="firstTimeBuyer"
                                   value="true">
                            <div class="ui compact buttons">


                                <a class="ui active button" data-value="true" tabindex="0">

                                    Yes
                                </a>


                                <a class="ui button" tabindex="0">

                                    No
                                </a>

                            </div>
                        </div>


                    </div>
                </div>


                <div class="row">
                    <div class="column">
                        <p>Is this your first time buying a home in MD?</p>
                    </div>
                    <div class="column">


                        <div class="field checkbox first-time-home-buyer-md">

                            <input type="hidden" name="borrower_first_time_in_md"
                                   data-schema-key="firstTimeInMd" value="true">
                            <div class="ui compact buttons">


                                <a class="ui active button" data-value="true" tabindex="0">

                                    Yes
                                </a>


                                <a class="ui button" tabindex="0">

                                    No
                                </a>

                            </div>
                        </div>


                    </div>
                </div>


                <div class="row">
                    <div class="column">
                        <p>What is your date of birth?</p>
                    </div>
                    <div class="column">


                        <div data-field-name="borrower_date_of_birth" class="field">


                            <div class="ui icon input">


                                <i class="calendar icon"></i>


                                <input type="text" name="kxtAeSkRAquYHRzcg" data-schema-key="dateOfBirth" id="birth-date-picker"
                                       autocomplete="new-password" inputmode="numeric">

                            </div>

                        </div>


                    </div>
                </div>


            </div>

        </div>


        <h4 class="ui dividing header">

            Update Information

        </h4>
        <div class="indent">

            <div class="ui secondary segment">

                <p>
                    You're all set to resubmit.
                    Please verify the information above appears correctly before submitting this data.
                </p>
                <button class="ui huge primary button" type="submit">

                    Submit Revision

                </button>


                <cancelresubmission class="ui huge button cancel-button">
                    Cancel
                </cancelresubmission>

            </div>
        </div>
</form>
`

export const hookUpDropDowns= (form, callback) => {
    //ui search selection dropdown active visible
    const dropdowns = form.querySelectorAll('.ui.search.selection.dropdown');

    dropdowns.forEach(function (dropdown) {
        const menu = dropdown.querySelector('.menu');
        // Toggle dropdown visibility
        dropdown.addEventListener('click', function (e) {
            e.stopPropagation();
            closeAllDropdowns();
            dropdown.classList.toggle('active');
            dropdown.classList.toggle('visible');
            menu.classList.toggle('visible');
            menu.classList.toggle('transition');
            menu.style.display = 'block !important';
        });

        // Handle item selection
        const items = menu.querySelectorAll('.item');
        items.forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.stopPropagation();
                console.log('value', e.target.value);
                console.log('data-value', e.target.dataset.value);

                if (callback) {
                    callback(e.target.dataset.value);
                }

                const text = item.textContent;
                const selected = dropdown.querySelector('.text');
                const selectedItem = menu.querySelector('.item.active.selected');
                selectedItem.classList.remove('active');
                selectedItem.classList.remove('selected');
                item.classList.add('active');
                item.classList.add('selected');
                selected.textContent = text;
                closeAllDropdowns();
            });
        });
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', function () {
        closeAllDropdowns();
    });

    function closeAllDropdowns() {
        dropdowns.forEach(function (dropdown) {
            const menu = dropdown.querySelector('.menu');
            dropdown.classList.remove('active');
            dropdown.classList.remove('visible');

            menu.classList.remove('visible');
            menu.classList.remove('transition');
            menu.style.display = 'none';

            menu.classList.remove('visible');
        });
    }
}

const hookupCheckBoxes = (form) => {
    const fields = form.querySelectorAll('.field.checkbox');

    fields.forEach(function (field) {
        const input = field.querySelector('input');
        const buttons = field.querySelectorAll('a');
        const yesButton = buttons[0];
        const noButton = buttons[1];

        yesButton.addEventListener('click', function () {
            input.value = 'true';
            yesButton.classList.add('active');
            noButton.classList.remove('active');
        });

        noButton.addEventListener('click', function () {
            input.value = 'false';
            yesButton.classList.remove('active');
            noButton.classList.add('active');
        });

    })
}


const hookupDatePickers = (form) => {
    const elem = form.querySelector('#birth-date-picker');
    const datepicker = new Datepicker(elem, {
        // ...options
    });
}

const hookupCancelButton = (form) => {
    const cancelButton = form.querySelector('.cancel-button');
    cancelButton.addEventListener('click', function () {
        // Your JavaScript code goes here
        console.log('Cancel Button clicked!');
    });
}

export const FormComponent = (users) =>{
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = ComponentHtml;
    const form = tempDiv.querySelector('form');

    CreateDropDownFromUsers(users, form, (value) => fillFormInputs(users.find(user => user.id === value), form));

    hookUpDropDowns(form);
    hookupCheckBoxes(form);
    hookupDatePickers(form);
    // hookupCancelButton(form);
    hookUpFormSubmit(form);

    const currentUserDropDown = form.querySelector('.ui.search.selection.dropdown.user');
    const selectedUserid = currentUserDropDown.querySelector('.item.active.selected').dataset.value
    const user = users.find(user => user.id === selectedUserid);

    CreateDropDownForGender(form, user);
    CreateDropDownForMaritalStatus(form, user);
    CreateDropDownForCitizenshipStatus(form, user);
    CreateCheckboxForFirstTimeHomeBuyer(form, user);
    CreateCheckboxForPrimaryResidence(form, user);
    CreateCheckBoxForFirstTimeBuyerMd(form, user)

    // fillFormValues(user, form);
    fillFormInputs(user, form);

    const cancelButton = form.querySelector('.cancel-button')
    cancelButton.addEventListener('click', function () {
        form.replaceWith(CompletedFormComponent(users));
    })

    return form;
}

const fillFormInputs = (user, form) => {
    if (user && form) {
        const inputs = form.querySelectorAll('input[data-schema-key]');
        inputs.forEach(input => {
            const schemaKey = input.dataset.schemaKey;
            if (user[schemaKey]) {
                input.value = user[schemaKey];
            } else {
                input.value = '';
            }
        });
        CreateDropDownForGender(form, user);
        CreateDropDownForMaritalStatus(form, user);
        CreateDropDownForCitizenshipStatus(form, user);
        CreateCheckboxForFirstTimeHomeBuyer(form, user);
        CreateCheckboxForPrimaryResidence(form, user);
    }
};

const fillFormCheckbox = (user, form) => {
    if (user && form) {
        const inputs = form.querySelectorAll('input[data-schema-key]');
        inputs.forEach(input => {
            const schemaKey = input.dataset.schemaKey;
            if (user[schemaKey]) {
                input.value = user[schemaKey];
            } else {
                input.value = '';
            }
        });
    }
};

export const CreateDropDownFromUsers = (users, container, onSelect) => {
    const options = users.map(user => {
        return {
            text: user.fullName,
            value: user.id
        }
    });

    const dropDownNode = DropDown(options, '2', onSelect, 'user', 'user');

    container.querySelector('.ui.search.selection.dropdown.users').replaceWith(dropDownNode);
}

export const CreateDropDownForGender = (container, user) => {
    const options = [
        {
            text: 'Male',
            value: 'male'
        },
        {
            text: 'Female',
            value: 'female'
        },
        {
            text: 'Other',
            value: 'other'
        },
        // {
        //     text: '- Please Enter -',
        //     value: ''
        // }
    ];

    const selectedValue = user.gender ? user.gender : '';
    const dropDownNode = DropDown(options, selectedValue, null, 'gender', 'gender');

    container.querySelector('.ui.search.selection.dropdown.gender')?.replaceWith(dropDownNode);
}

export const CreateDropDownForMaritalStatus = (container, user) => {
    const options = [
        {
            text: 'Single',
            value: 'single'
        },
        {
            text: 'Married',
            value: 'married'
        },
        {
            text: 'Divorced',
            value: 'divorced'
        },
        {
            text: 'Widowed',
            value: 'widowed'
        },
        // {
        //     text: '- Please Enter -',
        //     value: ''
        // }
    ];

    const selectedValue = user.maritalStatus ? user.maritalStatus : '';

    const dropDownNode = DropDown(options, selectedValue, null, 'marital-status', 'maritalStatus');

    container.querySelector('.ui.search.selection.dropdown.marital-status').replaceWith(dropDownNode);
}

export const CreateDropDownForCitizenshipStatus = (container, user) => {
    const options = [
        {
            text: 'U.S. Citizen',
            value: 'us'
        },
        {
            text: 'Resident Alien',
            value: 'residentAlien'
        },
        {
            text: 'Non-Resident Alien',
            value: 'nonResidentAlien'
        },
        {
            text: 'Other',
            value: 'other'
        }
    ];

    const selectedValue = user.citizenShip ? user.citizenShip : '';

    const dropDownNode = DropDown(options, selectedValue, null, 'citizenshipStatus', 'citizenshipStatus');

    container.querySelector('.ui.search.selection.dropdown.citizenshipStatus').replaceWith(dropDownNode);
}

export const CreateCheckboxForFirstTimeHomeBuyer = (container, user) => {
    const selectedValue = user.firstTimeHomeBuyer ? user.firstTimeHomeBuyer: '';
    const checkBoxNode = Checkbox('firstTimeHomeBuyer', 'firstTimeHomeBuyer', selectedValue, 'first-time-home-buyer', 'no');

    container.querySelector('.field.checkbox.first-time-home-buyer')?.replaceWith(checkBoxNode);
}

export const CreateCheckboxForPrimaryResidence = (container, user) => {
    const selectedValue = user.isPrimaryResidence? user.isPrimaryResidence: '';
    const checkBoxNode = Checkbox('isPrimaryResidence', 'isPrimaryResidence', selectedValue, 'is-primary-residence', 'no');

    container.querySelector('.field.checkbox.is-primary-residence')?.replaceWith(checkBoxNode);
}

export const CreateCheckBoxForFirstTimeBuyerMd = (container, user) => {
    const selectedValue = user.firstTimeHomeBuyerMd? user.firstTimeHomeBuyerMd: '';
    const checkBoxNode = Checkbox('firstTimeHomeBuyerMd', 'firstTimeHomeBuyerMd', selectedValue, 'first-time-home-buyer-md', 'no');

    container.querySelector('.field.checkbox.first-time-home-buyer-md')?.replaceWith(checkBoxNode);
}

export const hookUpFormSubmit = (form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log('Form submitted!', e.target);
        const firstName = e.target.elements["firstName"].value;
        const middleName = e.target.elements["middleName"].value;
        const lastName = e.target.elements["lastName"].value;
        const suffix = e.target.elements["suffix"].value;
        const gender = e.target.elements["gender"].value;

        const email = e.target.elements["email"].value;
        const maritalStatus = e.target.elements["maritalStatus"].value;
        const citizenshipStatus = e.target.elements["citizenshipStatus"].value;

        const errors = [];
        if (validator.isEmpty(firstName)) {
            errors.push("First Name is required");
        }

        if(validator.isEmpty(lastName)) {
            errors.push("Last Name is required");
        }

        if (!validator.isEmail(email)) {
            errors.push("Please enter a valid email");
        }

        console.log("gender:", gender);

        console.log('Errors:', errors);


        // Your JavaScript code goes here
        console.log('Submit Button clicked!');
    })
}

