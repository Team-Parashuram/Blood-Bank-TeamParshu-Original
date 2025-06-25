"use client"
import { motion } from "framer-motion"
import { useThemeStore } from "@/store/themeStore"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, Heart, Shield, Droplet, MapPin, FileText } from "lucide-react"

const FeaturesSection = () => {
    const { theme } = useThemeStore()

    const features = [
        {
        icon: Activity,
        title: "AI Disease Detection",
        description:
            "Advanced AI algorithms analyze your symptoms and medical history to provide accurate health assessments.",
        color: "text-green-500",
        bgColor: theme === "light" ? "bg-green-50" : "bg-green-500/10",
        },
        {
        icon: Heart,
        title: "Health Monitoring",
        description: "Track your vital signs, medications, and health metrics with our comprehensive monitoring system.",
        color: "text-red-500",
        bgColor: theme === "light" ? "bg-red-50" : "bg-red-500/10",
        },
        {
        icon: Droplet,
        title: "Blood Bank Network",
        description: "Connect with blood banks nationwide. Check availability and request blood donations seamlessly.",
        color: "text-blue-500",
        bgColor: theme === "light" ? "bg-blue-50" : "bg-blue-500/10",
        },
        {
        icon: MapPin,
        title: "Hospital Locator",
        description: "Find nearby hospitals, clinics, and healthcare facilities with real-time availability information.",
        color: "text-purple-500",
        bgColor: theme === "light" ? "bg-purple-50" : "bg-purple-500/10",
        },
        {
        icon: FileText,
        title: "Medical Reports",
        description:
            "Securely store and manage all your medical reports, test results, and health documents in one place.",
        color: "text-orange-500",
        bgColor: theme === "light" ? "bg-orange-50" : "bg-orange-500/10",
        },
        {
        icon: Shield,
        title: "Data Security",
        description: "Your health data is protected with enterprise-grade encryption and privacy compliance.",
        color: "text-cyan-500",
        bgColor: theme === "light" ? "bg-cyan-50" : "bg-cyan-500/10",
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
        },
    }

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
        },
    }

    return (
        <section
        className={`py-16 md:py-24 ${theme === "light" ? "bg-gradient-to-b from-white to-gray-50" : "bg-slate-900"}`}
        >
        <div className="container px-4 mx-auto md:px-6">
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16 text-center"
            >
            <motion.div variants={itemVariants}>
                <h2
                className={`text-3xl md:text-5xl font-bold mb-4 ${
                    theme === "light"
                    ? "bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent"
                }`}
                >
                Comprehensive Healthcare Solutions
                </h2>
                <p
                className={`text-lg md:text-xl max-w-3xl mx-auto ${
                    theme === "light" ? "text-gray-600" : "text-slate-300"
                }`}
                >
                Experience the future of healthcare with our AI-powered platform designed to make quality healthcare
                accessible to everyone.
                </p>
            </motion.div>
            </motion.div>

            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
            {features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                <Card
                    className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    theme === "light"
                        ? "bg-white border-gray-200 hover:border-gray-300"
                        : "bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-primary/50"
                    }`}
                >
                    <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className={`text-xl font-semibold mb-3 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                        {feature.title}
                    </h3>
                    <p className={`${theme === "light" ? "text-gray-600" : "text-slate-300"}`}>{feature.description}</p>
                    </CardContent>
                </Card>
                </motion.div>
            ))}
            </motion.div>

            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="mt-16 text-center"
            >
            <Button
                className={`px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 ${
                theme === "light"
                    ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                    : "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-content"
                }`}
            >
                Explore All Features
            </Button>
            </motion.div>
        </div>
        </section>
    )
}

export default FeaturesSection
