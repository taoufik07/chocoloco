import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui, setupDev } from "tamagui";

// Hold down Option or Alt for a second to see some helpful visuals
setupDev({
  visualizer: true,
});

export const config = createTamagui(defaultConfig);

export type Conf = typeof config;

declare module "tamagui" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
