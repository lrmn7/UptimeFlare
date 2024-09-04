const pageConfig = {
  // Title for your status page
  title: "Mewwme's Uptime",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://meww.me/', label: 'Home' },
    { link: 'https://github.com/mewwme', label: 'GitHub' },
    { link: 'https://meww.me/support', label: 'Server Support' },
    { link: 'mailto:support@meww.me', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    // Website bot
    {
      id: 'website_monitor',
      name: 'Website',
      method: 'GET',
      target: 'https://meww.me',
      expectedCodes: [200],
      timeout: 10000,
    },
    // Webserver bot
    {
      id: 'bot_monitor',
      name: 'Bot',
      method: 'GET',
      target: 'https://lastfm.meww.me',
      expectedCodes: [200],
      timeout: 10000,
    },
        // REST API Bot
    {
      id: 'restapi_monitor',
      name: 'Rest API',
      method: 'GET',
      target: 'https://restapi.meww.me/mewwme',
      expectedCodes: [200],
      timeout: 10000,
    },
    // Lavalink
    {
      id: 'lavalink_monitor',
      name: 'Voice Connection',
      method: 'TCP_PING',
      target: 'n1.is-a.fun:2555',
      timeout: 10000,
    },
    // Pterodactyl Panel
    {
      id: 'panel_monitor',
      name: 'Panel',
      method: 'GET',
      target: 'https://panel.mikoradio.com',
      expectedCodes: [200],
      timeout: 10000,
    },
    // Pterodactyl Wings
    {
      id: 'server_monitor',
      name: 'Server',
      method: 'TCP_PING',
      target: 'node.mikoradio.com:8080',
      expectedCodes: [200],
      timeout: 5000,
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
