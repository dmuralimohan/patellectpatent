import React from 'react';
import { PenTool, Lightbulb, Globe, Users, Building } from "lucide-react"

function Blogs() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
                <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Empowering Innovation Through Patents
                </h2>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                    Helping innovators, startups, MSMEs, and students transform their
                    creativity into protected intellectual property that drives growth
                    and progress.
                </p>
                </div>
            </section>

            {/* Content Section */}
            <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
                {/* Who We Are */}
                <section>
                <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                    <Users className="w-5 h-5 text-indigo-600" />
                    Who We Are
                </h3>
                <p>
                    Patellect IP Solutions is a patent services firm dedicated to
                    providing end-to-end IP solutions across India and beyond. From
                    drafting and filing patents to guiding inventors on IP strategy, we
                    ensure your innovations are protected and recognized.
                </p>
                </section>

                {/* What We Do */}
                <section>
                <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                    <PenTool className="w-5 h-5 text-indigo-600" />
                    What We Do
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                    <strong>Patent Drafting & Filing –</strong> Helping inventors
                    secure strong patents with clear, precise drafting.
                    </li>
                    <li>
                    <strong>Patent Searches & Analysis –</strong> Checking novelty,
                    freedom-to-operate, and competitive landscapes.
                    </li>
                    <li>
                    <strong>IP Awareness Programs –</strong> Conducting sessions for
                    students, researchers, and startups to spread knowledge about
                    patents.
                    </li>
                    <li>
                    <strong>Support for Startups & MSMEs –</strong> Guiding small
                    businesses in leveraging patents to gain market advantage and
                    attract funding.
                    </li>
                    <li>
                    <strong>International Patent Support –</strong> Assisting clients
                    who want protection beyond India.
                    </li>
                </ul>
                </section>

                {/* Why Students & MSMEs */}
                <section>
                <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                    <Lightbulb className="w-5 h-5 text-indigo-600" />
                    Why We Focus on Students & MSMEs
                </h3>
                <p className="mb-4">
                    <strong>Students:</strong> Many innovative ideas stay within
                    classrooms and labs. We aim to bridge the gap by mentoring students
                    on how to file their first patent and showcase their talent to the
                    world.
                </p>
                <p>
                    <strong>MSMEs & Startups:</strong> Protecting innovation gives
                    smaller companies a competitive edge and builds credibility with
                    investors and customers.
                </p>
                </section>

                {/* Vision */}
                <section>
                <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                    <Globe className="w-5 h-5 text-indigo-600" />
                    Our Vision
                </h3>
                <p>
                    To create a culture of innovation and IP awareness in India, where
                    every inventor—from a student in a college lab to an entrepreneur
                    building a startup—feels confident that their ideas are secure and
                    valued.
                </p>
                </section>

                {/* Commitment */}
                <section>
                <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                    <Building className="w-5 h-5 text-indigo-600" />
                    Our Commitment
                </h3>
                <p>
                    Innovation should never go unnoticed. At Patellect IP Solutions, we
                    stand as a partner in your growth journey, ensuring that your
                    inventions not only stay protected but also contribute to improving
                    technology and society.
                </p>
                </section>
            </main>
        </div>
    )
}

export default Blogs;