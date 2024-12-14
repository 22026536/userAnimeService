import mongoose from 'mongoose';

const userCommentSchema = new mongoose.Schema({
    User_id: { type: Number, required: true, index: true },
    Anime_id: { type: Number, required: true },
    Comment: { type: String },
    Time: { type: Date, require: true}
}, {
    collection: 'UserComment' // Định rõ tên collection
  });

export default mongoose.model('UserHistory', userCommentSchema);