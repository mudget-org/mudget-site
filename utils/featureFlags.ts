// Feature flags configuration
export const featureFlags = {
  // Hide Why Mudget section and pages for now - can be enabled later for SEO
  showWhyMudgetSection: false,
  
  // Add other feature flags here as needed
  // showPricingSection: true,
  // showNewCalculator: false,
} as const;

// Helper function to check if a feature is enabled
export function isFeatureEnabled(flag: keyof typeof featureFlags): boolean {
  return featureFlags[flag];
}