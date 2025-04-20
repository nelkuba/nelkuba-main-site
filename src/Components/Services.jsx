// src/components/Services.jsx

const servicesData = [
    { title: "Web Development", desc: "Building fast, responsive, and secure websites tailored to your needs." },
    { title: "UI/UX Design", desc: "Crafting intuitive and engaging user experiences." },
    { title: "SEO Optimization", desc: "Improving your site's visibility and ranking on search engines." },
    { title: "E-Commerce Solutions", desc: "Creating scalable and secure online stores." },
    { title: "Mobile App Development", desc: "Building smooth and efficient apps for iOS and Android." },
    { title: "Custom Software", desc: "Tailored software solutions to fit your unique business needs." },
    { title: "Branding & Identity", desc: "Helping you define your brand through visuals and storytelling." },
    { title: "Content Strategy", desc: "Strategizing content that connects and converts." },
    { title: "Email Marketing", desc: "Creating and automating email campaigns that engage." },
    { title: "Digital Advertising", desc: "Running smart ad campaigns to boost your ROI." },
    { title: "Analytics & Reporting", desc: "Tracking performance with clear and actionable insights." },
    { title: "Conversion Optimization", desc: "Optimizing user flows to drive more conversions." },
    { title: "Cloud Integration", desc: "Seamless integration with cloud services and platforms." },
    { title: "Cybersecurity", desc: "Protecting your digital assets and customer data." },
    { title: "Maintenance & Support", desc: "Ongoing support and updates for long-term success." },
    { title: "Social Media Strategy", desc: "Building your brand across social platforms." },
    { title: "Video Production", desc: "Crafting engaging videos for marketing and storytelling." },
    { title: "Blog & Copywriting", desc: "Creating written content that ranks and resonates." },
    { title: "Performance Optimization", desc: "Boosting website speed and performance." },
    { title: "Accessibility Audits", desc: "Ensuring your website is usable by everyone." },
    { title: "API Development", desc: "Building robust and scalable APIs for your platform." },
    { title: "CRM Integration", desc: "Connecting your site to CRMs for better customer relationships." },
    { title: "Project Consulting", desc: "Guidance and planning for successful project delivery." },
    { title: "DevOps & Deployment", desc: "Efficient CI/CD pipelines and infrastructure management." },
  ];
  
  const Services = () => {
    return (
      <section id="services" className="py-20 px-4 bg-gray-100">
        <div className="w-full text-center mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Our Services</h2>
          <p className="text-gray-700">Explore our comprehensive range of digital solutions.</p>
        </div>
        <div className="w-full grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;
  