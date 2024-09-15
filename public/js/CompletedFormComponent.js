import {CreateDropDownFromUsers, FormComponent, hookUpDropDowns} from "./FormComponent.js";
import DropDown from "./DropDown.js";

const ComponentHtml = `
<div class="completed-form">
 <div class="ui right rail" style="">
        <div class="ui sticky" style="width: 239px !important; height: 433.492px !important; left: 706px;">
            <tasksummary class="ui fluid card">
                <div class="image">
                    <img src="/images/artwork/avatar1.png">
                </div>
                <div class="content">
                    <table class="ui compact very basic striped table">
                        <thead>
                        <tr>
                            <th colspan="2">
                                <i class="info circle flat icon" data-offset="15"></i>
                                About This Form
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td colspan="2">
                                <p>Your settlement agency will use this information to prepare documents for your closing.</p>
                                <div class="ui divider"></div>
                                <p>If you have any questions please contact
                                    <b>Angelina Barbieri</b>
                                    at R &amp; P Settlement Group, LLC.
                                </p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </tasksummary>
        </div>
    </div>
 <div id="contactFormShowCaseTemplate" class="completed-form-component">
    <h4 class="ui dividing header">
        Your Submission so far
    </h4>
    <div class="indent">
        <div class="ui search selection dropdown users" id="cool">
            <input type="hidden" name="ZJ8NPcbieqQJb9Y8S" value="Male" data-schema-key="gender"
                   autocomplete="new-password">
    
    
            <input class="search" autocomplete="new-password" tabindex="0">
    
    
            <div class="text">Liping Chen</div>
    
    
            <i class="dropdown icon"></i>
    
    
            <div class="menu" tabindex="-1">
    
    
                <div class="item active selected" data-value="1">Liping Chen</div>
    
    
                <div class="item" data-value="2">Janelle Johnson</div>
    
    
            </div>
        </div>
    </div>
    <div class="indent">
        <reviewsegment class="ui segment" id="connectPersonalInfoReview">






            <div class="ui tabular dashboard stackable menu">

                <a class="item active" data-tab="individual">

                    Personal Info

                </a>




                <a class="item" data-tab="addresses">Addresses</a>


                <a class="item" data-tab="borrowerAdditionalQuestions">Additional Questions</a>


            </div>


            <information>

                <div class="ui tab active" data-tab="individual">
                    <table class="ui very basic definition celled table">
                        <tbody>
                        <tr>
                            <td>Full Name</td>
                            <td class="info-value" data-schema-key="fullName">
                                Liping

                                Chen

                            </td>
                        </tr>
                        <tr>
                            <td>
                                Citizenship
                            </td>
                            <td class="info-value" data-schema-key="citizenShip">
                                U.S. Citizen
                            </td>
                        </tr>
                        <tr>
                            <td>SSN</td>
                            <td class="info-value" data-schema-key="ssn">

                                ***-**-**68

                            </td>
                        </tr>

                        <tr>
                            <td>Gender</td>
                            <td class="info-value" data-schema-key="gender">Male</td>
                        </tr>

                        <tr>
                            <td>Marital Status</td>
                            <td class="info-value" data-schema-key="maritalStatus">Single</td>
                        </tr>
                        <tr>
                            <td>Cell #</td>
                            <td class="info-value" data-schema-key="phone">

                                (240) 549-9487

                            </td>
                        </tr>
                        <tr>
                            <td>Home #</td>
                            <td>

                                <span class="empty">Not sent</span>

                            </td>
                        </tr>
                        <tr>
                            <td>Work #</td>
                            <td>

                                <span class="empty">Not sent</span>

                            </td>
                        </tr>
                        <tr>
                            <td>Fax #</td>
                            <td>

                                <span class="empty">Not sent</span>

                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td class="info-value" data-schema-key="email">

                                flamechen123@gmail.com

                            </td>
                        </tr>

                        <tr>
                            <td>
                                Date of Birth
                            </td>
                            <td class="info-value" data-schema-key="dateOfBirth">
                                02/21/1994
                            </td>
                        </tr>


                        <tr>
                            <td>
                                POA Given
                            </td>
                            <td class="POA-field">
                                No
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>


                <div class="ui tab" data-tab="addresses">
                    <div class="ui display form">
                        <div class="field">
                            <label>Current Address</label>
                            <div class="large ui secondary segment value address-field info-value" data-schema-key="address">
                                8120 Craddock Road<br>Greenbelt, MD 20770
                            </div>
                        </div>
                        <div class="field">
                            <label>Forwarding Address</label>
                            <div class="large ui secondary segment value info-value"  data-schema-key="forwardingAddress">

                                Same as Current

                            </div>
                        </div>
                    </div>
                </div>

                <div class="ui tab" data-tab="groundRentFrontFoot">
                    <div class="ui display form">
                        <table class="ui very basic definition celled table">
                            <tbody>
                            <tr>
                                <td>Subject to Ground Rent?</td>
                                <td>
                                    No
                                </td>
                            </tr>

                            <tr>
                                <td>Subject to Front Foot Benefit?</td>
                                <td>
                                    No
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="ui tab" data-tab="maritalHistory">
                    <div class="ui display form">
                        <table class="ui very basic definition celled table">
                            <tbody>

                            <tr>
                                <td>Previous Marriages?</td>
                                <td>None</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="ui tab" data-tab="borrowerAdditionalQuestions">
                    <div class="ui display form">
                        <table class="ui very basic fixed definition celled table">
                            <tbody>
                            <tr>
                                <td>Property will be Primary Residence?</td>
                                <td class="info-value" data-schema-key="primaryResidence">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>First time home buyer?</td>
                                <td class="info-value" data-schema-key="firstTimeHomeBuyer">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>First time home buyer in MD?</td>
                                <td class="info-value" data-schema-key="firstTimeHomeBuyerMd">
                                    Yes
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="ui tab" data-tab="sellerAdditionalQuestions">
                    <div class="ui display form">
                        <table class="ui very basic fixed definition celled table">
                            <tbody>

                            <tr>
                                <td>Attending the Closing?</td>
                                <td>
                                    Yes
                                </td>
                            </tr>





                            <tr>
                                <td>Currently Getting Divorced?</td>
                                <td>
                                    No
                                </td>
                            </tr>


                            <tr>
                                <td>Property is Primary Residence?</td>
                                <td>
                                    Yes
                                </td>
                            </tr>




                            <tr>
                                <td>Water Company</td>
                                <td>

                                </td>
                            </tr>


                            <tr>
                                <td>Sewage Company</td>
                                <td>

                                </td>
                            </tr>



                            <tr>
                                <td>Any Vested Owners Deceased?</td>
                                <td>
                                    No
                                </td>
                            </tr>


                            <tr>
                                <td>Seller Providing Home Warranty?</td>
                                <td>
                                    No
                                </td>
                            </tr>



                            <tr>
                                <td>In-State Resident</td>
                                <td>
                                    Yes
                                </td>
                            </tr>


                            <tr>
                                <td>Has Changed Name Since Purchase?</td>
                                <td>
                                    No
                                </td>
                            </tr>





                            <tr>
                                <td>Declared Bankruptcy</td>
                                <td>No</td>
                            </tr>



                            <tr>
                                <td>Married When Property Acquired?</td>
                                <td>
                                    No
                                </td>
                            </tr>









                            </tbody>
                        </table>
                    </div>
                </div>
            </information>




        </reviewsegment>
    </div>



    <h4 class="ui dividing header">
        Revise Submission
    </h4>
    <div class="indent">

        <div class="ui secondary segment">

            <p>
                If you think you may have entered something incorrectly, then you may update your submission.
            </p>

            <button class="ui huge primary button revise-button">
                Modify
            </button>
        </div>
    </div>
 </div>
</div>
`

 const fillValues = (user, form) => {
   if (user && form) {
       const fields = form.querySelectorAll('.info-value');
       fields.forEach((field, index) => {
           const schemaKey = field.dataset.schemaKey;
           if (user[schemaKey]) {
               field.textContent = user[schemaKey];
           }
           else {
               field.textContent = 'Not set';
           }
       })
   }
}

export const CompletedFormComponent = (users) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = ComponentHtml;
    const form = tempDiv.querySelector('.completed-form');
    const reviseButton = form.querySelector('.revise-button');

    CreateDropDownFromUsers(users, form);

    reviseButton.addEventListener('click', function() {
        form.replaceWith(FormComponent(users));
    });

    const currentUserDropDown = form.querySelector('.ui.search.selection.dropdown.user');
    const selectedUserid = currentUserDropDown.querySelector('.item.active.selected').dataset.value
    const user = users.find(user => user.id === selectedUserid);

    fillValues(user, form);
    hookUpDropDowns(form, (value) => switchForm(value, users, form));
    hookUpTabs(form);

    return form;
}

const switchForm = (clickedValue, users, form) => {
    const selectedUser = users.find(user => user.id === clickedValue);
    fillValues(selectedUser, form);
}

const hookUpTabs = (form) => {
    const tabsContainer = form.querySelector('.ui.tabular.dashboard.stackable.menu');
    const tabs = tabsContainer.querySelectorAll('.item');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            const tabContent = form.querySelector(`.ui.tab[data-tab="${tabName}"]`);
            const activeTab = form.querySelector('.ui.tab.active');
            activeTab.classList.remove('active');
            tabContent.classList.add('active');

            const activeTabLink = tabsContainer.querySelector('.item.active');
            activeTabLink.classList.remove('active');
            tab.classList.add('active');
        });
    });
}