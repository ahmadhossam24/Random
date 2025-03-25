import buyer from "../assets/buyer.png"
import seller from "../assets/seller.png"
import median from "../assets/median.png"
// App.jsx
import React, { useState } from 'react';
import Background from "../components/carousel_page_bg";
import LeftSection from "../components/carousel_page_data_section";
import ImageCarousel from "../components/carousel_page_imgs_carousel";
import Pagination from "../components/carousel_page_pagination";

export const dataItems = [
  {
    id: 0,
    uniqueId:0,
    background: buyer,
    image: buyer,
    title: 'عنوان ١',
    subtitle: 'عنوان فرعي ١',
    paragraph: 'هذا نص الفقرة الأولى.',
    subtitle2: 'عنوان فرعي ٢',
    listItems: ['عنصر ١', 'عنصر ٢', 'عنصر ٣'],
    detailsUrl: '/details/0',
  },
  {
    id: 1,
    uniqueId:1,
    background: seller,
    image: seller,
    title: 'عنوان ٢',
    subtitle: 'عنوان فرعي ٢',
    paragraph: 'هذا نص الفقرة الثانية.',
    subtitle2: 'عنوان فرعي ٢',
    listItems: ['عنصر أ', 'عنصر ب', 'عنصر ج'],
    detailsUrl: '/details/1',
  },
  {
    id: 2,
    uniqueId:2,
    background: median,
    image: median,
    title: 'عنوان ٣',
    subtitle: 'عنوان فرعي ٣',
    paragraph: 'هذا نص الفقرة الثالثة.',
    subtitle2: 'عنوان فرعي ٣',
    listItems: ['بند أ', 'بند ب', 'بند ج'],
    detailsUrl: '/details/2',
  },
  {
    id: 3,
    uniqueId:0,
    background: buyer,
    image: buyer,
    title: 'عنوان ١',
    subtitle: 'عنوان فرعي ١',
    paragraph: 'هذا نص الفقرة الأولى.',
    subtitle2: 'عنوان فرعي ٢',
    listItems: ['عنصر ١', 'عنصر ٢', 'عنصر ٣'],
    detailsUrl: '/details/0',
  },
  {
    id: 4,
    uniqueId:1,
    background: seller,
    image: seller,
    title: 'عنوان ٢',
    subtitle: 'عنوان فرعي ٢',
    paragraph: 'هذا نص الفقرة الثانية.',
    subtitle2: 'عنوان فرعي ٢',
    listItems: ['عنصر أ', 'عنصر ب', 'عنصر ج'],
    detailsUrl: '/details/1',
  },
  {
    id: 5,
    uniqueId:2,
    background: median,
    image: median,
    title: 'عنوان ٣',
    subtitle: 'عنوان فرعي ٣',
    paragraph: 'هذا نص الفقرة الثالثة.',
    subtitle2: 'عنوان فرعي ٣',
    listItems: ['بند أ', 'بند ب', 'بند ج'],
    detailsUrl: '/details/2',
  }
];

function UserTypesCarouselPage() {
  // Manage the carousel order (first item is the chosen one)
  const [carouselOrder, setCarouselOrder] = useState(dataItems);
  // translateX state to animate the carousel-track (in pixels)
  const [translateX, setTranslateX] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  const [textAnimating, setTextAnimating] = useState(false);
  const [scalingId, setScalingId] = useState(null);
  const [noTransition, setNoTransition] = useState(false);

  const ITEM_WIDTH = 320;// random value but works!

  const handleSelect = (index) => {
    // If the clicked item is already chosen or an animation is in progress, do nothing.
    if (index === 0 || animating) return;
    setAnimating(true);
    setTextAnimating(true);
    // Store clicked item ID for scaling
    setScalingId(carouselOrder[index].id);

    if(window.matchMedia("(max-width: 1010px)").matches){// if screen width less than 1010 px
      setTranslateX(-index * ITEM_WIDTH*0.815);
    }else if(window.matchMedia("(max-width: 1170px)").matches){// if screen width less than 1170 px
      setTranslateX(-index * ITEM_WIDTH*0.92);
    }else if(window.matchMedia("(max-width: 1280px)").matches){// if screen width less than 1280 px
      setTranslateX(-index * ITEM_WIDTH*1);
    }else{//if screen width more than 1280 px
      // Animate the carousel-track by sliding left by index * ITEM_WIDTH
      setTranslateX(-index * ITEM_WIDTH*1.100);
    }

    // After animation completes, reorder the carousel so that the clicked item becomes first.
    setTimeout(() => {
      setNoTransition(true); // Temporarily disable transitions
      const newOrder = carouselOrder.slice(index).concat(carouselOrder.slice(0, index));
      setCarouselOrder(newOrder);
      // Reset transform
      setTranslateX(0);
      setTextAnimating(false);
      setAnimating(false);
      setScalingId(null); // Reset scaling state
      setTimeout(() => {
        setNoTransition(false); // Re-enable transitions
      }, 50); // Slight delay to ensure transition is properly disabled
    }, 500); // Duration matches the CSS transition (0.5s)
  };

  return (
    <div className="carousel-page">
      <Background backgroundImage={carouselOrder[0].background} />

      <div className="content">
        <div className="sections">
          <LeftSection item={carouselOrder[0]} animateText={textAnimating} />
          <ImageCarousel items={carouselOrder} translateX={translateX} onSelect={handleSelect} scalingId={scalingId} noTransition={noTransition}/>
        </div>
        <Pagination originalItems={dataItems.slice(0, 3)} currentId={carouselOrder[0].id % 3} carouselOrder={carouselOrder} onSelect={handleSelect} />
      </div>
    </div>
  );
}

export default UserTypesCarouselPage;


