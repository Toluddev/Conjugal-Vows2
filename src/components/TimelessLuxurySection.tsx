
const TimelessLuxurySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-5xl lg:text-6xl font-dancing-script text-gray-900 mb-8">
            Timeless Luxury
          </h2>

          {/* Subtitle */}
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            CAPTURING YOUR STORY WITH AN
          </h3>
          <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-12">
            UNCOMPROMISING DEDICATION TO QUALITY.
          </h4>

          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed mb-16 max-w-3xl mx-auto">
            Every couple brings their own rhythm, their own aesthetic, their own way of moving through the 
            world together. We take time to understand what makes your love story distinctive From our first 
            meeting to the moment you receive your completed films, we're dedicated to being present, 
            professional, and genuinely excited about bringing your vision to life. Because at the end of the day, 
            we're not just capturing your wedding. We're preserving the beginning of your forever.
          </p>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="/lovable-uploads/romantic-black-couple-sitting-restaurant-wearing-elegant-clothes.jpg"
                alt="Wedding celebration"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="lovable-uploads/full-shot-couple-posing-wedding.jpg"
                alt="Wedding moment"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelessLuxurySection;
