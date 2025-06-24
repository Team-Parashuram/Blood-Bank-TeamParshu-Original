import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Globe, Users, ChevronDown, Activity, Shield, Zap } from "lucide-react";
import { useThemeStore } from "@/store/themeStore";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();
    const { theme } = useThemeStore();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationKey(prev => prev + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Heartbeat waveform
    const heartbeatPath = "M0,50 L80,50 L85,50 L90,30 L95,70 L100,10 L105,90 L110,50 L115,50 L195,50 L200,50 L205,30 L210,70 L215,10 L220,90 L225,50 L230,50 L310,50 L315,50 L320,30 L325,70 L330,10 L335,90 L340,50 L345,50 L425,50 L430,50 L435,30 L440,70 L445,10 L450,90 L455,50 L460,50 L540,50";

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0">
        
                <div className={`absolute inset-0 ${
                    theme === "light" 
                        ? "bg-gradient-to-br from-slate-50 via-white to-red-50" 
                        : "bg-slate-900"
                }`}>
                
                    <div className="absolute inset-0 pointer-events-none opacity-60">
                        <div className={`absolute inset-0 ${
                            theme === "light"
                                ? "bg-[radial-gradient(circle_at_25%_25%,rgba(239,68,68,0.1)_0%,transparent_25%),radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.1)_0%,transparent_25%)]"
                                : "bg-[radial-gradient(circle_at_25%_25%,rgba(var(--primary),0.15)_0%,transparent_25%),radial-gradient(circle_at_75%_75%,rgba(var(--primary),0.1)_0%,transparent_25%)]"
                        }`}></div>
                    </div>
                </div>

                <motion.div 
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                        theme === "light" ? "opacity-[0.03]" : "opacity-[0.05]"
                    }`}
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <div className="relative w-96 h-96">
                        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-100 h-50 rounded-lg ${
                            theme === "light" ? "bg-red-500" : "bg-primary"
                        }`}></div>
                        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-50 h-100 rounded-lg ${
                            theme === "light" ? "bg-red-500" : "bg-primary"
                        }`}></div>
                    </div>
                </motion.div>

                {theme === "light" ? (
                    <>
                        <motion.div
                        className="absolute rounded-full w-72 h-72 bg-red-200/50 top-10 left-1/4 blur-3xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        />
                        <motion.div
                        className="absolute rounded-full w-96 h-96 bg-blue-200/40 bottom-10 right-1/3 blur-3xl"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        />
                        <motion.div 
                            className="absolute w-24 h-24 rounded-full opacity-25 top-1/2 right-10 bg-gradient-to-r from-purple-200 to-indigo-200 blur-xl"
                            animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.25, 0.45, 0.25]
                            }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        />
                    </>
                ) : (
                    <>
                        <motion.div 
                            className="absolute w-32 h-32 rounded-full top-20 right-1/4 bg-gradient-to-r from-primary/20 to-primary/30 opacity-40 blur-xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.4, 0.6, 0.4]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div 
                            className="absolute w-40 h-40 rounded-full bottom-20 left-1/4 bg-gradient-to-r from-primary/10 to-primary/20 opacity-30 blur-xl"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                        <motion.div 
                            className="absolute w-24 h-24 rounded-full top-1/2 right-10 bg-gradient-to-r from-primary/15 to-primary/25 opacity-35 blur-xl"
                            animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.35, 0.55, 0.35]
                            }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        />
                    </>
                )}

                <div className="absolute inset-0 overflow-hidden">
                    {Array.from({length: 20}).map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute w-1 h-1 rounded-full ${
                                theme === "light" ? "bg-red-300" : "bg-primary"
                            } opacity-30`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [-20, -40, -20],
                                opacity: [0.3, 0.8, 0.3],
                                scale: [1, 1.5, 1]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 2
                            }}
                        />
                    ))}
                </div>
            </div>
            <motion.section
                className={`relative z-10 min-h-screen hero flex flex-col items-center justify-center px-6 ${
                    theme === "light" ? "text-gray-900" : "text-white"
                }`}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="max-w-6xl mx-auto mt-10 text-center">
                    <svg 
                        height="200" 
                        viewBox="0 0 540 100"
                        className="w-full max-w-screen"
                    >
                        <path
                            key={animationKey}
                            d={heartbeatPath}
                            fill="none"
                            stroke="#ef4444"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{
                                strokeDasharray: '1000',
                                strokeDashoffset: '1000',
                                animation: 'drawHeartbeat 2s ease-in-out infinite'
                            }}
                        />
                    </svg>

                    <style>{`
                        @keyframes drawHeartbeat {
                            0% {
                                stroke-dashoffset: 1000;
                            }
                            100% {
                                stroke-dashoffset: 0;
                            }
                        }
                    `}</style>

                    <motion.div variants={itemVariants} className="mb-6">
                        <h1 className={`text-6xl md:text-7xl font-bold leading-tight mb-4 ${
                            theme === "light" 
                                ? "bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent"
                                : "bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent"
                        }`}>
                            Dhvani
                        </h1>
                        <motion.div 
                            className="relative inline-block"
                            whileHover={{ scale: 1.02 }}
                        >
                            <h2 className={`text-2xl md:text-3xl font-semibold mb-2 ${
                                theme === "light" ? "text-gray-700" : "text-slate-300"
                            }`}>
                                Your Comprehensive Healthcare Companion
                            </h2>
                            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full ${
                                theme === "light" 
                                    ? "bg-gradient-to-r from-red-500 to-pink-500" 
                                    : "bg-gradient-to-r from-primary to-primary/70"
                            }`}></div>
                        </motion.div>
                    </motion.div>

                    {/* Enhanced Hindi Tagline */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <p className={`text-2xl md:text-3xl font-medium mb-2 ${
                            theme === "light" ? "text-red-600" : "text-primary"
                        }`}>
                            ख़्याल ही असली इलाज है
                        </p>
                        <p className={`text-lg italic ${
                            theme === "light" ? "text-gray-600" : "text-slate-400"
                        }`}>
                            "Care is the real cure"
                        </p>
                    </motion.div>

                    {/* Feature Pills */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-3 mb-10"
                    >
                        {[
                            { icon: Activity, text: "AI Diagnostics" },
                            { icon: Heart, text: "Health Tracking" },
                            { icon: Shield, text: "Secure Records" },
                            { icon: Zap, text: "Real-time Alerts" }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className={`flex items-center gap-2 backdrop-blur-sm rounded-full border shadow-sm px-3 py-2 md:px-4 md:py-2 ${
                                    theme === "light"
                                        ? "bg-white/60 border-gray-200"
                                        : "bg-slate-900 border-slate-700"
                                }`}
                                whileHover={{ 
                                    scale: 1.05, 
                                    backgroundColor: theme === "light" ? "rgba(239, 68, 68, 0.1)" : "rgba(var(--primary), 0.1)"
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <feature.icon className={`w-4 h-4 ${theme === "light" ? "text-red-500" : "text-primary"}`} />
                                <span className={`text-sm font-medium ${
                                    theme === "light" ? "text-gray-700" : "text-slate-300"
                                }`}>{feature.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Enhanced CTA Buttons */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row"
                    >
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        className={`relative group px-8 py-6 text-lg font-semibold text-white transition-all duration-300 ease-out rounded-xl shadow-lg overflow-hidden ${
                                            theme === "light"
                                                ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                                                : "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                                        }`}
                                    >
                                        <div className="relative z-10 flex items-center gap-2">
                                            <span>Get Started Today</span>
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                <ArrowRight className="w-5 h-5" />
                                            </motion.div>
                                        </div>
                                        <div className={`absolute inset-0 -z-10 blur-xl group-hover:blur-2xl transition-all duration-300 ${
                                            theme === "light" 
                                                ? "bg-gradient-to-r from-red-500/20 to-red-600/20"
                                                : "bg-gradient-to-r from-primary/20 to-primary/30"
                                        }`}></div>
                                    </Button>
                                </motion.div>
                            </DialogTrigger>
                            <DialogContent
                                className={`z-50 max-w-md mx-auto border shadow-xl ${
                                    theme === "light"
                                        ? "bg-white border-gray-100"
                                        : "bg-slate-900 border-slate-800"
                                } rounded-xl`}
                            >
                                <DialogHeader>
                                    <DialogTitle
                                        className={`flex items-center gap-2 text-2xl font-bold ${
                                            theme === "light" ? "text-gray-900" : "text-white"
                                        }`}
                                    >
                                        <Heart
                                            className={`w-6 h-6 ${theme === "light" ? "text-red-500" : "text-primary"}`}
                                        />
                                        Choose Your Role
                                    </DialogTitle>
                                    <DialogDescription
                                        className={`mt-2 ${theme === "light" ? "text-gray-600" : "text-slate-400"}`}
                                    >
                                        Select how you would like to continue 
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-6">
                                    {[
                                        {
                                            icon: Users,
                                            label: "User",
                                            description: "Login to view dashboard",
                                            path: "/user/dashboard",
                                        },
                                        {
                                            icon: Globe,
                                            label: "Organisation",
                                            description: "Manage blood bank and more",
                                            path: "/organisation/dashboard",
                                        },
                                    ].map((role) => (
                                        <button
                                            key={role.label}
                                            onClick={() => handleNavigation(role.path)}
                                            className={`flex items-center justify-between px-4 py-3 transition-all duration-300 border rounded-lg ${
                                                theme === "light"
                                                    ? "bg-gray-50 hover:bg-gray-100 border-gray-200 hover:border-red-500/50"
                                                    : "bg-slate-800/50 hover:bg-slate-800 border-slate-700 hover:border-primary/50"
                                            } group`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`p-2 rounded-full ${
                                                        theme === "light"
                                                            ? "bg-red-500/10 text-red-500"
                                                            : "bg-primary/10 text-primary"
                                                    }`}
                                                >
                                                    <role.icon className="w-5 h-5" />
                                                </div>
                                                <div className="text-left">
                                                    <div
                                                        className={`font-semibold ${
                                                            theme === "light"
                                                                ? "text-gray-900 group-hover:text-red-500"
                                                                : "text-white group-hover:text-primary"
                                                        }`}
                                                    >
                                                        {role.label}
                                                    </div>
                                                    <div
                                                        className={`text-sm ${theme === "light" ? "text-gray-600" : "text-slate-400"}`}
                                                    >
                                                        {role.description}
                                                    </div>
                                                </div>
                                            </div>
                                            <ArrowRight
                                                className={`w-5 h-5 transition-transform ${
                                                    theme === "light"
                                                        ? "text-gray-400 group-hover:text-red-500"
                                                        : "text-slate-400 group-hover:text-primary"
                                                } group-hover:translate-x-1`}
                                            />
                                        </button>
                                    ))}
                                </div>
                                <DialogFooter
                                    className={`pt-4 border-t ${theme === "light" ? "border-gray-200" : "border-slate-800"}`}
                                >
                                    <DialogTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className={`${
                                                theme === "light"
                                                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                                            }`}
                                        >
                                            Close
                                        </Button>
                                    </DialogTrigger>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                        <motion.a
                            href="http://localhost:3001"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-8 py-4 font-semibold rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 ${
                                theme === "light"
                                    ? "bg-white/80 backdrop-blur-sm text-gray-700 border-gray-200 hover:border-red-300"
                                    : "bg-slate-800/60 backdrop-blur-sm text-white border-slate-700 hover:border-primary/50"
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <span>Explore Features</span>
                                <motion.div
                                    animate={{ y: [0, -3, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <ChevronDown className={`w-5 h-5 transition-colors ${
                                        theme === "light" ? "group-hover:text-red-500" : "group-hover:text-primary"
                                    }`} />
                                </motion.div>
                            </div>
                        </motion.a>
                    </motion.div>
                </div>
            </motion.section>
            {isDialogOpen && <div className="fixed inset-0 z-40 backdrop-blur-sm" aria-hidden="true" />}
        </div>
    );
};

export default HeroSection;