import axios from 'axios';
import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
 
function ProductsPage() {
    const [searchParams, setSearchParams] = useSearchParams(); // querystring state set etme yada get etme
    const [productName, setProductName] = useState(''); // Input Change olduğundaki değeri alır
    const navigate = useNavigate(); // yönlendirme
 
    const onSearchInput = (event: any) => {
        setProductName(event.target.value);
    };
 
    const onFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        setSearchParams({ q: productName });
        // products?q=chai link
        navigate(`/products?q=${productName}`);
    };
 
    useEffect(() => {
        axios
            .get(
                `https://services.odata.org/northwind/northwind.svc/Products?$filter=substringof(${
                    searchParams.get('q') || ''
                },ProductName)&$format=json`
            )
            .then((response) => {
                console.log('data', response.data);
            });
    }, []);
 
    return (
        <>
            <form method="GET" onSubmit={onFormSubmit}>
                <input onChange={onSearchInput} placeholder="ürün ismi arayınız" />
                <br></br>
                <input type="submit" value="Arama Yap" />
            </form>
        </>
    );
}
 
export default ProductsPage;