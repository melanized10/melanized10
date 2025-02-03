"use client";
import React from "react";
import Image from "next/image"; // Import Image component
import Navigation from "components/navigation";

const Hobbies = () => {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f4f4f4",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, background-color 0.3s ease",
        maxWidth: "1300px",
        margin: "0 auto",
      }}
    >
      <Navigation />
      <h1>My Hobbies</h1>
      <p>Here are some of my favorite hobbies that keep me inspired:</p>

      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        {/* Travel Section */}
        <div style={{ margin: "20px", maxWidth: "300px" }}>
          <Image
            src="/images/travel.jpg" // Image in the public folder under /images/
            alt="Travel"
            width={300} // Set the width for optimization
            height={200} // Set the height for optimization
            style={{ borderRadius: "10px" }}
          />
          <h3>Travel</h3>
          <p>
            I love traveling to new places, experiencing different cultures, and exploring nature&apos;s beauty.
            Traveling allows me to expand my horizons and learn from diverse perspectives.
          </p>
        </div>

        {/* Nature Section */}
        <div style={{ margin: "20px", maxWidth: "300px" }}>
          <Image
            src="/images/nature.jpg" // Image in the public folder under /images/
            alt="Nature"
            width={300} // Set the width for optimization
            height={200} // Set the height for optimization
            style={{ borderRadius: "10px" }}
          />
          <h3>Nature</h3>
          <p>
            Nature is a source of peace and inspiration for me. Whether it&apos;s a forest hike, a beach walk, or a mountain view, nature helps me feel grounded and recharged.
          </p>
        </div>

        {/* Culture Section */}
        <div style={{ margin: "20px", maxWidth: "300px" }}>
          <Image
            src="/images/culture.jpg" // Image in the public folder under /images/
            alt="Culture"
            width={300} // Set the width for optimization
            height={200} // Set the height for optimization
            style={{ borderRadius: "10px" }}
          />
          <h3>Culture</h3>
          <p>
            Exploring different cultures and traditions enriches my understanding of the world. I love attending cultural events, festivals, and learning about history.
          </p>
        </div>

        {/* Swimming Section */}
        <div style={{ margin: "20px", maxWidth: "300px" }}>
          <Image
            src="/images/swimming.jpg" // Image in the public folder under /images/
            alt="Swimming"
            width={300} // Set the width for optimization
            height={200} // Set the height for optimization
            style={{ borderRadius: "10px" }}
          />
          <h3>Swimming</h3>
          <p>
            Swimming is a hobby that keeps me fit and helps me relax. Whether in the pool or open water, swimming is my go-to activity to unwind and stay healthy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
