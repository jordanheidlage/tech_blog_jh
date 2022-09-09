const editFormHandler = async (event) => {
    event.preventDefault();

    const editPost = document.querySelector('#topic-editPost').value.trim();


    if (editPost && description) {
        const response = await fetch(`/api/topics`, {
            method: 'POST',
            body: JSON.stringify({ editPost, description }),
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
document.querySelector('.new-topic-form')
.addEventListener('submit', editFormHandler);