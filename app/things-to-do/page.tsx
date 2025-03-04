import Image from "next/image"
import Link from "next/link"
import { Utensils, Compass } from "lucide-react"

const activities = [
  {
    title: "Top Activities",
    icon: <Compass className="w-6 h-6 text-blue-500" />,
    items: [
      {
        name: "The Baths",
        description: "Walk through giant granite boulders, hidden caves, and crystal-clear pools.",
        // link: "https://www.bvinpt.org/the-baths",
        link: "#",
        image: "/The Baths.jpg",
      },
      {
        name: "Snorkeling & Diving",
        description: "Discover vibrant coral reefs and marine life at famous spots like Devil's Bay and Savannah Bay.",
        // link: "https://www.bvitourism.com/diving",
        link: "#",
        image: "/placeholder.svg",
      },
      {
        name: "Beaches & Swimming",
        description: "Relax on stunning beaches like Spring Bay and Mahoe Bay.",
        // link: "https://www.bvitourism.com/beaches",
        link: "#",
        image: "/placeholder.svg",
      },
      {
        name: "Boat Tours & Sailing",
        description: "Experience the BVI's beauty with island-hopping excursions and private charters.",
        // link: "https://www.bvitourism.com/sailing",   
        link: "#",
        image: "/placeholder.svg",
      },
      {
        name: "Hiking & Nature Trails",
        description: "Trek up Gorda Peak for breathtaking panoramic views.",
        // link: "https://www.bvitourism.com/hiking",
        link: "#",
        image: "/placeholder.svg",
      },
      {
        name: "Copper Mine Ruins",
        description:
          "Visit this historic 19th-century copper mine, offering a glimpse into the island's past with stunning coastal views.",
        // link: "https://www.bvinpt.org/copper-mine",
        link: "#",
        image: "/Copper_Mine_Ruins.jpg",
      },
    ],
  },
]

const restaurants = [
  {
    name: "CocoMaya",
    description:
      "A stylish beachfront restaurant with Asian-Latin fusion cuisine, craft cocktails, and a cozy fire pit.",
    // link: "/things-to-do",
    link: "#",
    image: "/cocomaya_2.jpg",
    tags: ["Asian-Latin Fusion", "Beachfront", "Cocktails"],
  },
  {
    name: "Hog Heaven",
    description: "Known for its famous BBQ ribs and breathtaking hilltop views.",
    // link: "https://www.hogheavenbvi.com",
    link: "#",
    image: "/placeholder.svg",
    tags: ["BBQ", "Hilltop Views", "Casual"],
  },
  {
    name: "Top of the Baths",
    description: "A great post-hike spot with ocean views, fresh seafood, and refreshing drinks.",
    // link: "https://www.topofthebaths.com",
    link: "#",
    image: "/top-of-the-bath.jpg",
    tags: ["Seafood", "Ocean Views", "Casual Dining"],
  },
  {
    name: "Nova Oil Nut Bay",
    description: "A stunning overwater restaurant, perfect for brunches with breathtaking marina views.",
    // link: "https://oilnutbay.com/dining",
    link: "#",
    image: "/nova_oil_1.jpg",
    tags: ["Brunch", "Marina Views", "Upscale"],
  },
  {
    name: "Sugarcane Restaurant",
    description: "A refined dining experience with fresh seafood, gourmet dishes, and sunset views.",
    link: "#",
    image: "/sugarCane.jpg",
    tags: ["Fine Dining", "Seafood", "Sunset Views"],
  },
  {
    name: "Winnie's Steakhouse",
    description: "A top choice for premium steaks and hearty meals in a relaxed atmosphere.",
    link: "#",
    image: "/placeholder.svg",
    tags: ["Steakhouse", "Relaxed", "Dinner"],
  },
  {
    name: "The Restaurant at Leverick Bay",
    description: "A great spot for seafood and steaks with live entertainment on select nights.",
    link: "#",
    image: "/placeholder.svg",
    tags: ["Seafood", "Live Entertainment", "Bay Views"],
  },
  {
    name: "Chez Bamboo",
    description: "Offers Caribbean, Asian, and Mediterranean flavors with a vibrant nightlife scene.",
    link: "#",
    image: "/placeholder.svg",
    tags: ["Fusion", "Nightlife", "International"],
  },
  {
    name: "Bath & Turtle",
    description: "A local favorite for casual dining, great burgers, and island cocktails.",
    link: "#",
    image: "/placeholder.svg",
    tags: ["Casual", "Burgers", "Local Favorite"],
  },
  
]

export default function ThingsToDo() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="relative h-[90vh]">
        <Image src="/VG_1.jpg" alt="Virgin Gorda Panorama" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
            Things to Do on Virgin Gorda, BVI
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="prose max-w-none mb-16">
          <p className="text-lg text-white-700 leading-relaxed">
            Discover the beauty and adventure that Virgin Gorda has to offer. Whether you&apos;re looking for relaxation or
            excitement, there&apos;s something for everyone.
          </p>
        </div>

        <div className="grid gap-16">
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Compass className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl font-semibold text-white-800">Top Activities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities[0].items.map((activity, index) => (
                <Link
                  href={activity.link}
                  key={index}
                  
                  rel="noopener noreferrer"
                  className="block bg-white rounded-lg  overflow-hidden transform transition duration-300 hover:scale-105"
                >
                  <div className="relative h-48">
                    <Image
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{activity.name}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-6">
              <Utensils className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl font-semibold text-white-800">Local Dining & Nightlife</h2>
            </div>
            <div className="prose max-w-none mb-8">
              <p className="text-lg text-white-700 leading-relaxed">
                Virgin Gorda offers a mix of casual beachside spots, fine dining, and lively bars where you can enjoy
                fresh seafood, Caribbean flavors, and tropical cocktails.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((restaurant, index) => (
                <Link
                  href={restaurant.link}
                  key={index}
                  
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-lg  overflow-hidden transform transition duration-300 hover:scale-105"
                >
                  <div className="relative h-48">
                    <Image
                      src={restaurant.image || "/placeholder.svg"}
                      alt={restaurant.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{restaurant.name}</h3>
                    <p className="text-gray-600 mb-4">{restaurant.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block bg-blue-50 text-blue-600 text-sm px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <div className="bg-blue-50 rounded-lg p-8 mt-8">
            <p className="text-lg text-blue-900 text-center font-medium">
              From romantic dinners to lively island music, Virgin Gorda has something for everyone after the sun sets!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

