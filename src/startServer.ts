/**
 * startServer.ts
 * express-sample-api
 *
 * Copyright © 2023年 kazu. All rights reserved.
 */

import { Express } from 'express';
import os from 'os';

export async function startServer(app: Express, port: number) {
  const IP = await networkInterface();
  app.listen(port, IP, () => {
    console.info(`Server started: http://${IP}:${port}`);
  });
}

function networkInterface(): Promise<string> {
  return new Promise((resolve, reject) => {
    const interfaces = os.networkInterfaces();
    for (const interfaceName in interfaces) {
      const iface = interfaces[interfaceName];
      if (!iface) {
        continue;
      }
      for (const alias of iface) {
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          resolve(alias.address);
          return;
        }
      }
    }
    resolve('localhost');;
  });
}