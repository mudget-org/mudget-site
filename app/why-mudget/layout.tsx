import { isFeatureEnabled } from '@/utils/featureFlags';
import { notFound } from 'next/navigation';

export default function WhyMudgetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // If the feature flag is disabled, return 404
  if (!isFeatureEnabled('showWhyMudgetSection')) {
    notFound();
  }

  return <>{children}</>;
}