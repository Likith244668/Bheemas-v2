import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/ambience/03.jpeg"
              alt="Authentic Indian restaurant interior in Little Rock"
              width={500}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 
              className="text-4xl md:text-5xl font-bold text-[#2A2420] mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              About Bheemas Indian Kitchen & Bar
            </h2>
            
            <div className="space-y-4 text-[#6B5D54] leading-relaxed">
              <p>
                Welcome to the best Indian restaurant in Little Rock. We are dedicated to serving authentic Indian cuisine 
                that celebrates traditional recipes and time-honored cooking methods. Our commitment to quality and authenticity 
                makes us the premier choice for families and food enthusiasts seeking genuine North Indian and South Indian dishes.
              </p>
              
              <p>
                Our fine dining Indian restaurant specializes in premium tandoori preparations, aromatic biryani, and traditional 
                curries prepared by experienced chefs using the finest ingredients. We believe that serving the best Indian food in Little Rock 
                means honoring authentic culinary traditions while providing exceptional hospitality.
              </p>

              <p>
                Whether you're looking for a family-friendly restaurant or a fine dining experience, our Indian restaurant in Little Rock 
                offers a warm, welcoming atmosphere perfect for celebrations, casual dinners, and special occasions. 
                Every dish is crafted with care to deliver an unforgettable dining experience.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#782B23]">20+</h3>
                  <p className="text-sm text-[#6B5D54]">Years of Excellence</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#782B23]">100%</h3>
                  <p className="text-sm text-[#6B5D54]">Authentic Recipes</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#782B23]">5000+</h3>
                  <p className="text-sm text-[#6B5D54]">Happy Customers</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <article className="bg-white p-8 rounded-lg border border-[#E8DDD5] hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-[#782B23] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
              Local Trust
            </h3>
            <p className="text-[#6B5D54] leading-relaxed">
              As the trusted Indian restaurant in Little Rock, we've built our reputation on quality, authenticity, 
              and genuine commitment to our community's satisfaction.
            </p>
          </article>

          <article className="bg-white p-8 rounded-lg border border-[#E8DDD5] hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-[#782B23] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
              Fresh Ingredients
            </h3>
            <p className="text-[#6B5D54] leading-relaxed">
              Our authentic Indian restaurant uses only the freshest, highest-quality ingredients to prepare 
              traditional North Indian and South Indian dishes with exceptional taste.
            </p>
          </article>

          <article className="bg-white p-8 rounded-lg border border-[#E8DDD5] hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-[#782B23] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
              Family Experience
            </h3>
            <p className="text-[#6B5D54] leading-relaxed">
              Our family-friendly Indian restaurant in Little Rock provides a welcoming environment where everyone 
              can enjoy premium fine dining and authentic Indian cuisine.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
