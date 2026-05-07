/* ═══════════════════════════════════════════════════════
   main.js — Visitor Counter
   
   Replace API_ENDPOINT below with your API Gateway URL.
   The Lambda function should:
     1. Increment the visitor count in DynamoDB
     2. Return JSON: { "count": <number> }
═══════════════════════════════════════════════════════ */

const API_ENDPOINT = "https://6fupmib19d.execute-api.us-east-1.amazonaws.com/count";

async function updateVisitorCount() {
  const label = document.getElementById("visitor-label");
  if (!label) return;

  try {
    const response = await fetch(API_ENDPOINT);

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const count = await response.text();

    label.textContent = `${Number(count).toLocaleString()} visitors`;
  } catch (err) {
    console.warn("Visitor counter unavailable:", err);
    label.textContent = "Visitor counter unavailable";
  }
}

updateVisitorCount();
