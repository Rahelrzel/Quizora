// const fetch = require("node-fetch"); // Removed as Node 22 has native fetch

// If node-fetch is not available, we can use http, but for simplicity let's assume fetch is available or I'll provide a script using http.
// Actually, to be safe and dependency-free for the test script, I'll use the native 'http' module or 'fetch' if available.
// Since I installed dependencies for the project, I didn't install node-fetch.
// But Node 18+ has global fetch.

const BASE_URL = "http://localhost:5000/api/auth";

async function runTests() {
  console.log("Starting Auth Tests...");

  // 1. Register User
  console.log("\n1. Testing Register...");
  const registerRes = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Test User",
      email: "test@example.com",
      password: "password123",
    }),
  });

  if (registerRes.status === 201) {
    const data = await registerRes.json();
    console.log("✅ Register Success:", data.email);
  } else {
    const err = await registerRes.json();
    console.log("❌ Register Failed:", err);
  }

  // 2. Login User
  console.log("\n2. Testing Login...");
  const loginRes = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "test@example.com",
      password: "password123",
    }),
  });

  if (loginRes.status === 200) {
    const data = await loginRes.json();
    console.log("✅ Login Success:", data.email);
    console.log("Token received");
  } else {
    const err = await loginRes.json();
    console.log("❌ Login Failed:", err);
  }

  // 3. Register Duplicate
  console.log("\n3. Testing Duplicate Register...");
  const dupRes = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Test User",
      email: "test@example.com",
      password: "password123",
    }),
  });

  if (dupRes.status === 400) {
    console.log("✅ Duplicate Register Blocked (400)");
  } else {
    console.log("❌ Duplicate Register Failed Check:", dupRes.status);
  }
}

// Wrapper to handle fetch availability
if (!globalThis.fetch) {
  console.log(
    "Global fetch not available, please run with Node 18+ or install node-fetch"
  );
  process.exit(1);
}

runTests().catch(console.error);
