import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import MarginLayout from '../MarginLayout';

const Card = ({ title, icon, description }) => {
    return (
        <div className={styles.cardItem}>
            <Image src={`/images/${icon}.png`} width={69} height={69} />
            <div className={styles.infoContainer}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

const index = () => {
    return (
        <MarginLayout className={styles.layout}>
            <div className={styles.container}>
                <div className={styles.cardsContainer}>
                    <div>
                        <Card
                            title={'Instalacion'}
                            icon={'setup'}
                            description={'Recibe asesoria gratuita para saber si el espacio es apto para instalar el dispensador'}
                        />
                        <Card
                            title={'App de reportes'}
                            icon={'data'}
                            description={'Puedes ver un reporte de ventas desde nuestra app. Ademas de recibir notificaciones importantes'}
                        />
                        <Card
                            title={'Soporte'}
                            icon={'support'}
                            description={'Soporte los 365 dias del año para que puedas operar con tranquilidad. Nosotros nos encargamos'}
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <h1>Renta de dispensadores</h1>
                    <p>Nuestro modelo de renta de dispensadores te permite tener un negocio automatizado. Esta es la mejor opcion para comenzar, ya que no es necesario desembolsar una gran cantidad de dinero. Que estas esperando para comenzar a generar un ingreso extra?</p>
                    <a href="#contact">Conocer más</a>
                </div>
            </div>

        </MarginLayout>
    );
};

export default index;
