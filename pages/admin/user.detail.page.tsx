import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
 
function UserDetailPage() {
    const params = useParams(); // id parameter yakalayacağız
    const [serachParams] = useSearchParams(); // querystring yakalayacağız
 
    return (
        <>
            id: {params.id}
            queryString: {serachParams.get('email')} / {serachParams.get('name')}
        </>
    );
}
 
export default UserDetailPage;