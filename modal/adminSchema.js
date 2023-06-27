let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const adminSchema = new Schema({
  appCode: {
    type: String,
    required: true,
  },
  projectId: {
    type: String,
    required: true,
  },
  modelId: {
    type: String,
    required: true,
  },
  version: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("admin_data", adminSchema);
