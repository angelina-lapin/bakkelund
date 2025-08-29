import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import HomePage from "./pages/HomePage";
import { useActiveSection } from "./hooks/useActiveSection";
import logo from "./assets/logo.png";

const SECTION_IDS = [
  "om-oss",
  "hytter",
  "badstuer",
  "arrangementer",
  "malekurs",
  "kontakt",
];

export default function App() {
  const activeId = useActiveSection(SECTION_IDS, 80);

  return (
    <div className="min-h-screen bg-[var(--sand)] text-gray-900">
      <Navbar logoSrc={logo} activeId={activeId} />
      <main className="py-4">
        <HomePage />
      </main>
      <footer className="mt-10 px-4">
        <SocialLinks />
        <p className="pb-8 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Bakkelund
        </p>
      </footer>
    </div>
  );
}
