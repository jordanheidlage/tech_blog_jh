
const newCommentForm = async (event) => {
    event.preventDefault();
    console.log("hello");

    const comment = document.querySelector('#comment-body').value.trim();
    const topic_id = document.querySelector('#topic-id').value.trim();
    if (comment) {
        await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment, topic_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
            document.location.reload();
        
    }

};
document.querySelector('.comment-form').addEventListener('submit', newCommentForm);