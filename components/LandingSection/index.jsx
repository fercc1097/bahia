import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import MarginLayout from '../MarginLayout';

const index = () => {
    return (
        <MarginLayout className={styles.layout}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.header}>Un negocio que fluye</h1>
                    <p>Tenemos un modelo de negocios que hace que tengas un flujo de dinero constante. Ofrecemos el servicio de venta y renta de dispensadores de agua.</p>
                    <a href='#contact'>Comenzar Ahora!</a>
                </div>
                <div>
                    <Image src={'/images/water-dispenser.png'} width={508} height={407} />
                </div>
            </div>
            <Image src={'/images/seen-in.png'} width={1357} height={110} />

        </MarginLayout>
    );
};

export default index;
