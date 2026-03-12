import DashboardLayout from '@/components/layout/DashboardLayout';

export default function MemberLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout role="member">{children}</DashboardLayout>;
}