
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactPage from "@/components/contact/ContactPage";

export const metadata = {
  title: "Contact | SHAMS Technology",
  description:
    "Get in touch with SHAMS Technology. Tell us about your website, web application, e-commerce, or digital design project.",
};

export default function ContactRoute() {
  return (
    <main
      dir="ltr"
      className="min-h-screen bg-shams-background text-shams-text"
    >
      <Header />

      <ContactPage />

      <Footer />
    </main>
  );
}
