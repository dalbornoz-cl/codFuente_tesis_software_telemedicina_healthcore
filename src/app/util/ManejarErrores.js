'use client';

import { AlertaError } from './Alertas';

const manejarErrores = ({ error, router, redirectUrl }) => {
    switch (error.status) {
        case 400:
            AlertaError({
                title: 'Solicitud inválida',
                text:
                    error.message ||
                    'Por favor, verifique los datos y reintente.',
                router,
                redirectUrl,
            });
            break;
        case 401:
            AlertaError({
                title: 'Usuario no autorizado',
                text:
                    error.message ||
                    'Por favor, inicie sesión con un usuario autorizado para obtener acceso a este contenido.',
                router,
                redirectUrl,
            });
            break;
        case 403:
            AlertaError({
                title: 'Usuario no autorizado',
                text:
                    error.message ||
                    'El usuario no tiene permiso para acceder a este contenido.',
                router,
                redirectUrl,
            });
            break;
        case 404:
            AlertaError({
                title: 'No encontrado',
                text:
                    error.message ||
                    'No se ha encontrado el recurso solicitado.',
                router,
                redirectUrl,
            });
            break;
        case 500:
            AlertaError({
                title: 'Error interno del servidor',
                text:
                    error.message ||
                    'Ha ocurrido un error inesperado. Por favor, reintente.',
                router,
                redirectUrl,
            });
            break;
        default:
            AlertaError({
                text: 'Ha ocurrido un error inesperado. Por favor, reintente.',
                router,
                redirectUrl,
            });
    }
};

export default manejarErrores;
