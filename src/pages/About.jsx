import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">ℹ️ About Us</h1>
      <div className="row">
        {/* Left Side Content */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h3>Our Expertise</h3>
          <p>
            With years of experience in the fireworks industry, Astro Crackers has become a trusted name for premium-quality crackers in Sivakasi. We specialize in offering a wide variety of safe, vibrant, and affordable fireworks that bring joy to every celebration.
          </p>
          <p>
            Our deep-rooted expertise, combined with a commitment to quality and customer satisfaction, ensures that each product we deliver adds sparkle and happiness to your special moments. From festivals to weddings and grand occasions, Astro Crackers continues to light up lives with trust, tradition, and brilliance.
          </p>
        </div>

        {/* Right Side Map */}
        <div className="col-md-6">
          <div className="mb-2" style={{ height: "300px", width: "100%" }}>
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.123456!2d77.921234!3d9.431234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03123456789abc%3A0xabcdef1234567890!2sSouth%20Car%20Street%2C%20Sivakasi%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1693550000000"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-end">
            <p>
              📍 Our Address:<br />
              South Car Street, Sivakasi, Tamil Nadu, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
