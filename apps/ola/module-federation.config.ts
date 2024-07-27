import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ola',
  exposes: {
    './Routes': 'apps/ola/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
