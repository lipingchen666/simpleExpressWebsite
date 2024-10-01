export async function fetchUserData() {
    try {
        const response = await fetch('/api/users');
        const data = await response.json();
        console.log('User data:', data);
        // You can use the data to update the DOM or perform other actions
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

export async function updateUserData(id, userData) {
    try {
        const response = await fetch(`/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            // Handle non-2xx responses
            const errorData = await response.json();
            throw new Error(`Error: ${errorData.message}`);
        }

        // Parse the JSON response
        const data = await response.json();
        console.log('User updated successfully:', data);

        // Optionally, display a success message to the user
    } catch (error) {
        console.error('Failed to update user:', error);
        throw error;
        // Optionally, display an error message to the user
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

export async function updateTaskById(taskId, updatedData) {
    try {
        const response = await fetch(`/tasks/${taskId}`, {
            method: 'PATCH', // PATCH method to update the task
            headers: {
                'Content-Type': 'application/json' // Sending JSON data
            },
            body: JSON.stringify(updatedData) // The data to be sent in the request body
        });

        // Check if the response is not ok
        if (!response.ok) {
            throw new Error('Failed to update the task');
        }

        // Parse the JSON response
        const data = await response.json();
        console.log('Task updated successfully:', data);

        // Alert the user
        alert('Task marked as completed!');
    } catch (error) {
        console.error('Error updating task:', error);
        throw new Error('Failed to update');
    }
}

export const getTaskId = () => {
    const path = window.location.pathname;

// Split the path into an array of segments
    const pathSegments = path.split('/');

// Get the last path segment (filter out any empty strings caused by trailing slashes)
    return pathSegments.filter(segment => segment !== '').pop();
}

