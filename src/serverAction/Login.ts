'use server';

import User from '@/serverSection/user.Schema';
import connectMongo from '@/utils/connectMongo';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function loginAction(data: {
    email: string;
    password: string;
}) {
    await connectMongo();

    // Check If User Is Exist
    const user = await User.findOne({ email: data.email });
    if (!user) {
        return {
            success: false,
            error: "Sorry, this email doesn't exist in our records. Please double-check your entry or sign up if you're new here.",
        };
    }

    // Check If User Password is Match
    if (
        !user.password ||
        data.password !=user.password
    ) {
        return {
            success: false,
            error: "Oops! The password you entered doesn't match our records. Please try again.",
        };
    }

    // We omit the password using destructuring
    const { password, ...cleanUserObject } = user.toObject();

    // Create Token & Set Token To Cookies
    const token = jwt.sign(
        { user: cleanUserObject },
       "fsaonofsposfa" as string,
        { expiresIn: '30d' },
    );

    cookies().set('nbgnl_token', token, { maxAge: 2592000 });

    redirect('/');
}
