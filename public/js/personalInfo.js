import {fetchUserData} from "./common.js";
import { CompletedFormComponent } from "./CompletedFormComponent.js";

const init = async () => {
    const userData = await fetchUserData();
    const wrapper = document.getElementById('personalInformationTask')
    if (wrapper) {
        wrapper.innerHTML = '';
        const form = CompletedFormComponent(userData);
        wrapper.appendChild(form);
    }
}

init();