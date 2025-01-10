import Image from "next/image";
import Link from "next/link";

const roomTypes = [
  {
    name: "1 Bedroom Suite",
    image: "/bedroom_1.JPG",
    description: "Perfect for couples or solo travelers",
  },
  {
    name: "2 Bedroom Suite",
    image: "/bedroom_2.JPG",
    description: "Ideal for small families or groups",
  },
  // { name: '3 Bedroom Suite', image: '/placeholder.svg', description: 'Spacious accommodation for larger groups' },
];

export default function Home() {
  return (
    <div>
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src="/banner.webp"
          alt="Ocean View"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center px-4">
            Welcome to M&M Apartment Suites
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Experience Comfort and Style
            </h2>
            <p className="text-gray-600 mb-6">
              Our M&M Properties suite offers the perfect blend of comfort and
              elegance. Enjoy spacious rooms, modern amenities, and a prime
              location for your perfect getaway.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/things-to-do"
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 text-center"
              >
                Discover Things to Do
              </Link>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <Image
              src="/IMG_9465.JPG"
              alt="Suite Overview"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
            <p className="text-gray-600">
              Situated in the heart of the city, close to major attractions and
              amenities.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Modern Amenities</h3>
            <p className="text-gray-600">
              Enjoy high-speed Wi-Fi, smart TVs, and fully equipped kitchens in
              all our suites.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Exceptional Service</h3>
            <p className="text-gray-600">
              Our dedicated team is available 24/7 to ensure your stay is
              perfect.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Rooms and Suites
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {roomTypes.map((room, index) => (
              <Link href="/rooms-and-suites" key={index} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
                  <Image
                    src={room.image}
                    alt={room.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                    <p className="text-gray-600">{room.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/rooms-and-suites"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 inline-block"
          >
            View All Rooms & Suites
          </Link>
        </div>
      </div>
    </div>
  );
}
