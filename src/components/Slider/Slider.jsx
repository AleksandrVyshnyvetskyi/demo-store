import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const KeenSlider = ({item1, item2, item3, item4}) => {
    const [sliderRef] = useKeenSlider({
      loop: true,
      slides: { perView: 1 },
      created: (slider) => {
        let timeout;
        let run = () => {
          timeout = setTimeout(() => {
            slider.next();
            run();
          }, 9000);
        };
        run();
      },
    });
  
    return (
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">{item1}</div>
        <div className="keen-slider__slide">{item2}</div>
        <div className="keen-slider__slide">{item3}</div>
        <div className="keen-slider__slide">{item4}</div>
      </div>
    );
  };


  export default KeenSlider