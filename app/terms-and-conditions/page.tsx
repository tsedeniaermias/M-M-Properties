export default function TermsAndConditions() {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Terms and Conditions</h1>
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <p className="text-gray-600 mb-6">
                Please advise your arrival time to Virgin Gorda.
              </p>
  
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Check-in and Check-out Times</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    <strong>Check-in:</strong> Sunday - Friday: 3 P.M. - 11 P.M. | Saturday: 2 P.M. - 6 P.M.
                  </li>
                  <li>
                    <strong>Check-out:</strong> 11 A.M.
                  </li>
                </ul>
              </div>
  
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Booking and Payment</h2>
                <p className="text-gray-600">
                  A 50% deposit is required for confirmation. The balance is due upon your arrival.
                </p>
              </div>
  
              <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                <p className="text-gray-700">
                  By making a reservation with us, you acknowledge that you have read, understood, and agree to these terms
                  and conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  