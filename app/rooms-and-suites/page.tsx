import Image from 'next/image'
import Link from 'next/link'

const rooms = [
  {
    name: 'Single BedRoom Suite',
    description: 'Spacious suite, king/queen size bed, living area, fully equipped kitchen and private balcony.',
    amenities: ['King-size bed', 'Private balcony', 'Private bathroom', 'Free Wi-Fi', 'King/Queen beds', 'Living area'],
    maxOccupancy: 2,
  },
  {
    name: 'Double BedRoom Suite',
    description: 'Perfect for families, with two bedrooms, living area, and fully equipped kitchen.',
    amenities: ['Two bedrooms', 'Living area', 'Full kitchen', 'Private balcony','Free Wi-Fi', 'Queen/King beds'],
    maxOccupancy: 4,
  },
  // {
  //   name: 'Executive Suite',
  //   description: 'Luxurious suite with a separate office space, perfect for business travelers.',
  //   amenities: ['King-size bed', 'Office space', 'En-suite bathroom', 'Espresso machine', 'City view', 'Free Wi-Fi'],
  //   size: '55 sq m',
  //   maxOccupancy: 2,
  // },
]

export default function RoomsAndSuites() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Rooms and Suites</h1>
      
      <div className="grid gap-12">
        {rooms.map((room, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image src="/bedroom_2.jpg" alt={room.name} width={400} height={300} className="h-full w-full object-cover" />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-bold">{room.name}</div>
                <p className="mt-2 text-gray-500">{room.description}</p>
                <div className="mt-4">
                  <Link href="/contact" className="text-xl font-bold text-blue-600 hover:underline">
                    Contact for Pricing
                  </Link>
                </div>
                <div className="mt-4">
                  {/* <span className="text-gray-600">Size: {room.size}</span> */}
                  <span className="ml-4 text-gray-600">Max Occupancy: {room.maxOccupancy}</span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-gray-900">Amenities:</h3>
                  <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2">
                    {room.amenities.map((amenity, index) => (
                      <li key={index} className="text-gray-600 flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-2xl text-black font-bold mb-4">All Suites Include:</h2>
        <ul className="grid md:grid-cols-2 text-black gap-4">
          <li className="flex items-center">
            <svg className="h-5 w-5 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            Air Conditioning/Ceiling fan
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            Wireless Internet
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            Full Kitchen
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            Flat screen with Satellite
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            Living area
          </li>
          {/* <li className="flex items-center">
            <svg className="h-5 w-5 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            Washer/Dryer
          </li> */}
        </ul>
      </div>
    </div>
  )
}

