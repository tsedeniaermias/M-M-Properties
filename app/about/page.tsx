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
          M&M Apartment Suites is more than just a place to stay, it’s a homegrown vision brought to life by a local husband-and-wife team, dedicated to providing warm hospitality in the heart of Spanish Town, Virgin Gorda. Built on a foundation of family values, comfort, and community, our suites offer a welcoming retreat for visitors looking to experience the island’s beauty with the convenience of modern amenities.
With eight one-bedroom units and two two-bedroom units, each thoughtfully designed with air conditioning, wireless internet, satellite TV, and a full kitchen, we ensure that our guests feel right at home. 
<br /> Whether you're here for business, a romantic getaway, or a family vacation, our goal is to make your stay as comfortable and memorable as possible.
Adding to the experience, our M&M Bakery, located right next to the apartments, is a beloved local gem. Open from 6 PM to 11 AM daily (except Saturday nights), it serves up fresh, homemade treats and delicious take-out meals, giving guests a taste of the island’s authentic flavors.


          </p>
          <p className="text-gray-600 mb-4">
          Adding to the experience, our M&M Bakery, located right next to the apartments, is a beloved local gem. Open from 6 PM to 11 AM daily (except Saturday nights), it serves up fresh, homemade treats and delicious take-out meals, giving guests a taste of the island`&aposs authentic flavors.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
        <p className="text-gray-600 mb-4">
        At M&M Apartment Suites, we take pride in offering a personal touch, treating every guest like family. From the moment you arrive, you’ll experience the warmth, care, and dedication that make our family-run business a true home away from home.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
          <p className="text-gray-600">
          Our suites feature energy-efficient lighting, water-saving fixtures, and eco-friendly cleaning products. We prioritize locally sourced, sustainable products, including fresh ingredients at M&M Bakery, to support our community and reduce our environmental footprint.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Our Other Business – M&M Bakery
          </h3>
          <p className="text-gray-600">
          At M&M Bakery, we bring the flavors of Virgin Gorda to life with freshly baked goods and delicious take-out meals. We create authentic treats while prioritizing sustainability. Open daily (except Saturday nights), we offer a warm, welcoming experience for both locals and visitors alike.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
          <p className="text-gray-600">
          We are committed to providing the best experience for our guests by continuously refining our services. Through guest feedback and innovation, we enhance comfort, sustainability, and hospitality, ensuring that every stay and visit to M&M Apartment Suites and M&M Bakery exceeds expectations. Your satisfaction drives our growth.
          </p>
        </div>
      </div>
    </div>
  );
}
