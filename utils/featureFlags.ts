// Feature flags configuration
export const featureFlags = {
  // Show Why Mudget section and pages 
  showWhyMudgetSection: true,
  
  // Individual competitor comparison pages
  showVsMint: false,
  showVsYnab: false,
  showVsEverydollar: false,
  showVsPocketguard: false,
  showVsSpreadsheets: true,
  
  // Spreadsheet comparison page sections
  showSpreadsheetSuccessStory: false,
  showSpreadsheetMobileComparison: false,
  
  // Pricing page
  showPricingPage: true,
  
  // Add other feature flags here as needed
  // showNewCalculator: false,
} as const;

// Helper function to check if a feature is enabled
export function isFeatureEnabled(flag: keyof typeof featureFlags): boolean {
  return featureFlags[flag];
}