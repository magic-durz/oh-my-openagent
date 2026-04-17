import type { InstallConfig } from "../types"
import { generateModelConfig } from "../model-fallback"
import { SisyphusAgentConfigSchema } from "../../config/schema/sisyphus-agent"

export function generateOmoConfig(installConfig: InstallConfig): Record<string, unknown> {
  const config: Record<string, unknown> = generateModelConfig(installConfig)
  if (installConfig.keepOpencodeModes) {
    const existingParsed = SisyphusAgentConfigSchema.safeParse(config.sisyphus_agent)
    const existing = existingParsed.success ? existingParsed.data : {}
    config.sisyphus_agent = { ...existing, keep_opencode_modes: true }
  }
  return config
}
