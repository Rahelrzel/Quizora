const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const APP_CONTENT = `
This app is a Quiz Learning Platform.

How to Start a Quiz:
1. Login to your account.
2. Go to Dashboard.
3. Click 'Start Quiz'.
4. Select a category.
5. Press 'Begin'.

How to Access Resources:
1. Click 'Resources' tab.
2. Choose subject.
3. View or download materials.

Scoring System:
- Each correct answer gives 1 point.
- Results are shown after submission.

Dashboard Features:
- View progress
- View completed quizzes
- Check leaderboard
`;

module.exports = {
  ai,
  APP_CONTENT,
};
