const mongoose = require("mongoose");

const userGameSchema = new mongoose.Schema({
          userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    
    games: [
    {
      gameId: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true }, // Reference to Game model
      gameType: { type: String }, // Type of game (e.g., "Single Digit", "Panna", etc.)
      name: { type: String, }, // Name of the game
      description: {
        type: [
          {
            type: Map,
            of: String
          }
        ],
        default: []
      }    , 
        betAmount: { type: Number, required: true }, // Amount of money the user has bet
      result: { type: String }, // Result of the game (optional)
      status: { type:String  }, // Status of the game (optional)
      bidDate: { type: Date, default: Date.now } // Date when the game was added

    },
  ],
  totalBetAmount: { type: Number, default: 0 }, // Total bet amount placed by the user (optional)
  // Timestamp when the record was created
} ,
{
  timestamps: true, // Enables both createdAt and updatedAt fields
}
);

module.exports = mongoose.model("UserGame", userGameSchema);
