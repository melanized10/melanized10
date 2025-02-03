"use client";
import React from "react";
import Image from "next/image"; // Import Image component
import Navigation from "components/navigation";

const Education = () => {
  return (
    <div
      style={{
        padding: "40px",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        position: "relative", // Required for positioning the Image as a background
        minHeight: "100vh", // Ensure it covers the full screen height
      }}
    >
      {/* Using next/image for optimized background */}
      <Image
        src="/background.jpg"
        alt="Background Image"
        layout="fill" // Make the image fill the container
        objectFit="cover" // Ensure the image covers the entire area
        objectPosition="center" // Position the image in the center
        priority // Load this image as a priority
        style={{
          zIndex: -1, // Place the image behind the content
          position: "absolute", // Position it as background
        }}
      />
      <Navigation />
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          textShadow: "3px 3px 5px rgba(0, 0, 0, 0.7)",
          marginBottom: "30px",
        }}
      >
        My Education Journey
      </h1>

      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "10px",
          padding: "30px",
          maxWidth: "800px",
          margin: "0 auto",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            <a
              href="https://www.ku.ac.ke/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#00bfff",
                textDecoration: "none",
                fontWeight: "bold",
                padding: "5px 10px",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: "5px",
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.backgroundColor = "#00bfff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#00bfff";
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
              }}
            >
              Kenyatta University, Nairobi
            </a>
          </h2>
          <p style={{ fontSize: "1.2rem", color: "#bbb", marginBottom: "10px" }}>
            Sep 2019 – Apr 2024
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.8",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            Bachelor of Science in Information Technology
          </p>
        </div>

        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            <a
              href="https://kinyagodandoraschools.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#00bfff",
                textDecoration: "none",
                fontWeight: "bold",
                padding: "5px 10px",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: "5px",
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.backgroundColor = "#00bfff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#00bfff";
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
              }}
            >
              Kinyago Dandora Secondary School, Nairobi
            </a>
          </h2>
          <p style={{ fontSize: "1.2rem", color: "#bbb", marginBottom: "10px" }}>
            Feb 2015 – Nov 2018
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.8",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            Kenya Certificate of Secondary Education (KCSE)
          </p>
        </div>

        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Certifications</h2>
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              fontSize: "1.5rem",
              color: "#fff",
            }}
          >
            <li>
              Cybersecurity Certification - Coursera Learning | Sep 2022 – May
              2023
            </li>
            <li>
              Computer Packages Certification - Kinyago Dandora Secondary School
              | Jan 2019 – Mar 2019
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
