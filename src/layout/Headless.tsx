/**
 * page에서 사용하는 Layout 중 Login 등 Headless로 지정되는 Layout
 * Header, Footer, Sidebar 등이 포함되지 않음
 */
export default function HeadlessLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col min-h-screen">{children}</div>
}
