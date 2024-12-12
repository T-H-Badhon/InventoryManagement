'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function logOut() {
    cookies().delete('nbgnl_token');
    redirect('/login');
}