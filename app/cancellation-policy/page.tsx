import { Clock, Calendar, AlertTriangle } from "lucide-react"

export default function CancellationPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Cancellation Policy</h1>
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <p className="text-gray-600 mb-6">
            Cancellations up to two weeks before reservations are entitled to 50 percent refund of deposit.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                <Clock className="mr-2 text-green-500" />
                Special situations
              </h2>
              <ul className="list-none pl-6 mb-4 space-y-2">
                {[
                  "Death in the family, sickness or weather-related issues all result in a credit towards a future stay with us. Credits are Valid for one year.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                <Calendar className="mr-2 text-blue-500" />
                Shorten Stay
              </h2>
              {/* <p className="text-gray-600 mb-2">For bookings of 28 nights or more:</p> */}
              <ul className="list-none pl-6 mb-4 space-y-2">
                {[
                  "Accommodations not occupied for the full reservation period is subjected to be charged for half remaining balance owed.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                <AlertTriangle className="mr-2 text-yellow-500" />
                Non-arrival to the suites 
              </h2>
              <p className="text-gray-600 mb-2">
                Our Extenuating Circumstances policy may apply in certain situations. These may include:
              </p>
              <ul className="list-none pl-6 mb-4 space-y-2">
                {[
                  "failure to arrive at the Suites on your arrival date without notifying us of your plans will result in automatic cancellation. Any deposits taken would be lost.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 p-6 bg-gray-100 rounded-lg">
              <p className="text-gray-700">
                For any questions or concerns regarding our cancellation policy, please don't hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

