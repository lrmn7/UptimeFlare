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
  // Write KV at most every 3 minutes unless the status changed.
  kvWriteCooldownMinutes: 3,
  // Define all your monitors here
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
      expectedCodes: [304],
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
    // [Optional] apprise API server URL
    appriseApiServer: "",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    recipientUrl: "",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Jakarta",
    // [Optional] grace period in minutes before sending a notification
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
      // Handle status change event here
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // Handle ongoing incident event here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
