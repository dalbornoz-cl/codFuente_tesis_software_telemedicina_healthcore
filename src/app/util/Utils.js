import { ADMIN_ROL, MEDICO_ROL, RECEPCIONISTA_ROL } from './Constants';

export const dateToDayAndMonthText = (date) =>
    date.toLocaleString('es-CL', { day: 'numeric', month: 'long' });

export const esMismaFecha = (fecha, fechaHora) =>
    new Date(`${fecha} 12:00:00`).toLocaleDateString('es-CL') ===
    new Date(fechaHora).toLocaleDateString('es-CL');

export const esMismaFecha2 = (fecha, fechaHora) =>
    new Date(`${fecha} 12:00:00`) === new Date(fechaHora);

export const esMismoDia = (primeraFechaHora, segundaFechaHora) =>
    primeraFechaHora.toDateString() === segundaFechaHora.toDateString();

export const tieneHorasDisponibles = (horarios, fecha) =>
    horarios.filter((horario) => horario.fecha === fecha);

export const filtrarPorHorasDisponibles = (medicos, fecha) =>
    medicos.filter((med) => tieneHorasDisponibles(med.horarios, fecha));

export const esOtroMes = (fecha) => {
    const fechaSiguiente = new Date(
        fecha.getYear(),
        fecha.getMonth(),
        fecha.getDate() - 1
    );
    return fecha.getMonth() !== fechaSiguiente.getMonth();
};

export const esMesAnterior = (fecha) => {
    const fechaAnterior = new Date(
        fecha.getYear(),
        fecha.getMonth(),
        fecha.getDate() + 1
    );
    return fecha.getMonth() !== fechaAnterior.getMonth();
};
export const formatDateTransax = (dateString) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'UTC',
    };
    return new Date(dateString).toLocaleDateString('es-ES', options);
};
export const obtenerFechaUTC = (fecha) =>
    new Date(
        Date.UTC(
            fecha.getFullYear(),
            fecha.getMonth(),
            fecha.getDate(),
            12,
            0,
            0
        )
    );

export const obtenerHorariosDistintosPorDia = (horarios, dia) => {
    if (!horarios) return [];
    const filtrados = new Set();

    return horarios
        .filter((hora) => hora.horario.dia === dia)
        .map((hora) => {
            if (!filtrados.has(hora.horario.id)) {
                filtrados.add(hora.horario.id);
                return hora;
            }
            return null;
        })
        .filter((hora) => hora);
};

export const obtenerHorariosSeparadosPorDia = (horarios) => {
    if (!horarios) return [];
    const dias = [
        'lunes',
        'martes',
        'miercoles',
        'jueves',
        'viernes',
        'sabado',
        'domingo',
    ];

    return dias.map((dia) => horarios.filter((hora) => hora.dia === dia));
};

export const isAdmin = ({ usuario }) => !!usuario && usuario.rol === ADMIN_ROL;

export const isRecepcionista = ({ usuario }) =>
    !!usuario && usuario.rol === RECEPCIONISTA_ROL;

export const isMedico = ({ usuario }) =>
    !!usuario && usuario.rol === MEDICO_ROL;

export const estaAutenticado = ({ usuario }) => !!usuario && !!usuario.token;

export const formatearNombre = ({ usuario }) => {
    if (usuario) {
        return `${usuario.nombre} ${usuario.apellido_paterno || ''}`;
    }
    return '';
};
export const separadorMiles = (numero) =>
    numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
