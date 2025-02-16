//app/contact/page.tsx

import dynamic from "next/dynamic";

const ContactSection = dynamic(
  () => import("@/components/contact/ContactSection"),
);

export default function ContactPage() {
  return (
    <>
      <main className="flex flex-col bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
        <ContactSection />
      </main>
    </>
  );
}
