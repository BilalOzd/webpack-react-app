
import axios from 'axios';
import React, { FormEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getProducts } from '../services/product.service';

function ProductsPage() {
	const [searchParams] = useSearchParams({ q: '' }); // querystring state set etme yada get etme
	const [productName, setProductName] = useState(''); // Input Change olduğundaki değeri alır
	const navigate = useNavigate(); // yönlendirme
	const [mode, setMode] = useState('');

	const onSearchInput = (event: any) => {
		setProductName(event.target.value);
	};

	const onFormSubmit = (event: FormEvent) => {
		event.preventDefault(); // form post olmasın spa uygulama olduğunda aynı sayfada kalmak için yaptık.
		// products?q=chai link

		if (mode === 'clientside') {
            //clientside tekrar render yapmaz ama linke gittiğinde veriyi tekrar yüklemek gerekir.
			navigate(`/products?q=${productName}`);
			loadData(); // yeniden render almadığından navigate sonrası operasyonu çağırdık
			// window.scroll(0,0); // sayfada scroll varsa sayfayı en üste filtreleme sonrası çıkar.
		} else {
			window.location.href = `/products?q=${productName}`;
		}
	};

	const loadData = () => {
		console.log('search', searchParams.get('q'));

		const searchText =
			mode === 'clientside' ? productName : searchParams.get('q');

		console.log('searchText', searchText);

		//src/services/product.service.ts üzerindeki getProducts() metodu ile daha temiz bir şekilde alıyoruz.
		getProducts(
			`?$filter=substringof('${searchText}',ProductName)&$format=json`
		).then((data) => {
			console.log('data', data);
		});
	};

	useEffect(() => {
		console.log('rendering...');
		loadData();
	}, []);

	return (
		<>
			<Helmet>
				<title>Ürünlerimiz</title>
				<meta name="description" content="React App"></meta>
				<meta name="keywords" content="Products,Ürünler"></meta>
			</Helmet>
			<form method="GET" onSubmit={onFormSubmit}>
				<input onChange={onSearchInput} placeholder="ürün ismi arayınız" />
				<br></br>
				Mode: {mode}
				<select
					defaultValue={''}
					onChange={(e: any) => setMode(e.target.value)}
				>
					<option disabled value={''}>
						Seçim Yapınız
					</option>
					<option value={'clientside'}>ClientSide</option>
					<option value={'serverside'}>ServerSide</option>
				</select>
				<br></br>
				<input type="submit" value="Arama Yap" />
			</form>
		</>
	);
}

export default ProductsPage;
