"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, User, ShieldCheck } from "lucide-react";

/**
 * Perfume Avatar Page - Publicly Accessible
 * Demonstrates a premium design for a public landing page.
 */
const PerfumeAvatarPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 pb-12 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-600 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Discover Your Signature Scent</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">
            Your Digital <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600">
              Perfume Avatar
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
            Experience the future of fragrance discovery. Our AI-driven avatar system 
            analyzes your preferences to map the perfect olfactory journey.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="/register" 
              className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-800 transition-all shadow-xl hover:shadow-gray-200"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/login" 
              className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-all"
            >
              Sign In
            </Link>
          </div>
          
          <div className="flex items-center gap-8 pt-6 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-gray-900">10k+</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Profiles</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-gray-900">4.9/5</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Rating</span>
            </div>
          </div>
        </div>

        {/* Visual Content */}
        <div className="relative group animate-in zoom-in duration-1000">
          <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500/20 to-cyan-500/20 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/50 shadow-2xl">
            <Image
              src="/perfume_avatar_bg_1773401906765.png"
              alt="Perfume Avatar Visual"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Overlay Cards */}
            <div className="absolute bottom-8 left-8 right-8 p-6 backdrop-blur-xl bg-white/70 rounded-3xl border border-white/50 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Avatar Active</p>
                  <p className="text-xs text-gray-500">Mapping olfactory profile...</p>
                </div>
                <div className="ml-auto w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Public Access",
              desc: "Anyone can explore our avatar showcase and public galleries.",
              icon: Sparkles
            },
            {
              title: "Secure Data",
              desc: "Your preferences are encrypted and only accessible via login.",
              icon: ShieldCheck
            },
            {
              title: "Dynamic Experience",
              desc: "Personalized recommendations that evolve with your tastes.",
              icon: User
            }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PerfumeAvatarPage;
