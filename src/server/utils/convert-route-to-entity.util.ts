const mapping: Record<string, string> = {
  academies: 'academy',
  events: 'event',
  performances: 'performance',
  players: 'player',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
