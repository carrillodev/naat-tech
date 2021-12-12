export const LOGIN = {
  TITLE: 'Fábrica de talento',
  DESCRIPTION: 'Inicia sesión con tu cuenta NAAT'
};

export const MENU = {
  WELCOME_TITLE: 'Hola,',
  DEFAULT_USER: 'Usuario',
  ITEMS: [
    { TITLE: 'Proyectos', PATH_PAGE: 'proyectos', ICON: 'description' },
    { TITLE: 'Equipos de trabajo', PATH_PAGE: 'equipos', ICON: 'groups' },
    { TITLE: 'Actividades', PATH_PAGE: 'actividades', ICON: 'list' },
    { TITLE: 'Noticias', PATH_PAGE: 'noticias', ICON: 'newspaper' },
    { TITLE: 'Clientes', PATH_PAGE: 'clientes', ICON: 'crop_free' },
    { TITLE: 'Usuarios', PATH_PAGE: 'usuarios', ICON: 'account_circle' },
    { TITLE: 'Notificaciones', PATH_PAGE: 'notificaciones', ICON: 'sms' },
  ],
};

export const PROJECTS = {
  TITLE: 'Proyectos',
  TABLE_HEADERS: [
    'Cliente', 'Proyecto', 'Horas invertidas', 'Detalle', 'Estatus', 'Acciones'
  ],
  SUBMENU: { 
    TITLE_DETAIL: 'Detalle proyecto',
    ROUTE_PROJECTS: '../proyectosPrincipal',
    ROUTE_DETAIL: '../detalleProyecto', 
    TITLE_ACTIVITY: 'Actividades', 
    CLIENT: 'Cliente', 
    PROJECT: 'Proyecto', 
    TOTAL_HOURS: 'Horas totales',
    COLLABORATORS: 'Colaboradores', 
  },
};

export const WORK_TEAM = {
  TITLE: 'Equipos de trabajo',
  TABLE_HEADERS: ['Área', 'Líder', 'Colaboradores', 'Actividades', 'Detalle']
};

export const ACTIVITIES = {
  TITLE: 'Actividades',
  TABLE_HEADERS: ['Colaborador', 'Área', 'Proyectos en el mes', 'Horas en el mes', 'Detalle']
}
export const NEWS = {
  TITLE: 'Noticias',
  TABLE_HEADERS: ['Noticia', 'Título', 'Autor', 'Fecha de publicación', 'Acciones'],
  TABS: {
    ACTIVE: 'Activas',
    DRAFTS: 'Borradores',
    SUSPENDED: 'Suspendidas'
  }
}
export const CLIENTS = {
  TITLE: 'Clientes',
  TABLE_HEADERS: ['Cliente', 'Fecha de registro', 'Agregado por', 'Proyectos', 'Detalle']
}
export const USERS = {
  TITLE: 'Usuarios',
  TABLE_HEADERS: ['Nombre', 'Correo', 'Agregado', 'Permisos', 'Estatus', 'Acciones']
}
export const NOTIFICATIONS = {
  TITLE: 'Notificaciones',
  TITLE_TABLE_ONE: 'POR ENVIAR',
  TABLE_HEADERS_ONE: ['Titulo', 'Descripción', 'Programado', 'Concurrente', 'Detalles', 'Acciones'],
  TITLE_TABLE_TWO: 'ENVIADOS',
  TABLE_HEADERS_TWO: ['Titulo', 'Descripción', 'Agregado por', 'Enviado', 'Acciones']
}

export const DIALOG_PROJECTS = {
  TITLE: 'Agregar proyecto',
  CLIENT: 'Cliente',
  PROJECT_NAME: 'Nombre del proyecto'
}

export const INPUTS = {
  SEARCH: 'Buscar',
  SEARCH_PROJECT: 'proyecto',
  SEARCH_NEW: 'noticia',
  SEARCH_USERS: 'usuarios',
  USER_EMAIL: 'Correo',
  USER_PASSWORD: 'Contraseña',
};

export const BUTTONS = {
  LOGIN_ACTION: 'Iniciar sesión',
  ACTIONS_INACTIVE: 'Suspender',
  ACTIONS_ACTIVE: 'Activar',
  VIEW: 'Ver',
  ADD_PROJECT: '+ Agregar proyecto',
  ADD_CLIENT: '+ Agregar cliente',
  ADD_USER: '+ Agregar usuario',
  ADD_NOTIFICATION: '+ Agregar notificación',
  ADD_NEWS: '+ Agregar noticia',
  ADD: 'Agregar',
  ADD_MORE: 'Agregar otro',
  OK: 'Ok',
  DELETE_INACTIVE: 'Suspender | Eliminar',
  LOGOUT: 'Cerrar sesión',
  PUBLISH: 'Publicar',
  SAVE_DRAFT: 'Guardar borrador'
}

export const STATUS = {
  ACTIVE: 'Activado',
  INACTIVE: 'Suspendido'
}

export const ERROR_MESSAGES = {
  PROJECT_LIST_COMPLETE: 'No puedes agregar otro proyecto, sólo se permite la carga de 5 proyectos nuevos.',
  INPUT_INVALID_FORMAT: 'No se permite el uso de caracteres especiales y números.',
  INVALID_FILE_FORMAT: 'Formato de archivo invalido, sólo se permite la carga de imagenes JPG o PNG.',
  BAD_REQUEST: 'Hubo una falla al conectarse al servidor, porfavor vuelve a intentarlo.',
  BAD_INSERT: 'Lo sentimos, no se pudo agregar el elemento de forma satisfactoria',
  INVALID_SCREEN: 'El formato de pantalla no es válido para la visualización del contenido, prueba en un dispositivo diferente'
}

export const DIALOG_WORK_TEAMS = {
  TITLE: 'Agregar equipo de trabajo',
  SECOND_TITLE: 'Colaboradores',
  AREA: 'Área',
  EMAIL_LEAD: 'Correo electrónico del líder',
  ADD_COLLABORATORS: 'Agregar colaboradores',
  ADD_ACTIVITIES: 'Agregar las actividades',
  ADDED_COLLABORATORS: 'Colaboradore agregados',
  ADDED_ACTIVITIES: 'Actividades agregadas'
};

export const DIALOG_CLIENT = {
  TITLE: 'Agregar cliente',
  CLIENT_NAME: 'Cliente'
};

export const DIALOG_NOTIFICATION = {
  TITLE: 'Agregar notificación',
  TITLE_NOT: 'Título (16 caracteres máximo)',
  DESCRIPTION: 'Descripción (27 caracteres máximo)',
  TYPE: 'Tipo',
  DATE_NOT: 'Fecha',
  TIME_NOT: 'Hora'
};

export const DIALOG_NEWS = {
  TITLE: 'Agregar noticia',
  TITLE_NEWS: 'Título',
  DESCRIPTION: 'Descripción',
  IMG_THUMB_TITLE: 'Thumb',
  IMG_PRINCIPAL_TITLE: 'Imagen principal',
  IMG_DESCRIPTION_UPLOAD: 'Sube',
  IMG_DESCRIPTION: 'o arrastra la imagen formato .PNG .JPG',
  IMG_SIZE_SM: '166px de ancho máximo',
  IMG_SIZE_L: '656px de ancho máximo'
};