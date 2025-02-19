import AnimatedTitle from "./AnimatedTitle";
import { useRef } from "react";
import gsap from "gsap";

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.2,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((y - centerY) / centerY) * -10;
    const rotateX = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.2,
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24 ">
        <p className="font-general text-sm uppercase md:text-[10px]">
          The multiversal ip world
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  src="/public/img/entrance.webp"
                  alt="entrance"
                  className="object-container"
                  ref={frameRef}
                  onMouseUp={handleMouseLeave}
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                />
              </div>
            </div>

            {/* <RoundedCorners /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
