const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

const generateRandomTodos = () => {
  const count = Math.floor(Math.random() * 20) + 1; // Generate between 1 and 20 todos

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Task ${i + 1}`,
    description: `This is a description for Task ${i + 1}`,
    completed: Math.random() > 0.5, // Randomly true/false
  }));
};

app.get("/todos", (req, res) => {
  res.json(generateRandomTodos());
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
