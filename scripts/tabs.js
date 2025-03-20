document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabButtons.forEach(button => {
      button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-tab');
  
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
  
        tabContents.forEach(content => {
          content.classList.remove('active');
          if (content.id === targetId) content.classList.add('active');
        });
      });
    });
  });
  