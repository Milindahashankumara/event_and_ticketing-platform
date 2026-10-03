export const SERVICES = {
  API_GATEWAY: 'api-gateway',
  AUTH_SERVICE: 'auth-service',
  USER_SERVICE: 'user-service',
  EVENTS_SERVICE: 'events-service',
  TICKETS_SERVICE: 'tickets-service',
  PAYMENTS_SERVICE: 'payments-service',
  NOTIFICATIONS_SERVICE: 'notifications-service',
} as const;

export const SERVICE_PORTS = {
  API_GATEWAY: 3000,
  AUTH_SERVICE: 3001,
  USER_SERVICE: 3002,
  EVENTS_SERVICE: 3003,
  TICKETS_SERVICE: 3004,
  PAYMENTS_SERVICE: 3005,
  NOTIFICATIONS_SERVICE: 3006,
} as const;
