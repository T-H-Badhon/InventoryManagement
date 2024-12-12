import { redirect } from 'next/navigation';
import gettoken from './getToken';

export default  function isLogin(Component: any) {
    return  function IsAuth(props: any) {
        const token =  gettoken();

        if (!token) {
            redirect('/login');
        } else{
            return <Component {...props} />;
        }
    };
}
