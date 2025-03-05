import Image from 'next/image'

export default function Contact() {
  return (
    <div>
      <div className="relative h-[40vh] mb-8">
        <Image 
          src="/Flag_of_the_British_Virgin_Islands.svg" 
          alt="Contact Us Banner" 
          fill 
          style={{objectFit: "cover"}}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-semibold mb-4 text-black">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold mb-2 text-black">Email:</p>
                <p className="text-gray-600 mb-4">welcome@mmsuites.vg</p>
                
                <p className="font-semibold mb-2 text-black">Phone:</p>
                <p className="text-gray-600 mb-4">+1 (284) 495-5054</p>
              </div>
              <div>
                <p className="font-semibold mb-2 text-black">Address:</p>
                <p className="text-gray-600 mb-4">
                Spanish town Virgin Gorda<br />
                 BVI
                </p>
                
                <p className="font-semibold mb-2 text-black">Hours:</p>
                <p className="text-gray-600 mb-4">
                Monday - Saturday: 3pm - 10pm<br />
                  
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-xl">We look forward to hearing from you!</p>
            <p className="mt-2 text-white-600">For pricing inquiries or any questions, please don &apost; t hesitate to reach out.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

