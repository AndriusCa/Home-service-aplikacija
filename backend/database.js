const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Home-service-application",
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

const CategoriesSchema = new mongoose.Schema({}, { strict: false });

const BusinessSchema = new mongoose.Schema({}, { strict: false });

// If you know the name of your collection, specify it here
const Categories = mongoose.model("Categories", CategoriesSchema, "Categories");

const Businesses = mongoose.model("Businesses", BusinessSchema, "Businesses");

// Function to get all Categories
async function getAllCategories() {
  try {
    const categories = await Categories.find();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

async function getAllBusinesses() {
  try {
    const businesses = await Businesses.find();
    return businesses;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

async function createUser(name, email, password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

async function findUserByEmail(email) {
  try {
    return await User.findOne({ email });
  } catch (error) {
    console.error("Error finding user by email:", error);
    throw error;
  }
}

async function validateUser(email, password) {
  try {
    const user = await findUserByEmail(email);
    if (!user) return null;
    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? user : null;
  } catch (error) {
    console.error("Error validating user:", error);
    throw error;
  }
}

async function generateToken(user) {
  return jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
}

function sanitizeUser(user) {
  const { _id, name, email, createdAt, updatedAt } = user;
  return { id: _id, username: name, email, createdAt, updatedAt };
}

module.exports = {
  createUser,
  findUserByEmail,
  validateUser,
  generateToken,
  sanitizeUser,
  getAllCategories,
  getAllBusinesses,
};
