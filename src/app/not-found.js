'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Card from './components/Card';
import styles from './not-found.module.css';
import Button from './components/Button';

const NotFound = () => {
    const router = useRouter();

    return (
        <div className={styles.contenedor_pagina}>
            <div className={styles.contenedor_error}>
                <Card className={styles.tarjeta_error}>
                    <div className={styles.texto_error}>
                        <h3 className={styles.titulo_error}>
                            ¡Oh, no! ¡Error 404!
                        </h3>
                        <p className={styles.descripcion_error}>
                            ¡No podemos encontrar la página que estás buscando!
                        </p>
                        <Button
                            className={styles.boton_inicio}
                            id="ir-inicio"
                            text="Volver al inicio"
                            onClick={() => router.replace('/')}
                        />
                    </div>
                    <Image
                        className={styles.image}
                        width={500}
                        height={300}
                        src="/img/not-found.jpg"
                        alt="Persona con los ojos vendados."
                    />
                </Card>
            </div>
        </div>
    );
};

export default NotFound;
