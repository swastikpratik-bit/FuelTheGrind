import Link from 'next/link';
import React from 'react';

function About() {
  console.log(process.env.NEXTAUTH_SECRET);

  return (
    <div className="w-full bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#3333ff90] to-blue-600 bg-clip-text text-transparent">
            Fuel the Grind
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Empowering creators through the power of coffee and community support
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#3333ff90]">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              At Fuel the Grind, we believe in the power of community support to drive creativity and innovation. We've created a platform that makes it easy for supporters to fuel their favorite creators' coffee-driven endeavors, one cup at a time.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-2xl">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#ffffff]">10K+</div>
                <div className="text-gray-400">Creators</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#ffffff]">100K+</div>
                <div className="text-gray-400">Coffees Shared</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#ffffff]">50+</div>
                <div className="text-gray-400">Countries</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#ffffff]">$1M+</div>
                <div className="text-gray-400">Support Given</div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="space-y-12 mb-20">
          <h2 className="text-3xl font-bold text-center text-[#3333ff90]">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl space-y-4">
              <div className="w-12 h-12 bg-[#33f]/20 rounded-full flex items-center justify-center text-[#ffffff90] text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Create Your Page</h3>
              <p className="text-gray-400">
                Set up your personalized page in minutes and start accepting support from your community.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl space-y-4">
              <div className="w-12 h-12 bg-[#33f]/20 rounded-full flex items-center justify-center text-[#ffffff90] text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">Share With Supporters</h3>
              <p className="text-gray-400">
                Share your unique link with your audience across social media and your content platforms.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl space-y-4">
              <div className="w-12 h-12 bg-[#33f]/20 rounded-full flex items-center justify-center text-[#ffffff90] text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">Receive Support</h3>
              <p className="text-gray-400">
                Get support through coffee purchases and meaningful messages from your community.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center text-[#3333ff90]">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold">Community First</h3>
              <p className="text-gray-400">
                We believe in fostering meaningful connections between creators and their supporters.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold">Transparency</h3>
              <p className="text-gray-400">
                Clear, honest, and straightforward support system with no hidden fees.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold">Creator Success</h3>
              <p className="text-gray-400">
                Dedicated to helping creators thrive and achieve their creative goals.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold">Simple & Effective</h3>
              <p className="text-gray-400">
                Easy-to-use platform that puts the focus on creator-supporter relationships.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Fuel Your Journey?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of creators who are already receiving support through Fuel the Grind.
          </p>
          <Link href={"/login"}>
          <button className="bg-[#3333ff90] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
            Create Your Page
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;