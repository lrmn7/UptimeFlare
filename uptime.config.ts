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
      name: `Mewwme's Website`,
      method: 'GET',
      target: 'https://meww.me',
      expectedCodes: [200],
      timeout: 30000,
      statusPageLink: 'https://meww.me',
    },
    // Webserver bot
    {
      id: 'bot_monitor',
      name: 'Discord Bot',
      method: 'TCP_PING',
      target: '45.144.225.88:25565',
      timeout: 30000,
      statusPageLink: 'https://discord.com/oauth2/authorize?client_id=928711702596423740',
    },
        // REST API Bot
    {
      id: 'restapi_monitor',
      name: 'RestAPI',
      method: 'TCP_PING',
      target: '45.144.225.88:25567',
      timeout: 30000,
      statusPageLink: 'https://meww.me',
    },
    // Lavalink
    {
      id: 'lavalink_monitor',
      name: 'Voice Connection',
      method: 'TCP_PING',
      target: '45.144.225.88:2555',
      timeout: 30000,
      statusPageLink: 'https://meww.me/support',
    },
    // Pterodactyl Panel
    {
      id: 'panel_monitor',
      name: 'Panel',
      method: 'TCP_PING',
      target: '45.144.225.88:8080',
      timeout: 30000,
      statusPageLink: 'https://meww.me/support',
    },
    // Pterodactyl Wings
    {
      id: 'server_monitor',
      name: 'Server',
      method: 'TCP_PING',
      target: '45.144.225.88:8080',
      expectedCodes: [200],
      timeout: 30000,
      statusPageLink: 'https://meww.me/support',
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
