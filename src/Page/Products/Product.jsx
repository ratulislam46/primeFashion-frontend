import React, { useEffect, useState } from 'react';

const Product = () => {
    const [productDatas, setProductDatas] = useState([]);
    const [loading, setLoading] = useState(true);

    // Basic javaScript fetch 
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(err => {
    //         console.log("ERROR:", err);
    //     });

    // using Async/Await
    useEffect(() => {
        const dataFetch = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await res.json();
                console.log(data);
                setProductDatas(data);
                setLoading(false)
            }
            catch (err) {
                console.log("ERROR:", err);
            }
        };
        dataFetch();
    }, []);
    console.log(productDatas);

    if (loading) return <p className='h-screen flex justify-center items-center border'>Loading . . . </p>


    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {productDatas?.map((data, index) => (
                <div key={data?.id} data={data}>
                    <div className='p-4 border rounded-md'>
                        <p>{index + 1}.</p>
                        <p>Name: {data?.name}</p>
                        <p>Email: {data?.email}</p>
                        <p>Phone: {data?.phone}</p>
                        <p>Website: {data?.website}</p>
                        <p>City: {data?.address?.city}</p>
                        <p>Zipcode: {data?.address?.zipcode}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;