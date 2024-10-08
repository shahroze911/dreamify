import { Document, model, models, Schema } from "mongoose";

export interface IImage extends Document {
	title: string;
	transformationType: string;
	publicId: string;
	secureUrl: string;
	width?: number;
	heigt?: number;
	config?: object;
	transformationUrl?: string;
	aspectRation?: string;
	color?: string;
	prompt?: string;
	author: {
		_id: string;
		firstName: string;
		lastName: string;
	};
	createdAt?: Date;
	updatedAt?: Date;
}

const ImageSchema = new Schema({
	title: { type: String, required: true },
	transformationType: { type: String, required: true },
	publicId: { type: String, required: true },
	secureUrl: { type: String, required: true },
	width: { type: Number },
	height: { type: String },
	config: { type: Object },
	transformationUrl: { type: String },
	aspectRation: { type: String },
	color: { type: String },
	prompt: { type: String },
	athor: { type: Schema.Types.ObjectId, ref: "User" },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
