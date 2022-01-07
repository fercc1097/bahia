import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

const index = () => {
    return (
        <div className={styles.menuContainer}>
            <p className={styles.logo}>Aquara</p>
            <Image src={'/icons/burger-menu.svg'} width={50} height={50} />
        </div>
    );
};

export default index;
