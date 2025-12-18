let BACKEND_URL = "";

fetch("backend.txt?nocache=" + Date.now())
  .then(res => res.text())
  .then(url => {
    BACKEND_URL = url.trim();
    console.log("Backend Loaded:", BACKEND_URL);
  })
  .catch(() => {
    alert("Backend link load nahi ho raha");
  });

document.getElementById('uploadBtn').addEventListener('click', async () => {
  const files = document.getElementById('fileInput').files;
  const projectName = document.getElementById('projectName').value.trim();
  if (!files.length || !projectName) {
    alert("Please select files and enter project name!");
    return;
  }

  const formData = new FormData();
  for (const file of files) formData.append('files', file);
  formData.append('projectName', projectName);

  const res = await fetch(`${BACKEND_URL}/upload`, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();
  document.getElementById('output').innerHTML = `
    ✅ <strong>Hosted Successfully!</strong><br>
    🌍 <a href="${data.url}" target="_blank">${data.url}</a>
  `;
});

document.getElementById('deleteBtn').addEventListener('click', async () => {
  const projectName = document.getElementById('deleteName').value.trim();
  const pass = document.getElementById('adminPass').value.trim();
  if (!projectName || !pass) {
    alert("Please fill both fields!");
    return;
  }

  const res = await fetch(`${BACKEND_URL}/delete`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ projectName, password: pass }),
  });

  const data = await res.json();
  document.getElementById('deleteMsg').textContent = data.message;
});
