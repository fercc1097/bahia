import React from 'react';
import styles from './styles.module.scss';
import MarginLayout from '../MarginLayout';

const index = () => {
    return (
        <MarginLayout className={styles.layout}>
            <div id='contact' className={styles.content}>
                <div>
                    <h1>Comenzar Ahora</h1>
                    <p>Llego el momento de comenzar a generar un ingreso extra. Llena el siguiente formulario para que uno de nuestros asesores se ponga en contacto contigo</p>
                </div>
                <form>
                    <input type="email" placeholder='Correo Electronico' />
                    <input type="text" placeholder='Nombre' />
                    <select name="marca" placeholder='Marca' id="">
                        <option value="marca1">Marca 1</option>
                        <option value="marca2">Marca 2</option>
                        <option value="marca3">Marca 3</option>
                    </select>
                    <select name="modelo" placeholder='Modelo' id="">
                        <option value="modelo1">Modelo 1</option>
                        <option value="modelo2">Modelo 2</option>
                        <option value="modelo3">Modelo 3</option>
                    </select>
                    <input className={styles.imageInput} type="file" name="foto" id="image" accept="image/png, image/jpeg" />
                    <label for="image">Foto del espacio...</label>
                    <button>Enviar</button>
                </form>
            </div>
        </MarginLayout>
    );
};

export default index;
