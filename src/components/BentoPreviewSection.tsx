
const BentoPreviewSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Large featured image */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2">
            <div className="relative group overflow-hidden rounded-2xl h-full min-h-[400px]">
              <img 
                src="lovable-uploads/full-shot-couple-posing-wedding.jpg"
                alt="Wedding celebration"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Smaller images */}
          <div className="relative group overflow-hidden rounded-2xl h-48">
            <img 
              src="/lovable-uploads/low-angle-people-celebrating-wedding-nature.jpg"
              alt="Wedding moment"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="relative group overflow-hidden rounded-2xl h-48">
            <img 
              src="/lovable-uploads/michael-guertin-Qz0JbU7zCPM-unsplash.jpg"
              alt="Wedding celebration"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="relative group overflow-hidden rounded-2xl h-48">
            <img 
              src="/lovable-uploads/people-enjoying-burnt-orange-wedding.jpg"
              alt="Wedding moment"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="relative group overflow-hidden rounded-2xl h-48">
            <img 
              src="/lovable-uploads/romantic-black-couple-sitting-restaurant-wearing-elegant-clothes.jpg"
              alt="Wedding couple"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoPreviewSection;
