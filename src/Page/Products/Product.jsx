import React, { useEffect, useState } from 'react';

const Product = () => {
    const [productDatas, setProductDatas] = useState(null | []);

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
                setProductDatas(data)
            }
            catch (err) {
                console.log("ERROR:", err);
            }
        };
        dataFetch();
    }, []);
    console.log(productDatas);


    return (
        <div>
            <h1>This is product page</h1>
        </div>
    );
};

export default Product;