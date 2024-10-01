import {renderAccordions} from "./Accordian.js";
import {getTaskId, updateTaskById} from "./common.js";

const init = async () => {
    const selectedVestingType = await fetchSelectedVestingType();
    renderAccordions(".ui.equal.width.vertically.divided.grid.vesting", selectedVestingType);
    hookUpForm();
}

const fetchSelectedVestingType = async () => {
    try {
        const response = await fetch('/vesting/selected');
        const data = await response.json();
        console.log("data", data);
        return data.type;
    } catch (e) {
        console.error(e);
    }
}

const hookUpForm = () => {
    const form = document.querySelector(".vesting_form");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData(form);
            let selectedType;
            for (const entry of formData.entries()) {
                // Check if the entry is a checkbox and is checked
                if (entry[1] === 'on') {
                    // Add the checkbox value to the array
                    console.log("entry", entry);
                    selectedType = entry[0];
                }
            }
            await updateVestingItem(selectedType);
            const taskId = getTaskId();
            await updateTaskById(taskId, { completed: true })
            Swal.fire({
                title: 'Success!',
                text: 'Vesting Option Updated Successfully',
                icon: 'success',
                customClass: {
                    confirmButton: 'my-confirm-button'  // Apply the custom class to the confirm button
                }
            });
            console.log("success!");
        } catch (e) {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to update vesting option',
                icon: 'error',
                customClass: {
                    confirmButton: 'my-confirm-button'  // Apply the custom class to the confirm button
                }
            })
        }
    });
}

const updateVestingItem = async (type) => {
    const encodedType = encodeURIComponent(type); // Encodes spaces as %20
    await fetch(`/vesting/select/${encodedType}`, {
        method: 'PATCH',
    })
}

init();