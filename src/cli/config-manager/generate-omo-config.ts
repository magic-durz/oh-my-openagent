import type { InstallConfig } from "../types"
import { generateModelConfig } from "../model-fallback"

export function generateOmoConfig(installConfig: InstallConfig): Record<string, unknown> {
  const config: Record<string, unknown> = generateModelConfig(installConfig)
  if (installConfig.keepOpencodeModes) {
    config.sisyphus_agent = { keep_opencode_modes: true }
  }
  return config
}
