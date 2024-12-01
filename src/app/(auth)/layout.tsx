export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex h-svh flex-col items-center justify-center">
      <div className="max-w-sm rounded bg-gray-300 p-4">{children}</div>
    </main>
  );
}
