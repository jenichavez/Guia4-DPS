"use client"
import { useState } from 'react';
export const Headers = ({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
}) => {
    const [active, setActive] = useState(false);
    const onDeleteProduct = product => {
        var $confirm = "Está seguro de querer eliminar el Libro: " + product.title + " ?";

        if (confirm($confirm) == true) {
            const results = allProducts.filter(
                item => item.id !== product.id
            );
            setTotal(total - product.price * product.quantity);
            setCountProducts(countProducts - product.quantity);
            setAllProducts(results);
        } else {
            return
        }
    };
    const onCleanCart = () => {
        if (confirm("Desea vaciar el carrito?") == true) {
            setAllProducts([]);
            setTotal(0);
            setCountProducts(0);
        }else{
            return
        }
    };
    return (
        <header>
            <h1>Tienda de Libros</h1>
            <div className='container-icon'>
                <div className='container-cart-icon'
                    onClick={() => setActive(!active)}
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/256/5412/5412512.png"
                        alt="carrito"
                        className="icon-cart" />
                    <div className='count-products'>
                        <span id='contador-productos'>{countProducts}</span>
                    </div>
                </div>
                <div
                    className={`container-cart-products ${active ? '' : 'hidden-cart'
                        }`}
                >
                    {allProducts.length ? (
                        <>
                            <div className='row-product'>
                                {allProducts.map(product => (
                                    <div className='cart-product'
                                        key={product.id}>
                                        <div className='info-cart-product'>
                                            <span className='cantidad-producto-carrito'>
                                                {product.quantity}&nbsp;
                                            </span>
                                            <p className='titulo-producto-carrito'>
                                                {product.title}
                                            </p>
                                            <span className='precio-producto-carrito'>
                                                ${product.price}
                                            </span>
                                            <img className='imagen-producto-carrito' src={product.urlImage}>
                                            </img>
                                        </div>
                                        <img
                                            src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                                            alt="cerrar"
                                            className="icon-close"
                                            onClick={() => onDeleteProduct(product)}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className='cart-total'>
                                <h3>Total:</h3>
                                <span className='total-pagar'>${total}</span>
                            </div>
                            <button className='btn-clear-all'
                                onClick={onCleanCart}>
                                Vaciar Carrito
                            </button>
                        </>
                    ) : (
                        <p className='cart-empty'>El carrito está vacío</p>
                    )}
                </div>
            </div>
        </header>
    );
};