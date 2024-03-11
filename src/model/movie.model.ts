import mongoose, { Document, Model } from 'mongoose';
const Schema = mongoose.Schema;
const MovieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
      unique: true,
    },
    genre: { type: String, required: true },
    rating: { type: Number, required: true },
    stream_link: { type: String, required: true },
    status: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

export interface IMovie extends Document {
  id: string;
  title: string;
  genre: string;
  rating: number;
  stream_link: string;
  status: boolean;
}
const Movie = (mongoose.models.Movie as Model<IMovie>) || mongoose.model<IMovie>('Movie', MovieSchema);
export default Movie;
