fetch('config.json')
  .then(response => response.json())
  .then(config => {
    document.getElementById('title').textContent = config.title;
    document.getElementById('tagline').textContent = config.tagline;
  })
  .catch(error => console.error('Error loading config:', error));
