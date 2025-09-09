"use client"
import React from "react";
import Team from "../components/Team";
import Image from "next/image";
import OldestUserCard from "../components/OldestUserCard";

function Page() {
  return (
    <div className="min-h-screen ">
      {/* About Section */}
      <div className="px-6 md:px-32 py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <h1 className="text-white text-5xl font-extrabold mb-6 text-center">
          About <span className="text-cyan-400">Maxnet</span>
        </h1>

        {/* About Text */}
        <div className="max-w-4xl mx-auto text-gray-100 leading-relaxed text-lg md:text-xl space-y-6">
          <p>
            Seventeen years ago, a group of neighbors, united by a passion for gaming and connectivity,
            wove the first strands of what would become <span className="font-bold text-white">Maxnet</span>.
            They literally ran Ethernet cables between their homes, creating a small local network that was
            the heartbeat of our early community. This humble beginning, powered by pure ingenuity and a
            desire to connect, was the first chapter of our story.
          </p>

          <p>
            That initial spark ignited a vision. Under the guidance of our founders,{" "}
            <span className="font-bold text-white">Uzair</span> and{" "}
            <span className="font-bold text-white">Adnan</span>, the small network grew into a vibrant
            community. The torch was then passed to{" "}
            <span className="font-bold text-white">Noman</span>, whose tireless dedication transformed
            Maxnet into the fiber-optic powerhouse it is today.
          </p>

          <p>
            <span className="font-bold text-cyan-400">Alhamdulillah</span>, through relentless hard work,
            unwavering passion, and the trust of our users, we&apos;ve become the{" "}
            <span className="font-bold">premier fiber provider</span> in our area. At Maxnet, we believe in
            a future powered by light-speed connectivity. That&apos;s why we bring a{" "}
            <span className="font-bold">100% pure fiber connection</span> directly to your home, ensuring
            a network that is not just fast, but reliable and future-proof.
          </p>

          <p>
            Our promise has always been and will remain the same: to deliver the best possible service
            without compromise. Maxnet is managed by a committed and experienced team, dedicated to
            upholding the legacy of community and innovation that started it all. We are more than an ISP;
            <span className="font-bold"> we are your neighbors</span>, committed to bringing the world to
            your doorstep.
          </p>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="experience bg-black text-center py-20">
        <h1 className="text-4xl md:text-7xl font-extrabold text-cyan-500 mb-6">
          Why Choose MaxNet
        </h1>
        <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
          With 17 years of experience and a commitment to excellence, we&apos;re not just an ISP — 
          we&apos;re your connectivity partner.
        </p>

        {/* Cards Grid */}
        <div className="cards flex flex-wrap justify-center gap-10 items-stretch">
          {[
            {
              src: "/one.svg",
              title: "17 Years of Excellence",
              desc: "Proven track record of delivering reliable internet services since 2007",
            },
            {
              src: "/two.svg",
              title: "1400+ Satisfied Customers",
              desc: "Growing community of homes and businesses that trust MaxNet",
            },
            {
              src: "/three.svg",
              title: "95% Same-Day Complaint Solving",
              desc: "Our team will ensure seamless connectivity",
            },
            {
              src: "/four.svg",
              title: "24/7 Technical Support",
              desc: "Round-the-clock expert assistance whenever you need it",
            },
            {
              src: "/five.svg",
              title: "Lightning Fast Speeds",
              desc: "Fiber-optic technology delivering blazing fast internet",
            },
            {
              src: "/six.svg",
              title: "Local Customer Care",
              desc: "Dedicated local support team that understands your needs",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="w-80 flex flex-col items-center justify-start bg-[#111] p-8 rounded-2xl shadow-lg 
                          transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/50"
            >
              <Image
                src={card.src}
                alt={card.title}
                width={100}
                height={100}
                className="bg-cyan-500 rounded-full p-4 mb-6 shadow-md"
              />
              <h3 className="text-white text-2xl font-bold mb-3 text-center">{card.title}</h3>
              <p className="text-gray-300 text-lg text-center leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-20 py-16 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <Team name="Muhammad Noman" role="CEO" />
          <Team name="Muhammad Adnan" role="CEO" />
          <Team name="Minhaj Uddin Babar" role="Co-Founder , IT-Administrator" image="/min.png"  />
          <Team name="Najeeb ur Rehman" role="IT-Tech , Manager"  />
          <Team name="Zaid" role="IT-Tech , Manager" image="/zaid.jpg" />
          <Team name="Areeb Khan" role="IT-Support , Recovery-Officer" image="/areeb.jpg" />
          <Team name="Rashid" role="IT-Tech" />
          <Team name="Rehan" role="Jr IT-Tech" />
          <Team name="Hasnain" role="Jr IT-Tech" />
        </div>
      </div>

      {/* Legacy Connections */}
      <div className="bg-gray-600 text-center pt-5">
        <h1 className="text-white px-10 md:px-40 mt-12 mb-6 text-5xl font-bold">Early Adopter </h1>
        <div className=" flex flex-wrap flex-row justify-around  ">
          <OldestUserCard username="Saghir" address="R-11"/>
          <OldestUserCard username="Wajahat" address="R-28"/>
          <OldestUserCard username="Majid" address="R-31"/>
          <OldestUserCard username="Mubashir" address="R-43"/>
          <OldestUserCard username="Javaid" address="R-57"/>
          <OldestUserCard username="Yasir" address="R-61"/>
          <OldestUserCard username="Mohsin" address="R-84"/>
          <OldestUserCard username="Bilal" address="R-134"/>
          <OldestUserCard username="Saleem" address="R-135"/>
          <OldestUserCard username="Amir" address="R-135"/>
          <OldestUserCard username="Anas" address="R-143"/>
          <OldestUserCard username="Danish" address="R-152"/>
          <OldestUserCard username="Shehzil" address="R-184"/>
          <OldestUserCard username="Usama" address="R-211"/>
          <OldestUserCard username="Saqib" address="R-213"/>
          <OldestUserCard username="Noman" address="R-213"/>
          <OldestUserCard username="Yaseen" address="R-214"/>
          <OldestUserCard username="Anas" address="R-220"/>
          <OldestUserCard username="Rehan" address="R-221"/>
          <OldestUserCard username="Hashir" address="R-225"/>
          <OldestUserCard username="Bilal" address="R-230"/>
          <OldestUserCard username="Fahad" address="R-244"/>
          <OldestUserCard username="Bilal" address="R-245"/>
          <OldestUserCard username="Minhaj" address="R-252"/>
          <OldestUserCard username="Zakir" address="R-255"/>
          <OldestUserCard username="Azhar" address="R-255"/>
          <OldestUserCard username="Kami" address="R-261"/>
          <OldestUserCard username="Irtaza" address="R-262"/>
          <OldestUserCard username="Asif" address="R-280"/>
          <OldestUserCard username="Azlan" address="R-283"/>
          <OldestUserCard username="Umais" address="R-285"/>
          <OldestUserCard username="Mani" address="R-295"/>
          <OldestUserCard username="Imran" address="R-315"/>
          <OldestUserCard username="Zia " address="R-318"/>
          <OldestUserCard username="Faiz" address="R-332"/>
          <OldestUserCard username="Umair" address="R-335"/>
          <OldestUserCard username="Ashad" address="R-347"/>
          <OldestUserCard username="Raja" address="R-349"/>
          <OldestUserCard username="Faisal" address="R-351"/>
          <OldestUserCard username="Imran" address="R-376"/>
          <OldestUserCard username="Taimoor" address="R-377"/>
          <OldestUserCard username="Abdullah" address="R-391"/>
          <OldestUserCard username="Abeer" address="R-393"/>
          <OldestUserCard username="Osama" address="R-426"/>
          <OldestUserCard username="Fahad" address="R-426"/>
        </div>
      </div>
    </div>
  );
}

export default Page;
