const apiURL = "https://script.google.com/macros/s/AKfycbzSb9XVwkLzyyJY6ileivj1gThZI9juwonQ50hhGThJ6b5mMY08GL2g_2heLgxzGcY/exec";  // Thay URL của bạn
let allData = [];

function fetchData() {
  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      // Cập nhật HTML
      document.getElementById('localTime').textContent = data.localTime;
      document.getElementById('temperature').textContent = data.temperature;
      document.getElementById('humidity').textContent = data.humidity;
      document.getElementById('counts').textContent = data.counts;
      document.getElementById('cps').textContent = data.cps;
      document.getElementById('uSv').textContent = data.uSv;
      document.getElementById('timestamp').textContent = data.timestamp;

      // Lưu vào mảng
      allData.push(data);
    })
    .catch(err => console.error("Fetch error:", err));
}

setInterval(fetchData, 5000);
fetchData();

document.getElementById("downloadBtn").addEventListener("click", () => {
  if (allData.length === 0) return;

  const headers = Object.keys(allData[0]).join(",");
  const rows = allData.map(obj => Object.values(obj).join(","));
  const csvContent = [headers, ...rows].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "realtime_data.csv";
  a.click();
});
