import { useThemeStore } from "@/store/themeStore";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Landing/HeroSection";
import Footer from "@/components/Landing/Footer";

const LandingPage = () => {
    const { theme } = useThemeStore();

    return (
        <div
            className={`relative min-h-screen ${theme}`}
            data-theme={theme === "dark" ? "bloodsphere-dark" : "bloodsphere-light"}
        >
            <Navbar />
            <HeroSection />
            <Footer />
        </div>
    );
};

export default LandingPage;