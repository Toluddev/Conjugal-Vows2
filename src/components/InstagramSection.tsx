
const InstagramSection = () => {
  const images = [
    "/lovable-uploads/2d09c29f-9afb-4102-bcd6-1deac3f03601.png",
    "/lovable-uploads/8d300c27-9744-477b-8922-0db4515bc7d1.png",
    "/lovable-uploads/f9568b0f-0057-412c-80cb-8b45c78b859f.png",
    "/lovable-uploads/0387de82-8f1e-4f9c-8ca5-4fbf126adfe4.png",
    "/lovable-uploads/8b538cf9-466c-4aa6-8836-ebe5b83c7d88.png",
    "/lovable-uploads/8b11c4f3-7ec2-4800-a061-e6310cbbd364.png",
    "/lovable-uploads/0127e3f4-d6fb-426e-8b84-d671cd894936.png",
    "/lovable-uploads/294955c6-4e8e-48a3-b058-32ede2733d94.png"
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            JOIN OUR ADVENTURES
          </h2>
          <p className="text-xl">ON INSTAGRAM</p>
          <div className="w-16 h-0.5 bg-white mx-auto mt-4"></div>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden aspect-square"
            >
              <img 
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
