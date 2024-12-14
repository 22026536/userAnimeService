import mongoose from 'mongoose';

const userRatingSchema = new mongoose.Schema({
    Rating_id: { type: Number, unique: true,index: true },
    User_id: { type: Number, required: true },
    Anime_id: { type: Number, required: true, index: true },
    Rating: { type: Number, min: 0, max: 10, require: true },
}, {
    collection: 'UserRating' // Định rõ tên collection
  });

  import AutoIncrementFactory from 'mongoose-sequence';

// Khởi tạo AutoIncrement plugin
const AutoIncrement = AutoIncrementFactory(mongoose);
userRatingSchema.plugin(AutoIncrement, { inc_field: 'Rating_id' });

export default mongoose.model('UserRating', userRatingSchema);