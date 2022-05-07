import mongoose, { Schema, model, Model } from 'mongoose';
import { IProduct } from '../interfaces/products';

const productSchema = new Schema({
  description: { type: String, required: true },
  images: [{ type: String }],
  inStock: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true, default: 0 },
  sizes: [{
    type: String,
    enum: {
      values: ['XS','S','M','L','XL','XXL','3XL'],
      message: '{VALUE} no es un Tamaño válido'
    }
  }],
  slug: { type: String, required: true, unique: true },
  tags: [{ type: String }],
  title: { type: String, required: true },
  type: [{
    type: String,
    enum: {
      values: ['shirts','pants','hoodies','hats'],
      message: '{VALUE} no es un Tipo válido'
    }
  }],
  gender: { 
    type: String,
    enum: {
      values: ['men','women','kid','unisex'],
      message: '{VALUE} no es un Género válido'
    }
   },
}, {
  timestamps: true
});

productSchema.index({ title: 'text', tags: 'text' })

const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema);

export default Product;