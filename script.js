document.getElementById("flightForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const from = document.getElementById("from").value.trim();
  const to = document.getElementById("to").value.trim();
  const date = document.getElementById("departure").value;
  const passengers = document.getElementById("passengers").value;
  const results = document.getElementById("results");

  if (!from || !to || !date || !passengers) {
    results.innerHTML = `<p style="color:red;">Please fill in all fields.</p>`;
    return;
  }

  results.innerHTML = `
    <p>Showing flights from <strong>${from}</strong> to <strong>${to}</strong> on <strong>${date}</strong> for <strong>${passengers}</strong> passenger(s):</p>
    <ul>
      <li>Flight Air India - 6:00 AM - $350</li>
      <li>Flight Akash Airline - 11:30 AM - $400</li>
      <li>Flight Indico Airline- 7:45 PM - $320</li>
    </ul>
  `;
});
