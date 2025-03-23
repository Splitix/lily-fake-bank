const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  amount: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("Data", dataSchema);
