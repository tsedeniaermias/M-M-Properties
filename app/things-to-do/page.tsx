import Image from 'next/image'

const activities = [
  { name: 'City Tours', description: 'Explore the island&apos;s rich history and culture with guided tours.' },
  { name: 'Local Cuisine', description: 'Taste the flavors of our island at nearby restaurants and food markets.' },
  { name: 'Shopping', description: 'Visit local boutiques and shopping centers for a unique retail experience.' },
  { name: 'Outdoor Activities', description: 'Enjoy parks, hiking trails, and outdoor sports in the surrounding area.' },
  { name: 'Nightlife', description: 'Experience the vibrant nightlife with bars, clubs, and entertainment venues.' },
  { name: 'Museums and Galleries', description: 'Immerse yourself in art and history at our world-class museums.' },
]

export default function ThingsToDo() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Things to Do Around Our Suite</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <Image src="/placeholder.svg" alt="City Overview" width={600} height={400} className="rounded-lg shadow-md" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Explore Our Vibrant island</h2>
          <p className="text-gray-600 mb-4">
            Our luxury suite is located in the heart of the island, providing easy access to a wide range of activities and attractions. 
            Whether you&apos;re interested in culture, cuisine, or outdoor adventures, there&apos;s something for everyone just steps from our door.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
            <p className="text-gray-600">{activity.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Need Recommendations?</h2>
        <p className="text-gray-600 mb-4">
          Our concierge team is always available to provide personalized recommendations and help you plan your perfect itinerary. 
          Don&apos;t hesitate to ask us about hidden gems and local favorites!
        </p>
      </div>
    </div>
  )
}
