export default function LoginPage({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="flex min-h-screen w-full flex-row">{children}</div>
    </main>
  );
}
