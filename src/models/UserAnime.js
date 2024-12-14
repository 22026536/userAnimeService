import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

const userAnimeSchema = new mongoose.Schema({
    User_Anime_id: { type: Number, index: true },
    User_id: { type: Number, required: true, index: true }, // ID của người dùng
    Anime_id: { type: Number, required: true, index: true }, // ID của anime
    LastestTimeWatched: { type: Date, required: true }, // Thời điểm xem gần nhất
    Status: { type: Boolean, required: true }, // true: finished, false: unfinished
}, {
    collection: 'UserAnime', // Đặt tên collection
    timestamps: true, // Tự động thêm createdAt, updatedAt
});
const AutoIncrement = AutoIncrementFactory(mongoose);
userAnimeSchema.plugin(AutoIncrement, { inc_field: 'User_Anime_id' });

export default mongoose.model('UserAnime', userAnimeSchema);