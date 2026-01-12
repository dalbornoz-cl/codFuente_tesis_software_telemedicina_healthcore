export const UUID_PATTERN = /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/;
export const CHILE_LOCALE = 'es-CL';
export const ADMIN_ROL = 'ADMINISTRADOR';
export const RECEPCIONISTA_ROL = 'RECEPCIONISTA';
export const MEDICO_ROL = 'MEDICO';
export const ROLES = [
    { nombre: 'Administrador', valor: ADMIN_ROL },
    { nombre: 'Recepcionista', valor: RECEPCIONISTA_ROL },
    { nombre: 'Médico', valor: MEDICO_ROL },
];
export const DIAS = [
    { text: 'Lunes', value: 'lunes' },
    { text: 'Martes', value: 'martes' },
    { text: 'Miércoles', value: 'miercoles' },
    { text: 'Jueves', value: 'jueves' },
    { text: 'Viernes', value: 'viernes' },
    { text: 'Sábado', value: 'sabado' },
    { text: 'Domingo', value: 'domingo' },
];
export const TipoVenta = {
    VD: 'Venta Débito',
    VN: 'Venta Normal',
    VC: 'Venta en cuotas',
    SI: '3 cuotas sin interés',
    S2: '2 cuotas sin interés',
    NC: 'N Cuotas sin interés',
    VP: 'Venta Prepago',
};
export const MEDICO_URI = 'medicos';
export const HORARIOS_URI = 'horarios';
export const USUARIOS_URI = 'usuarios';
export const WEBPAY_URI = 'webpay';
export const WEBPAY_URL_RETORNO = `${process.env.NEXT_PUBLIC_WEB_URL}pago/webpay`;
export const PACIENTES_URI = 'pacientes';
export const CERTIFICARDOR_URI = 'certificador';
export const RESERVAS_URI = 'reservas';
export const BONO_URI = 'ebono';
