import React from 'react';
import styles from './index.module.scss';

const index = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.content}>
                <h1>Dispensarios en venta</h1>
                <p>La mejor manera de hacer que tu inversion tenga un mayor retorno es por medio de la compra de dispensadores. Incluimos la instalacion para que solo tengas que buscar ubicaciones estrategicas. Si no estas seguro de comprar un dispensario tambien puedes rentar uno!</p>
                <a href="#contact">Comenzar ahora</a>
            </div>
            <div className={styles.divider} />
            <div className={styles.imgContainer}>
                <video width="320" muted autoPlay loop>
                    <source src="/water.mp4" />
                </video>
            </div>
        </div>
    );
};

export default index;
