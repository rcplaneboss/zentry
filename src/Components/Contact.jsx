import React from "react";

const ImgClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-22 overflow-hidden sm:block lg:left-20 lg:w-96 ">
          <ImgClipBox
            clipClass="contact-clip-path-1"
            src="/public/img/contact-1.webp"
          />

          <ImgClipBox
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
            src="/public/img/contact-2.webp"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImgClipBox
            clipClass="absolute md:scale-125"
            src="/public/img/swordman-partial.webp"
          />
          <ImgClipBox
            clipClass="sword-man-clip-path md:scale-125"
            src="/public/img/swordman.webp"
          />
        </div>

              <div className="flex flex-colitems-center text-center">
                <p className="font-general text-[10px] uppercase">Join zentry</p>

                <p></p>
              </div>
      </div>
    </div>
  );
};

export default Contact;
