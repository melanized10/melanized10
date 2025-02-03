"use client";
import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa"; // Import icons
import Navigation from "components/navigation";
import Image from "next/image"; // Import Image component

const Contacts = () => {
  return (
    <div
      style={{
        padding: "40px",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <Navigation />
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          textShadow: "3px 3px 5px rgba(0, 0, 0, 0.7)",
          marginBottom: "30px",
        }}
      >
        Contact Me
      </h1>

      {/* Background Image Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: "600px",
        }}
      >
        <Image
          src="/background.jpg" // Background image in the public folder
          alt="Background"
          layout="fill" // Set image to fill the container
          objectFit="cover" // Ensure the image covers the container
          quality={100} // Set quality for the image
        />
      </div>

      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "10px",
          padding: "30px",
          maxWidth: "800px",
          margin: "0 auto",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          position: "relative", // Keep the content above the background
        }}
      >
        {/* Phone Numbers Section */}
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Phone Numbers</h2>
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.8",
              color: "#fff",
              marginBottom: "10px",
            }}
          >
            <FaPhone style={{ marginRight: "10px" }} />
            <a
              href="tel:+211926510228"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              +211 926 510 228
            </a>
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.8",
              color: "#fff",
              marginBottom: "10px",
            }}
          >
            <FaPhone style={{ marginRight: "10px" }} />
            <a
              href="tel:+254711948546"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              +254 711 948 546
            </a>
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.8",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            <FaPhone style={{ marginRight: "10px" }} />
            <a
              href="tel:+211921347373"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              +211 921 347 373
            </a>
          </p>
        </div>

        {/* Email Section */}
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Email</h2>
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.8",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            <FaEnvelope style={{ marginRight: "10px" }} />
            <a
              href="mailto:akonakol009@gmail.com"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              akonakol009@gmail.com
            </a>
          </p>
        </div>

        {/* LinkedIn Section */}
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>LinkedIn</h2>
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.8",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            <FaLinkedin style={{ marginRight: "10px" }} />
            <a
              href="https://www.linkedin.com/in/akon-akol-124634349"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              www.linkedin.com/in/akon-akol-124634349
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
