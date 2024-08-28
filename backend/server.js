const express = require("express");
const cors = require("cors");
const {
  createUser,
  validateUser,
  generateToken,
  sanitizeUser,
  getAllCategories,
  getAllBusinesses,
} = require("./database");

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend's URL if different
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.post("/register", async (req, res) => {
  console.log("Received registration request:", req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    console.log("Missing fields:", { name, email, password });
    return res
      .status(400)
      .json({ error: "Name, email, and password are required" });
  }

  try {
    const user = await createUser(name, email, password);
    const token = await generateToken(user);
    res.status(201).json({
      message: "User registered successfully",
      user: sanitizeUser(user),
      token,
    });
  } catch (error) {
    console.error("Registration error:", error);
    if (error.code === 11000) {
      res.status(400).json({ error: "Email already exists" });
    } else {
      res.status(500).json({ error: "Error registering user" });
    }
  }
});

// Add this new login route
app.post("/login", async (req, res) => {
  console.log("Received login request:", req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await validateUser(email, password);
    if (user) {
      const token = await generateToken(user);
      const sanitizedUser = sanitizeUser(user);
      res.json({
        message: "Login successful",
        user: sanitizedUser,
        token,
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Error during login" });
  }
});

app.get("/categories", async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching categories", error: error.message });
  }
});

app.get("/businesses", async (req, res) => {
  try {
    const businesses = await getAllBusinesses();
    res.json(businesses);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching categories", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
