"use client";

import Link from "next/link"
import { ArrowRight, Download, Github } from "lucide-react"
import { AsciiArt } from "./ascii-art"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white font-mono">
      <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="text-white">[ </span>
              <span className="text-white">Look</span>
              <span className="text-white">Away</span>
              <span className="text-white"> ]</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-gray-400 transition-colors">
              &lt;Features&gt;
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-gray-400 transition-colors">
              &lt;How_It_Works&gt;
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-gray-400 transition-colors">
              &lt;Benefits&gt;
            </Link>
            <Link href="#download" className="text-sm font-medium hover:text-gray-400 transition-colors">
              &lt;Download&gt;
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#download"
              className="inline-flex h-9 items-center justify-center rounded-none border border-white px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              [Download]
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black border-b border-white/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    Protect Your Eyes
                    <br />
                    While You Work
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    LookawayApp reminds you to follow the 20-20-20 rule:
                    <br />
                    Every 20 minutes, look at something 20 feet away for 20 seconds.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#download"
                    className="inline-flex h-10 items-center justify-center rounded-none border border-white bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-transparent hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  >
                    [Download_Now]
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="inline-flex h-10 items-center justify-center rounded-none border border-white bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  >
                    [Learn_More]
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="font-mono text-xs leading-none whitespace-pre text-white">
                  <AsciiArt />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-black border-b border-white/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-none border border-white px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 bg-transparent text-white">
                  &lt;FEATURES&gt;
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need for Healthy Eyes
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl lg:text-base xl:text-xl">
                  LookawayApp is designed to help you maintain healthy eyes while working on your computer.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 rounded-none border border-white/20 p-6">
                <div className="text-2xl">⏱️</div>
                <h3 className="text-xl font-bold">Customizable Timers</h3>
                <p className="text-center text-gray-400">
                  Set your own work and break durations to match your personal workflow and preferences.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-none border border-white/20 p-6">
                <div className="text-2xl">🖥️</div>
                <h3 className="text-xl font-bold">Full-Screen Break Mode</h3>
                <p className="text-center text-gray-400">
                  A gentle blur overlay reminds you to look away from your screen during break times.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-none border border-white/20 p-6">
                <div className="text-2xl">🔔</div>
                <h3 className="text-xl font-bold">Mindful Reminders</h3>
                <p className="text-center text-gray-400">
                  Get periodic reminders to blink and take deep breaths to reduce eye strain and stress.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-none border border-white/20 p-6">
                <div className="text-2xl">⚙️</div>
                <h3 className="text-xl font-bold">Fully Customizable</h3>
                <p className="text-center text-gray-400">
                  Adjust settings to match your workflow and preferences for a personalized experience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-none border border-white/20 p-6 lg:col-span-2">
                <div className="text-2xl">👁️</div>
                <h3 className="text-xl font-bold">20-20-20 Rule Implementation</h3>
                <p className="text-center text-gray-400">
                  LookawayApp helps you follow the ophthalmologist-recommended 20-20-20 rule: every 20 minutes, look at
                  something 20 feet away for 20 seconds to reduce digital eye strain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-black border-b border-white/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-none border border-white px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 bg-transparent text-white">
                  &lt;HOW_IT_WORKS&gt;
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple to Use, Easy to Benefit</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl lg:text-base xl:text-xl">
                  LookawayApp runs quietly in the background, helping you maintain healthy eye habits without disrupting
                  your workflow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="border border-white/20 p-6 font-mono text-xs leading-none whitespace-pre text-white overflow-hidden">
                <pre className="overflow-x-auto">
                  {`
+-------------------------------+
|                               |
|     LookawayApp Interface     |
|                               |
+-------------------------------+
|                               |
|  Work Duration: [00:20:00]    |
|  Break Duration: [00:00:20]   |
|                               |
|  [Set Timer]                  |
|                               |
|  Reminder: [00:05:00]         |
|                               |
|  [Set Reminder]               |
|                               |
|  Timer: 00:19:45              |
|                               |
|  [Start] [Stop]               |
|                               |
+-------------------------------+
`}
                </pre>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center border border-white text-white">1</div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Set Your Timers</h3>
                    <p className="text-gray-400">
                      Customize your work duration and break times to match your preferences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center border border-white text-white">2</div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Work Focused</h3>
                    <p className="text-gray-400">
                      The app runs in the background with a floating countdown timer to keep you informed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center border border-white text-white">3</div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Take Breaks</h3>
                    <p className="text-gray-400">
                      When it's time for a break, a gentle blur overlay reminds you to look away from your screen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center border border-white text-white">4</div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Stay Mindful</h3>
                    <p className="text-gray-400">
                      Periodic reminders help you remember to blink and take deep breaths throughout your workday.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-black border-b border-white/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-none border border-white px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 bg-transparent text-white">
                    &lt;BENEFITS&gt;
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Why Your Eyes Will Thank You
                  </h2>
                  <p className="max-w-[600px] text-gray-400 md:text-xl lg:text-base xl:text-xl">
                    Regular screen breaks can significantly reduce digital eye strain and improve your overall eye
                    health.
                  </p>
                </div>
                <ul className="grid gap-6">
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center border border-white text-white">+</div>
                    <div>
                      <h3 className="font-bold">Reduced Eye Strain</h3>
                      <p className="text-sm text-gray-400">
                        Regular breaks help reduce the symptoms of Computer Vision Syndrome.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center border border-white text-white">+</div>
                    <div>
                      <h3 className="font-bold">Improved Focus</h3>
                      <p className="text-sm text-gray-400">
                        Short breaks can actually improve your concentration and productivity.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center border border-white text-white">+</div>
                    <div>
                      <h3 className="font-bold">Better Sleep</h3>
                      <p className="text-sm text-gray-400">
                        Reducing eye strain during the day can lead to better sleep quality at night.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center border border-white text-white">+</div>
                    <div>
                      <h3 className="font-bold">Decreased Headaches</h3>
                      <p className="text-sm text-gray-400">
                        Regular breaks can reduce the frequency and intensity of screen-related headaches.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="font-mono text-xs leading-none whitespace-pre text-white">
                  {/* Previously stray </pre> removed */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-black border-b border-white/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">[Download LookawayApp Today]</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl lg:text-base xl:text-xl">
                  Start taking care of your eyes with our free Windows application.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="https://github.com/foundRamit/LookawayApp/releases/latest"
                  className="inline-flex h-10 items-center justify-center rounded-none border border-white bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-transparent hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download for Windows
                </Link>
                <Link
                  href="https://github.com/foundRamit/LookawayApp"
                  className="inline-flex h-10 items-center justify-center rounded-none border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </div>
            </div>
            <div className="mx-auto mt-16 max-w-5xl rounded-none border border-white/20 bg-black p-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">&lt;System_Requirements&gt;</h3>
                  <ul className="list-none pl-5 text-gray-400 space-y-1">
                    <li>- Windows 10 or higher</li>
                    <li>- .NET 9.0 or higher</li>
                    <li>- 1GB RAM minimum</li>
                    <li>- 50MB disk space</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">&lt;Installation&gt;</h3>
                  <p className="text-gray-400">
                    1. Download the latest release
                    <br />
                    2. Extract the ZIP file
                    <br />
                    3. Run LookawayApp.exe
                    <br />
                    4. Enjoy healthier eyes!
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">&lt;Open_Source&gt;</h3>
                  <p className="text-gray-400">
                    LookawayApp is completely free and open source. Contributions are welcome on our GitHub repository.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black border-b border-white/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-none border border-white px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 bg-transparent text-white">
                  &lt;TESTIMONIALS&gt;
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Users Are Saying</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl lg:text-base xl:text-xl">
                  Hear from people who have improved their eye health with LookawayApp.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-none border border-white/20 p-6">
                <div className="space-y-4">
                  <p className="text-gray-400">
                    "As a software developer, I spend 8+ hours daily in front of screens. LookawayApp has significantly
                    reduced my eye fatigue and headaches."
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="border border-white p-1">
                    <div className="h-8 w-8 bg-white" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Alex Johnson</p>
                    <p className="text-xs text-gray-400">Software Engineer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-none border border-white/20 p-6">
                <div className="space-y-4">
                  <p className="text-gray-400">
                    "I love how unobtrusive LookawayApp is. The gentle reminders help me maintain good eye habits
                    without disrupting my workflow."
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="border border-white p-1">
                    <div className="h-8 w-8 bg-white" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Sarah Chen</p>
                    <p className="text-xs text-gray-400">Graphic Designer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-none border border-white/20 p-6">
                <div className="space-y-4">
                  <p className="text-gray-400">
                    "My optometrist recommended the 20-20-20 rule, and LookawayApp makes it easy to follow. My eyes feel
                    much less strained at the end of the day."
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="border border-white p-1">
                    <div className="h-8 w-8 bg-white" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Michael Rodriguez</p>
                    <p className="text-xs text-gray-400">Content Writer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Protect Your Eyes?
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl lg:text-base xl:text-xl">
                  Download LookawayApp today and start taking better care of your eye health.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Link
                  href="#download"
                  className="inline-flex h-10 w-full items-center justify-center rounded-none border border-white bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-transparent hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  [DOWNLOAD_NOW] <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <p className="text-xs text-gray-400">Free and open source. Available for Windows.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-white/20 bg-black py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="text-lg font-semibold">
              <span className="text-white">[ </span>
              <span className="text-white">Look</span>
              <span className="text-white">Away</span>
              <span className="text-white"> ]</span>
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 md:text-left">
            &copy; {new Date().getFullYear()} LookawayApp. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/foundRamit/LookawayApp" className="text-sm text-gray-400 hover:text-white">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}