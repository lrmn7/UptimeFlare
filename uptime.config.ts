const pageConfig = {
  // Title for your status page
  title: "Mewwme's Uptime",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://mewwme.is-a.fun/', label: 'Home' },
    { link: 'https://github.com/mewwme', label: 'GitHub' },
    { link: 'https://mewwme.is-a.fun/support', label: 'Server Support' },
    { link: 'mailto:support-mewwme@is-a.fun', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    // Website bot
    {
      id: 'website_monitor',
      name: `Mewwme's Website`,
      method: 'GET',
      target: 'https://mewwme.is-a.fun',
      expectedCodes: [200],
      timeout: 30000,
      statusPageLink: 'https://mewwme.is-a.fun/',
    },
    // Webserver bot
    {
      id: 'bot_monitor',
      name: 'Discord Bot',
      method: 'GET',
      target: 'https://ws-mewwme.is-a.fun',
      expectedCodes: [200],
      timeout: 30000,
      statusPageLink: 'https://discord.com/oauth2/authorize?client_id=928966154817523723',
    },
        // REST API Bot
    {
      id: 'restapi_monitor',
      name: 'RestAPI',
      method: 'GET',
      target: 'http://104.219.236.211:7006/',
      expectedCodes: [200],
      timeout: 30000,
      statusPageLink: 'https://status-mewwme.is-a.fun',
    },
    // Lavalink
    {
      id: 'lavalink_monitor',
      name: 'Voice Connection',
      method: 'TCP_PING',
      target: '104.219.236.211:7034',
      timeout: 30000,
      statusPageLink: 'https://status-mewwme.is-a.fun/support',
    },
    // Pterodactyl Panel
    {
      id: 'panel_monitor',
      name: 'Panel',
      method: 'GET',
      target: 'https://house.catfein.co.id/',
      expectedCodes: [200],
      timeout: 30000,
      statusPageLink: 'https://status-mewwme.is-a.fun/support',
    },
    // Pterodactyl Wings
    {
      id: 'server_monitor',
      name: 'Server',
      method: 'GET',
      target: 'https://catfein.co.id/',
      expectedCodes: [200],
      timeout: 30000,
      statusPageLink: 'https://status-mewwme.is-a.fun/support',
    },
  ],
  notification: {
    appriseApiServer: "",
    recipientUrl: "",
    timeZone: "Asia/Jakarta",
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
    },
  },
}
export { pageConfig, workerConfig }
