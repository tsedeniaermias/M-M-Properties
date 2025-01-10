import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        About Our  Suite
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <Image
            src="/front_1.JPG"
            alt="Our Suite"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
          Located in the heart of Spanish Town, M&M Apartment Suites are your “home away from home” on Virgin Gorda. There are eight, one-bedroom units and two, two-bedroom units, all with air conditioning, wireless internet, satellite TV, and a full kitchen. Located adjacent to the apartments is M&M bakery, open from 6 pm to 11am every day (except Saturday nights) for tasty treats and delicious take-out meals.
          </p>
          <p className="text-gray-600 mb-4">
            Our suite is designed to provide a unique and memorable experience
            for all our guests. From business travelers to vacationing families,
            we cater to all with our top-notch amenities and personalized
            service.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
        <p className="text-gray-600 mb-4">
          We are committed to providing an exceptional stay for all our guests.
          Our attention to detail, dedication to cleanliness, and focus on
          customer satisfaction set us apart from the rest.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
          <p className="text-gray-600">
            We are committed to eco-friendly practices and minimizing our
            environmental impact.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Our other Business</h3>
          <p className="text-gray-600">
            We offer authentic and delightful experiences to our bakery guests.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
          <p className="text-gray-600">
            We constantly seek feedback and improve our services to exceed
            expectations.
          </p>
        </div>
      </div>
    </div>
  );
}
