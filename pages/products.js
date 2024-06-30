import Layout from "@/components/Layout"
import Link from "next/link"
import {useEffect, useState} from "react";
import axios from "axios";

export default function Products(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/api/products').then(response => {
            setProducts(response.data);
        });
    }, []);
    return (
        <Layout>
            <Link className="bg-blue-900 text-white rounded-md text-white py-1 px-2" href={'/products/new'}>Add new product</Link>
        <table className="basic mt-2">
            <thead>
                <tr>
                    <td>Product name</td>
                    <td></td>
                </tr>
            </thead>
        <tbody>
            {products.map(product => (
                <tr>
                    <td>{product.title}</td>
                    <td>
                        <Link href={'/products/edit/'+product._id}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                        Edit
                        </Link>
                    </td>
                </tr>
            ))}
        </tbody>
        </table>
        </Layout>
    );
}