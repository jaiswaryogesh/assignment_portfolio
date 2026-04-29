require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

if (!uri) {
  console.error("MONGO_URI is not defined in .env");
  process.exit(1);
}

// Log the URI but hide the password for security
const safeUri = uri.replace(/:([^:@]+)@/, ':****@');
console.log("Attempting to connect to:", safeUri);

console.log("Connecting...");

mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log("\n✅ SUCCESS! Your MongoDB connection string is correct and the database is reachable from this computer.");
    process.exit(0);
  })
  .catch(err => {
    console.log("\n❌ FAILED! Could not connect to MongoDB.");
    console.log("Error details:", err.message);
    console.log("\nPossible reasons:");
    console.log("1. Your IP Address is not whitelisted in Atlas (Network Access).");
    console.log("2. The username or password in the string is incorrect.");
    console.log("3. The cluster hostname is incorrect.");
    process.exit(1);
  });
