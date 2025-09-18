"use client";

import { PricingTable } from "@clerk/nextjs";
import Image from "next/image";

export default function SubscriptionPage() {
  return (
    <main className="py-10 px-4 md:px-8">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Choose Your Learning Path
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Unlock the full potential of AI-powered learning with our flexible plans
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-green-400"></div>
            <span>Active Users</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-blue-400"></div>
            <span>Regular Updates</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-purple-400"></div>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Pricing Table with Custom Styling */}
      <div className="relative max-w-6xl mx-auto">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-purple-500/5 to-transparent rounded-3xl -z-10"></div>
        
        {/* Clerk Pricing Table */}
        <div className="relative backdrop-blur-sm bg-white/50 rounded-3xl p-8 shadow-xl border border-primary/10">
          <PricingTable
            appearance={{
              elements: {
                card: "bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-200 border border-primary/10",
                header: "bg-gradient-to-br from-primary/5 to-purple-500/5",
                headerTitle: "text-2xl font-bold text-primary",
                headerSubtitle: "text-muted-foreground",
                price: "text-4xl font-bold text-primary",
                pricePrefix: "text-xl text-muted-foreground",
                priceSuffix: "text-muted-foreground",
                button: "bg-primary text-white hover:bg-primary/90 transition-colors duration-200",
                featuresTitle: "text-lg font-semibold text-primary",
                feature: "text-muted-foreground",
                featureIcon: "text-green-500",
                separator: "bg-primary/10",
                footer: "bg-gradient-to-tr from-primary/5 to-purple-500/5",
                rootBox: "rounded-xl overflow-hidden",
              },
            }}
          />
        </div>

        {/* Features Grid Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-primary/10 shadow-lg">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Image src="/icons/cap.svg" alt="Education" width={24} height={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Learning</h3>
            <p className="text-muted-foreground">Personalized AI companions adapt to your learning style and pace.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-primary/10 shadow-lg">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Image src="/icons/coding.svg" alt="Practice" width={24} height={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Interactive Practice</h3>
            <p className="text-muted-foreground">Real-time feedback and practice sessions with AI companions.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-primary/10 shadow-lg">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Image src="/icons/history.svg" alt="Progress" width={24} height={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
            <p className="text-muted-foreground">Monitor your learning journey with detailed analytics and insights.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
