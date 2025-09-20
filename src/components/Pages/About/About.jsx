import BigImg from "../../../assets/about/about1.jpg"; 
import SmallImg from "../../../assets/about/about2.jpg"; 

export default function About() {
  return (
    <div style={{ padding: "4rem 2rem", backgroundColor: "#f7fafc", minHeight: "100vh", position: "relative" }}>
 
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#2d3748", marginBottom: "0.5rem", opacity: 0, animation: "fadeIn 1s forwards" }}>
          ABOUT US
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#4a5568", maxWidth: "40rem", margin: "0 auto", opacity: 0, animation: "fadeIn 1.2s forwards 0.2s" }}>
          Furns is your global destination for unique, cutting-edge furniture designs and diverse home décor inspirations.
        </p>
      </header>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes parallax {
            from { transform: translateY(0); }
            to { transform: translateY(-20px); }
          }
          .parallax-img {
            animation: parallax 3s infinite alternate ease-in-out;
          }
        `}
      </style>


      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}>

        <div style={{ position: "relative", overflow: "hidden", borderRadius: "0.5rem" }}>
          <img
            src={SmallImg}
            alt="Decor small piece"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              transition: "transform 0.3s",
              animation: "parallax 3s infinite alternate ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

  
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: "1rem", right: "1rem", backgroundColor: "rgba(45, 55, 72, 0.8)", padding: "0.5rem 1rem", borderRadius: "0.375rem" }}>
            <h4 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#ffffff", margin: 0 }}>Our Vision</h4>
          </div>
          <img
            src={BigImg}
            alt="Decor big showcase"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s",
              animation: "parallax 3s infinite alternate ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

      
        <div style={{ gridColumn: "1 / 3", display: "flex", gap: "2rem", marginTop: "2rem" }}>
          <div style={{ flex: 1, padding: "1.5rem", backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "0.5rem", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)" }}>
            <h4 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#2d3748", marginBottom: "0.75rem" }}>Our Stores</h4>
            <p style={{ fontSize: "1rem", color: "#4a5568", lineHeight: "1.6" }}>
              Explore our global network of stores offering unique furniture and décor. Visit us to experience the best in design.
            </p>
          </div>
          <div style={{ flex: 1, padding: "1.5rem", backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "0.5rem", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)" }}>
            <h4 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#2d3748", marginBottom: "0.75rem" }}>Our Mission</h4>
            <p style={{ fontSize: "1rem", color: "#4a5568", lineHeight: "1.6" }}>
              We aim to inspire and deliver innovative furniture solutions with a commitment to sustainability and quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}