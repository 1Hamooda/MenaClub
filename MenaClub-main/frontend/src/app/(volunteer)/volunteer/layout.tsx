import DashboardLayout from '@/components/layout/DashboardLayout';

export default function VolunteerLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout role="volunteer">{children}</DashboardLayout>;
}