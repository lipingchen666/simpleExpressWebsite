export async function fetchUserData() {
    try {
        const response = await fetch('/api/user');
        const data = await response.json();
        console.log('User data:', data);
        // You can use the data to update the DOM or perform other actions
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

export async function fetchTaskData() {
    try {
        const response = await fetch('/api/tasks');
        const data = await response.json();
        console.log('Task Data:', data);
        // You can use the data to update the DOM or perform other actions
        return data;
    } catch (error) {
        console.error('Error fetching task data:', error);
    }
}

