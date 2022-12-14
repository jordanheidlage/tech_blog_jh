async function deleteFormHandler(event) {
    event.preventDefault();

    const id = document.querySelector('#topic-id').value.trim();

    const response = await fetch(`/api/topics/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
  
}
  
document.querySelector('#delete-button').addEventListener('click', deleteFormHandler);