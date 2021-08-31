import React from "react";
import {
  Container,
  ChildContainer,
  ButtonsContainer,
  CaretLeft,
  CaretRight,
  SlideBar
} from "./sshowstyles";

let globTimer = null;

const SlideShow = ({
  withTimer = { isTimer: false, timeDelay: 5000 },
  children,
  height = "280px"
}) => {
  const slideModel = Array(children.length).fill(false);
  const [slides, setSlides] = React.useState(() => {
    const fromModel = [...slideModel];
    fromModel[0] = true;
    return fromModel;
  });
  const currentSlide = slides.indexOf(true);

  const onChangeSlide = (slide) => () => {
    setSlides(() => {
      const fromModel = [...slideModel];
      fromModel[slide] = true;
      return fromModel;
    });
  };

  const timerChange = () => {
    let timerSlide = currentSlide;
    return setInterval(() => {
      if (timerSlide === slides.length - 1) {
        timerSlide = 0;
      } else {
        timerSlide += 1;
      }
      onChangeSlide(timerSlide)();
    }, withTimer.timeDelay);
  };

  React.useEffect(() => {
    if (withTimer.isTimer) {
      clearInterval(globTimer);
      globTimer = timerChange();
    }
  }, [currentSlide]);

  return (
    <Container baseHeight={height}>
      <ChildContainer slides={slides} currentSlide={currentSlide}>
        {children}
      </ChildContainer>
      <CaretLeft
        onClick={onChangeSlide(currentSlide === 0 ? 0 : currentSlide - 1)}
      />
      <CaretRight
        onClick={onChangeSlide(
          currentSlide === children.length - 1
            ? children.length - 1
            : currentSlide + 1
        )}
      />
      <ButtonsContainer>
        {children.map((_, i) => (
          <SlideBar
            className={currentSlide === i && "active"}
            onClick={onChangeSlide(i)}
            key={`slide_map_${i}`}
          />
        ))}
      </ButtonsContainer>
    </Container>
  );
};

export default SlideShow;
