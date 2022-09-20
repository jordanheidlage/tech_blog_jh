const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#topic-editPost').value.trim();
    const description = document.querySelector('#topic-editDescription').value.trim();
    const topicId = document.querySelector('#topic-id').value.trim();
    console.log(title, description, topicId);
    if (title && description) {
        const response = await fetch(`/api/topics/${topicId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create topic');
        }
    }

};
document.querySelector('.edit-topic-form')
.addEventListener('submit', editFormHandler);