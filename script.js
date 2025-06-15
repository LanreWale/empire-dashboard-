// script.js

const dashboard = document.getElementById("dashboard");

async function fetchData() {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzga69ZajDBN-wuogb-MWz96JAP4UAe5o8jQtnYT-taxwm3pVh67HCYlCGoCavyU0kr/exec");
    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      dashboard.innerHTML = `
        <div class="dashboard-container">
          <h2>Empire CPA Live Report</h2>
          <table>
            <tr>
              <th>Time</th>
              <th>Clicks</th>
              <th>Leads</th>
              <th>Earnings ($)</th>
            </tr>
            ${data.map(row => `
              <tr>
                <td>${row.time}</td>
                <td>${row.clicks}</td>
                <td>${row.leads}</td>
                <td>${row.earnings}</td>
              </tr>
            `).join("")}
          </table>
        </div>
      `;
    } else {
      dashboard.innerHTML = "<p>No data available at the moment.</p>";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    dashboard.innerHTML = "<p>Failed to load data. Check connection or Google Script URL.</p>";
  }
}

fetchData();
setInterval(fetchData, 30000); // Auto-refresh every 30 seconds
