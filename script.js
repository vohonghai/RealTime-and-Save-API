const apiURL = "https://script.google.com/macros/s/AKfycbzSb9XVwkLzyyJY6ileivj1gThZI9juwonQ50hhGThJ6b5mMY08GL2g_2heLgxzGcY/exec";  // Thay URL của bạn
function fetchData() {
  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      document.getElementById('localTime').textContent = data.localTime;
      document.getElementById('temperature').textContent = data.temperature;
      document.getElementById('humidity').textContent = data.humidity;
      document.getElementById('counts').textContent = data.counts;
      document.getElementById('cps').textContent = data.cps;
      document.getElementById('uSv').textContent = data.uSv;
      document.getElementById('timestamp').textContent = data.timestamp;
    });
}

fetchData();
setInterval(fetchData, 5000);
