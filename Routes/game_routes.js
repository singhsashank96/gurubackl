const express = require("express");
const router = express.Router();



const {
  createGame,
  editGame,
  deleteGame,
  getGames,
  getGameById,
  playGame, addUserGame , getUserGame , getUserGamePDF , getAllUserGames
} = require("../Controllers/gameController");

// Middleware to check admin access
// const { isAdmin } = require("../middleware/authMiddleware");

// Admin routes
router.get("/user-games", getAllUserGames);

router.post("/", createGame); // Create a game
router.put("/:id", editGame); // Edit a game
router.delete("/:id", deleteGame); // Delete a game

// User routes
router.get("/", getGames); // Get all games
router.get("/:id", getGameById); // Get a game by ID 

router.post("/play/:id", playGame); // Play a game
router.post("/addUserGame", addUserGame); // Play a game
router.post("/getUserGame", getUserGame); // Play a game
router.post("/getUserGamePDF", getUserGamePDF); // Play a game







module.exports = router;
