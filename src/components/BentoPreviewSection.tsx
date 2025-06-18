
const BentoPreviewSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Large featured image */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2">
            <div className="relative group overflow-hidden rounded-2xl h-full min-h-[400px]">
              <img 
                src="/lovable-uploads/8d300c27-9744-477b-8922-0db4515bc7d1.png"
                alt="Wedding celebration"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Smaller images */}
          <div className="relative group overflow-hidden rounded-2xl h-48">
            <img 
              src="/lovable-uploads/2d09c29f-9afb-4102-bcd6-1deac3f03601.png"
              alt="Wedding moment"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="relative group overflow-hidden rounded-2xl h-48">
            <img 
              src="/lovable-uploads/f9568b0f-0057-412c-80cb-8b45c78b859f.png"
              alt="Wedding celebration"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="relative group overflow-hidden rounded-2xl h-48">
            <img 
              src="/lovable-uploads/0387de82-8f1e-4f9c-8ca5-4fbf126adfe4.png"
              alt="Wedding moment"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="relative group overflow-hidden rounded-2xl h-48">
            <img 
              src="/lovable-uploads/8b538cf9-466c-4aa6-8836-ebe5b83c7d88.png"
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
