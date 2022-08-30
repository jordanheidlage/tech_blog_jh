
const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#topic-title').value.trim();
    const description = document.querySelector('#topic-description').value.trim();

    if (title && description) {
        const response = await fetch(`/api/topics`, {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create topic');
        }
    }

    document
        .querySelector('.new-topic-form')
        .addEventListener('submit', newFormHandler);
};