"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6 pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl overflow-hidden border border-white/40">
            {/* Header/Cover Gradient */}
            <div className="h-48 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 relative">
              <div className="absolute -bottom-16 left-10">
                <div className="relative w-32 h-32 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white">
                  <Image
                    src={session?.user?.image || "/blue.png"}
                    alt={session?.user?.name || "User"}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="pt-20 pb-12 px-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h1 className="text-4xl font-black text-gray-900 leading-tight">
                    {session?.user?.name}
                  </h1>
                  <p className="text-teal-600 font-bold tracking-widest uppercase text-xs mt-1">
                    Premium Fragrance Collector
                  </p>
                </div>
                <button className="bg-white border border-gray-200 text-gray-700 font-bold px-8 py-3 rounded-2xl hover:bg-gray-50 transition-all shadow-sm active:scale-95">
                  Edit Profile
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100">
                  <h3 className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    Account Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-medium">
                        Email Address
                      </span>
                      <span className="text-lg font-bold text-gray-800">
                        {session?.user?.email}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-medium">
                        Member Status
                      </span>
                      <span className="inline-flex items-center gap-2 text-lg font-bold text-gray-800">
                        <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100">
                  <h3 className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    Quick Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                      <p className="text-2xl font-black text-teal-600">12</p>
                      <p className="text-[10px] text-gray-500 font-bold uppercase">
                        Whishlist
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                      <p className="text-2xl font-black text-cyan-600">08</p>
                      <p className="text-[10px] text-gray-500 font-bold uppercase">
                        Orders
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProfilePage;
