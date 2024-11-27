import Footer from "./_components/footer";
import Header from "./_components/header";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-svh flex-col">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
