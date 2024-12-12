import mongoose, { Model, Schema } from 'mongoose';
import { TUser } from './userType';



const userSchema: Schema<TUser> = new Schema<TUser>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true, versionKey: false },
);

export type UserModel = Model<TUser>;

const User =
    (mongoose.models.User as UserModel) ||
    mongoose.model<TUser, UserModel>('User', userSchema);

export default User;
