import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

const index = ({ children, className }) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default index;
