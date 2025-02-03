"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Image component
import Navigation from "components/navigation";

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A full-stack e-commerce platform with user authentication, product catalog, and Stripe payment integration.",
    category: "Web Development",
    image: "/images/ecommerce.jpg",
    link: "https://example.com/ecommerce",
  },
  {
    id: 2,
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot that helps users with customer service and integrates with natural language processing (NLP).",
    category: "Artificial Intelligence",
    image: "/images/chatbot.jpg",
    link: "https://example.com/chatbot",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    category: "Web Development",
    image: "/images/portfolio.jpg",
    link: "https://example.com/portfolio",
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard for analyzing and visualizing financial market trends using D3.js and React.",
    category: "Data Science",
    image: "/images/dashboard.jpg",
    link: "https://example.com/dashboard",
  },
  {
    id: 5,
    title: "Mobile Banking App",
    description:
      "A secure mobile app for online banking with features like fund transfer, bill payments, and expense tracking.",
    category: "Mobile Development",
    image: "/images/banking.jpg",
    link: "https://example.com/banking",
  },
];

// Categories for filtering
const categories = [
  "All",
  "Web Development",
  "Artificial Intelligence",
  "Data Science",
  "Mobile Development",
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
        backgroundImage: "url('/images/picture.jpg')", // Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        maxWidth: "1300px",
        margin: "0 auto",
      }}
    >
      <Navigation />
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        My Projects
      </h1>

      {/* Category Filter */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: "10px 20px",
              backgroundColor:
                selectedCategory === category ? "#007BFF" : "#ffffff",
              color: selectedCategory === category ? "#ffffff" : "#333333",
              border: "1px solid #007BFF",
              borderRadius: "5px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding: "10px",
        }}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 12px rgba(0, 0, 0, 0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={300} // Set the width for optimization
              height={200} // Set the height for optimization
              style={{
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />

            {/* Project Details */}
            <div style={{ padding: "15px" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#666666",
                  marginBottom: "15px",
                }}
              >
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 15px",
                  backgroundColor: "#007BFF",
                  color: "#ffffff",
                  borderRadius: "5px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0056b3")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#007BFF")
                }
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
