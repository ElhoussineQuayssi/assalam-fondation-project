import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";



export default function ScrollBar({images}) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full mx-auto p-4">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        <ChevronLeft size={24} />
      </button>
      
      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((event) => (
          <div key={event.id} className="min-w-[250px]">
            <img src={event} alt="Event" className="w-full h-40 object-cover" />
          </div>
        ))}
      </div>
      
      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
