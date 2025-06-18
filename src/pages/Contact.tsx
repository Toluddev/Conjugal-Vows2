
import Navigation from '@/components/Navigation';
import PhotojournalismFooter from '@/components/PhotojournalismFooter';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen font-inter bg-gray-50">
      <Navigation />
      
      {/* Contact Form Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-200 rounded-lg p-1 flex">
              <button className="px-8 py-3 bg-gray-800 text-white rounded-lg font-medium">
                FOR COUPLES
              </button>
              <button className="px-8 py-3 text-gray-600 font-medium">
                FOR PLANNERS
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your name here"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Partner's Full Name
              </label>
              <input
                type="text"
                placeholder="John Smith"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="E.g. myemail@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Instagram Handle <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Project date
              </label>
              <input
                type="text"
                placeholder="MM/DD/YY"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Location | Venue
              </label>
              <input
                type="text"
                placeholder="Amalfi Coast, Italy"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                What type of event are you planning? <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 bg-white">
                <option>Select an option</option>
                <option>Wedding</option>
                <option>Engagement</option>
                <option>Elopement</option>
                <option>Other</option>
              </select>
            </div>
          </form>
        </div>
      </section>

      <PhotojournalismFooter />
    </div>
  );
};

export default Contact;
