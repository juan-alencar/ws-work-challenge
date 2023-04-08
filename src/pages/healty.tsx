import Image from "next/image";

import Pills from "../assets/Pills.png";
import Apples from "../assets/Apples.png";
import WaterGlass from "../assets/WaterGlass.png";
import {
  CardLg,
  CardMd,
  CardSm,
  Carousel,
  Container,
  Section,
} from "@/styles/Pages/healty";
import { Button } from "@/styles/components/button";
import { UilShoppingCart, UilDollarSign } from "@iconscout/react-unicons";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRef } from "react";
import useWindowSize from "@/hooks/useWindowsSize";

export default function Healty() {
  const windowSize = useWindowSize();

  const carouselResponsiveness = (width: number | undefined) => {
    let slidesPerView = 3;
    if (width !== undefined) {
      switch (true) {
        case width > 1500:
          slidesPerView = 5;
          break;
        case width > 1300:
          slidesPerView = 4;
          break;
        case width > 768:
          slidesPerView = 3;
          break;
        case width > 500:
          slidesPerView = 2;
          break;
        default:
          slidesPerView = 1;
      }
    }
    return slidesPerView;
  };

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: carouselResponsiveness(windowSize.width),
      spacing: 48,
    },
  });

  const array = [1, 2, 3, 4, 5];

  return (
    <Container>
      <CardLg>
        <Image src={Pills} alt='' width={340} height={200} />
        <div>
          <h1>Omega 3 Pills</h1>
          <h2>Only $9,99</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            debitis cupiditate aut repellendus molestias enim blanditiis quo
            quis explicabo vero eaque rerum sequi accusantium omnis numquam, cum
            quidem suscipit odio.
          </p>
          <Button>
            <UilDollarSign /> BUY NOW
          </Button>
        </div>
      </CardLg>

      <Carousel ref={sliderRef} className='keen-slider'>
        {array.map((item) => (
          <CardSm key={item} className='keen-slider__slide'>
            <Image src={Pills} alt='' width={340} height={200} />
            <div>
              <h1>
                Omega 3 Pills
                <span>Only $9,99</span>
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Button size={"sm"}>
                <UilShoppingCart /> ADD TO CART
              </Button>
            </div>
          </CardSm>
        ))}
      </Carousel>

      <Section>
        <CardMd>
          <Image src={Apples} alt='' width={220} height={300} />
          <div>
            <div>
              <h1>Apples</h1>
              <h2>Only $9,99</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <Button>
              <UilDollarSign /> BUY NOW
            </Button>
          </div>
        </CardMd>

        <CardMd>
          <span>Best Drink</span>
          <Image src={WaterGlass} alt='' width={220} height={300} />
          <div>
            <div>
              <h1>Water</h1>
              <h2>For Free</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <Button>
              <UilDollarSign /> BUY NOW
            </Button>
          </div>
        </CardMd>
      </Section>
      <p>My Costomer - All Rights not reserved - 2023</p>
    </Container>
  );
}
