document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('btn-submit');
    const textarea = document.getElementById('exampleTextarea');
  
    function handleSubmit() {
      
      const comentario = textarea.value;
  
      
      textarea.value = '';
    }
  
    submitButton.addEventListener('click', handleSubmit);
  });