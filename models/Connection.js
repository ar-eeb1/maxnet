import mongoose from "mongoose";

const ConnectionSchema = new mongoose.Schema(
  {
    name: String,
    number: String,
    houseNo: String,
    floor: String,
    block: String,
    type: String,
    deal: String,
    plan: String,
    static: Boolean,
    router: Boolean,
    cable: Boolean,
    agree: Boolean,
  },
  { timestamps: true }
);

export default mongoose.models.Connection ||
  mongoose.model("Connection", ConnectionSchema);
