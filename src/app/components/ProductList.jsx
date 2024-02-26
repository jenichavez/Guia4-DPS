import React from "react";
import { data } from "../data";
export const ProductList = ({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
}) => {
    const onAddProduct = product => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setTotal(total + product.price * product.quantity);
            setCountProducts(countProducts + product.quantity);
            return setAllProducts([...products]);
        }
        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product]);
    };

    const onShowResumeProduct = product => {

        // Get the modal
        var modal = document.getElementById("myModal" + product.id);
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        var header = document.getElementById("myTitle");
        var resume = document.getElementById("myResume");


        modal.style.display = "block";


        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

    }
    return (
        <div className='container-items'>
            {data.map(product => (
                <div className='item' key={product.id}>
                    <figure>
                            <img src={product.urlImage} alt={product.title} onClick={() => onShowResumeProduct(product)} />
                            <div id={"myModal" + product.id} className={"modal"}>
                            <div class="modal-content">
                                <span class="close">&times;</span>
                                <h1 id="myTitle">Resumen de {product.title}</h1><br />
                                <p id="myResume">{product.resume}</p>
                            </div>
                        </div>
                    </figure>
                    <div className='info-product'>
                        <h2>{product.nameProduct}</h2>
                        <p className='price'>${product.price}</p>
                        <button onClick={() => onAddProduct(product)}>
                            Añadir al carrito
                        </button>
                    </div>
                </div>

            ))}
        </div>
    );
};
