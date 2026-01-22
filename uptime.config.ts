const pageConfig = {
  // Title for your status page
  title: "Mewwme's Uptime",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://meww.me/', label: 'Home' },
    { link: 'https://github.com/mewwme', label: 'GitHub' },
    { link: 'https://meww.me/support', label: 'Server Support' },
    { link: 'mailto:support-meww.me', label: 'Email Me', highlight: true },
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
      target: 'https://mewwme-website.pages.dev/',
      expectedCodes: [200],
      timeout: 30000,
      statusPageLink: 'https:/status.meww.me/',
    },
    // Webserver bot
    {
      id: 'bot_monitor',
      name: 'Discord Bot',
      method: 'GET',
      target: 'https://mewwme-website.pages.dev/',
      expectedCodes: [200],
      timeout: 30000,
      statusPageLink: 'https://discord.com/oauth2/authorize?client_id=928966154817523723',
    },
        // REST API Bot
    {
      id: 'restapi_monitor',
      name: 'RestAPI',
      method: 'GET',
      target: 'https://mewwme-website.pages.dev/',
      expectedCodes: [200],
      timeout: 30000,
      statusPageLink: 'https://status.meww.me',
    },
    // Lavalink
    {
      id: 'lavalink_monitor',
      name: 'Voice Connection',
      method: 'GET',
      target: 'http://lrmn.is-a.dev',
      timeout: 30000,
      statusPageLink: 'https://status.meww.me',
    },
    // Pterodactyl Panel
    {
      id: 'panel_monitor',
      name: 'Panel',
      method: 'GET',
      target: 'https://mewwme-website.pages.dev/',
      expectedCodes: [200],
      timeout: 30000,
      statusPageLink: 'https://status.meww.me',
    },
    // Pterodactyl Wings
    {
      id: 'server_monitor',
      name: 'Server',
      method: 'GET',
      target: 'https://hi-lrmn.is-a.dev/',
      expectedCodes: [200],
      timeout: 30000,
      statusPageLink: 'https://status.meww.me',
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
