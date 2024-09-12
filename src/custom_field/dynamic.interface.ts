// src/interfaces/dynamic.interface.ts

import { Document } from 'mongoose';

export interface DynamicDocument extends Document {
  [key: string]: any; // This allows any key-value pair
}
