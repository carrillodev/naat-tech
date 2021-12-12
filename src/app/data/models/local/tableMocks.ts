import { NotificationSentModel, NotificationToSendModel } from "../response/notifications/notificationsResponse";
import { WorkTeamListResponse } from "../response/workTeam/workTeamResponse";

export const WORK_TEAM: WorkTeamListResponse[] = [
  {
    area: 'Producción',
    leader: 'brandon@na-at.com.mx',
    collaborators: '10',
    activities: '10'
  },
  {
    area: 'Diseño',
    leader: 'felipe@na-at.com.mx',
    collaborators: '10',
    activities: '10'
  },
  {
    area: 'UX/UI',
    leader: 'francisco@na-at.com.mx',
    collaborators: '10',
    activities: '10'
  },
  {
    area: 'Testing',
    leader: 'fernando@na-at.com.mx',
    collaborators: '10',
    activities: '10'
  },
  {
    area: 'Ventas',
    leader: 'jonathan@na-at.com.mx',
    collaborators: '10',
    activities: '10'
  },
  {
    area: 'Recursos Humanos',
    leader: 'mariet@na-at.com.mx',
    collaborators: '10',
    activities: '10'
  },
  {
    area: 'Finanzas',
    leader: 'oscar@na-at.com.mx',
    collaborators: '10',
    activities: '10'
  },
  {
    area: 'Marketing',
    leader: 'uriel@na-at.com.mx',
    collaborators: '10',
    activities: '10'
  },
  {
    area: 'Desarrollo',
    leader: 'victor@na-at.com.mx',
    collaborators: '10',
    activities: '10'
  }
];

export const NOTIFICATIONS_TO_SEND: NotificationToSendModel[] = [
  {
    title: '¡Registra tus horas!',
    description: 'Ya casi acaba el día, no olvides registrar tus horas.',
    programmed: '2021-11-14T12:32:21.66',
    concurrent: 'Diario'
  },
  {
    title: 'Actividades semenales',
    description: 'Tenemos una nueva agenda para esta semana, conócela.',
    programmed: '2021-11-05T04:27:15.827',
    concurrent: 'Semanal'
  },
  {
    title: 'Sesión técnica',
    description: '¿Ya te registraste para las sesiones de seguridad?',
    programmed: '2021-10-28T04:55:34.54',
    concurrent: 'Única vez'
  },
];

export const NOTIFICATIONS_SENT: NotificationSentModel[] = [
  {
    title: 'Actividades semanales',
    description: '¿Ya te registraste para las sesiones de seguridad?',
    addedBy: 'cchavarria@gmail.com',
    sent: '2021-10-28T04:27:20.196'
  },
  {
    title: 'Actividades semanales',
    description: '¿Ya te registraste para las sesiones de seguridad?',
    addedBy: 'vfuentes@gmail.com',
    sent: '2021-10-28T01:36:44.905'
  },
  {
    title: 'Actividades semanales',
    description: '¿Ya te registraste para las sesiones de seguridad?',
    addedBy: 'lmartinez@gmail.com',
    sent: '2021-10-28T01:33:35.989'
  },
  {
    title: 'Actividades semanales',
    description: '¿Ya te registraste para las sesiones de seguridad?',
    addedBy: 'dpuga@gmail.com',
    sent: '2021-10-28T00:54:46.145'
  }
];