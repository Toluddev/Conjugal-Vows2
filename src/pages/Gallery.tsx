
import Navigation from '@/components/Navigation';
import PhotojournalismFooter from '@/components/PhotojournalismFooter';

const Gallery = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navigation />
      
      {/* Gallery Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              GALLERY
            </h1>
            <p className="text-lg text-gray-700">
              A curated collection of our most cherished moments and stories.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto">
            {/* Row 1 */}
            <div className="col-span-12 md:col-span-8 h-96">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop"
                alt="Body of water surrounded by trees"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-12 md:col-span-4 h-96">
              <img 
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=600&fit=crop"
                alt="Blue starry night"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Row 2 */}
            <div className="col-span-12 md:col-span-3 h-64">
              <img 
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=300&h=400&fit=crop"
                alt="Forest heat by sunbeam"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-12 md:col-span-6 h-64">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop"
                alt="Ocean wave at beach"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-12 md:col-span-3 h-64">
              <img 
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=400&fit=crop"
                alt="Trees near rocky mountain"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Row 3 */}
            <div className="col-span-12 md:col-span-5 h-80">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&h=500&fit=crop"
                alt="Bird's eye view of green mountains"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-12 md:col-span-4 h-80">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=500&fit=crop"
                alt="Building with wavy lines"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-12 md:col-span-3 h-80">
              <img 
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=300&h=500&fit=crop"
                alt="Green grass and rocky mountain"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Row 4 */}
            <div className="col-span-12 md:col-span-4 h-72">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=450&fit=crop"
                alt="White concrete building"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-12 md:col-span-4 h-72">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=450&fit=crop"
                alt="Photography of mosque buildings"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-12 md:col-span-4 h-72">
              <img 
                src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=450&fit=crop"
                alt="White building under stars"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Row 5 */}
            <div className="col-span-12 md:col-span-6 h-64">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop"
                alt="Two brown deer beside trees and mountain"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-12 md:col-span-3 h-64">
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=300&h=400&fit=crop"
                alt="Grey tabby kitten"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-12 md:col-span-3 h-64">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=400&fit=crop"
                alt="Orange and white tabby cat"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Row 6 */}
            <div className="col-span-12 md:col-span-7 h-96">
              <img 
                src="https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=700&h=600&fit=crop"
                alt="Humpback whale jumping on sea"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-12 md:col-span-5 h-96">
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=500&h=600&fit=crop"
                alt="Brown antelope and zebra on field"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Row 7 */}
            <div className="col-span-12 md:col-span-4 h-56">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=350&fit=crop"
                alt="Woman sitting on bed using laptop"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-12 md:col-span-4 h-56">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=350&fit=crop"
                alt="Turned on gray laptop computer"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-12 md:col-span-4 h-56">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=350&fit=crop"
                alt="Woman using black laptop computer"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Row 8 */}
            <div className="col-span-12 md:col-span-8 h-80">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop"
                alt="Matrix movie still"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-12 md:col-span-4 h-80">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=500&fit=crop"
                alt="Ocean wave at beach closeup"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <PhotojournalismFooter />
    </div>
  );
};

export default Gallery;
