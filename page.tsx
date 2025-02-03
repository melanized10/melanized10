"use client";
import Link from 'next/link'; // Import Link component from Next.js
import Navigation from '../../components/navigation'; // Corrected import path
import Image from 'next/image'; // Import the Image component from Next.js

import React from "react";

const PortfolioPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "Arial, sans-serif",
        color: "#fff",
        padding: "20px",
      }}
    >
      {/* Welcome Image */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <Image
          src="/welcome.jpg"
          alt="Welcome"
          width={200} // Set width for optimized image rendering
          height={200} // Set height for optimized image rendering
          style={{
            borderRadius: "0%", // Rectangle image
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </div>

      {/* Content Section */}
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
          margin: "0 auto",
          maxWidth: "800px",
        }}
      >
        {/* Welcome Message */}
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "20px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          Welcome to My Portfolio!
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.8",
            marginBottom: "30px",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
          }}
        >
          Hi, I&apos;m Elizabeth Akon Akol, an IT Specialist with a passion for
          building innovative projects. Explore my journey, connect with me, and
          see what I have to offer. Let&apos;s make something amazing together!
        </p>

        {/* Resume Download */}
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link href="/resume.pdf" passHref>
            <button
              style={{
                display: "inline-block",
                padding: "12px 24px",
                backgroundColor: "#28A745",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "50px", // Rounded button
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                fontSize: "1.2rem",
                letterSpacing: "1px",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#218838") ||
                (e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.4)")}
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#28A745") ||
                (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)")}
            >
              Download My Resume
            </button>
          </Link>
        </div>
      </div>

      {/* Navigation Section */}
      <Navigation />
    </div>
  );
};

export default PortfolioPage;
