import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-4">
      <section className="text-center py-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to <span className="text-purple-500">TSModded</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Your personal gaming HQ — mods, gear, and guides all in one place.
        </motion.p>
      </section>

      <nav className="flex justify-center gap-6 text-white bg-gray-900 p-4 rounded-xl shadow-xl">
        <DropdownMenu title="Mod Managers" items={{
          "Skyrim": ["Download & Setup Guide"],
          "Minecraft": ["CurseForge Setup"]
        }} />

        <DropdownMenu title="Games" items={{
          "Skyrim": ["SkyUI", "Immersive Citizens"],
          "Minecraft": ["OptiFine", "Biomes O' Plenty"]
        }} />

        <DropdownMenu title="Gaming Parts" items={{
          "Buy": ["RTX 4080 on Amazon", "Corsair RAM"],
          "Sell": ["Old GTX 1060"]
        }} />
      </nav>

      <section className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-3">
        <Card className="bg-gray-800 text-white">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Custom Setup Guides</h2>
            <p className="text-sm text-gray-400">
              Step-by-step instructions for getting your games modded and running right.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 text-white">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Wishlist & Marketplace</h2>
            <p className="text-sm text-gray-400">
              Drag-and-drop hardware links for your dream setup or parts to sell.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 text-white">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Game-by-Game Mods</h2>
            <p className="text-sm text-gray-400">
              Organized mod libraries so you can access everything fast and easy.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

function DropdownMenu({ title, items }) {
  return (
    <div className="relative group">
      <Button variant="ghost" className="text-white flex items-center gap-1">
        {title} <ChevronDown size={16} />
      </Button>
      <div className="absolute hidden group-hover:block bg-gray-800 mt-2 rounded-lg shadow-lg z-10">
        {Object.entries(items).map(([key, subItems]) => (
          <div key={key} className="border-b border-gray-700 px-4 py-2">
            <div className="font-bold text-purple-400">{key}</div>
            {subItems.map((item, idx) => (
              <div key={idx} className="text-sm text-gray-200 hover:text-white cursor-pointer">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}