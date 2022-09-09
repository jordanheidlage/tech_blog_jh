
const newCommentForm = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#topic-comment').value.trim();

    if (comment) {
        const response = await fetch(`/api/topics`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
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

document.querySelector('.add-comment-form').addEventListener('submit', newCommentForm);
};