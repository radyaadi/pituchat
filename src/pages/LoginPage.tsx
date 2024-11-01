export default function LoginPage({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="flex min-h-screen flex-row">{children}</div>
    </main>
  );
}
