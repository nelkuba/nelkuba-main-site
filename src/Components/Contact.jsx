// src/components/Contact.jsx

const Contact = () => {
    return (
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            Have questions or want to work with us? Reach out below!
          </p>
          <form className="grid gap-4 max-w-xl mx-auto">
            <input
              className="p-3 border rounded-xl"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              className="p-3 border rounded-xl"
              type="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="p-3 border rounded-xl"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  