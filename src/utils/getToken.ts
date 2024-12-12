
import { TUser } from '@/serverSection/userType';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export type TokenPayload = { user: TUser } & JwtPayload;

export default function gettoken() {
    const token = cookies().get('nbgnl_token');

    if (!token || !token.value) {
        return null;
    } else {
        const data = jwt.verify(
            token?.value,
           "fsaonofsposfa" as string,
        ) as JwtPayload ;
        if (!data?.user?._id) {
            return null;
        } else {
            return data;
        }
    }
}
