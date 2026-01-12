import Swal from 'sweetalert2';

const AlertaError = ({ title, text, router, redirectUrl }) => {
    Swal.fire({
        icon: 'error',
        title: title || '¡Ha ocurrido un error!',
        text: text || 'Ha ocurrido un error inesperado. Por favor, reintente.',
        confirmButtonText: 'Aceptar',
    }).then(() => {
        if (router) {
            router.push(redirectUrl);
        }
    });
};

const AlertaExito = ({ title, text, router, redirectUrl }) => {
    Swal.fire({
        icon: 'success',
        title: title || '¡Operación exitosa!',
        text: text || 'La operación se ha completado con éxito.',
        confirmButtonText: 'Aceptar',
    }).then(() => {
        if (router) {
            router.push(redirectUrl);
        }
    });
};

const AlertaConfirmar = ({
    title,
    text,
    router,
    redirectUrl,
    confirmFunction,
    confirmValue,
    successTitle,
    successText,
    errorTitle,
    errorText,
}) => {
    Swal.fire({
        icon: 'question',
        title: title || '¿Está seguro de que desea continuar?',
        text,
        confirmButtonText: 'Aceptar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
    }).then(async (response) => {
        if (response.isConfirmed && confirmFunction) {
            const { error } = await confirmFunction(confirmValue);
            if (error) {
                AlertaError({
                    title: errorTitle,
                    text: errorText,
                    router,
                    redirectUrl,
                });
            } else {
                AlertaExito({
                    title: successTitle,
                    text: successText,
                    router,
                    redirectUrl,
                });
            }
            if (router) {
                router.push(redirectUrl);
            }
        }
    });
};

export { AlertaError, AlertaConfirmar, AlertaExito };
