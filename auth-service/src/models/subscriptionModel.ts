import mongoose, { Schema } from 'mongoose';



export interface ISubscriptionDoc extends mongoose.Document {
    user_id: string,
    plan: Date,
    limit: string,
}


const subscriptionSchema = new Schema(
    {
        limit: {
            type: Number,
            required: true,
            default: 0     
        },
        user_id: {
            type: Number,
            required: true,
            unique: true,
            ref: 'users'
        },
    },
    {
        toJSON: {
            transform(docs, ret){
                delete ret.__v;
                delete ret._id;
            }
        }
    }
);

const SubscriptionModel = mongoose.model<ISubscriptionDoc>('subscriptions', subscriptionSchema);

export default SubscriptionModel;
