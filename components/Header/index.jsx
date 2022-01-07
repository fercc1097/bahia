import React, { useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

const Options = ({ onClose }) => {
    return (
        <div className={styles.optionsContainer}>
            <a className={styles.option} href="#rent">Renta</a>
            <a className={styles.option} href="#sale">Venta</a>
            <a className={styles.option} href="#contact">Contacto</a>
            <p onClick={onClose} className={styles.option}>Cerrar</p>
        </div>
    );
};

const index = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={styles.menu}>
            <div className={styles.menuContainer}>
                <p className={styles.logo}>Aquara</p>
                <Image onClick={onClick} src={'/icons/burger-menu.svg'} width={50} height={50} />
            </div>
            {isOpen && <Options onClose={onClick} />}
        </div>
    );
};

export default index;
