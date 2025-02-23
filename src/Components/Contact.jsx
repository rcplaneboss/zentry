import Button from "./Button"

const ImgClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-22 overflow-hidden sm:block lg:left-20 lg:w-64">
          <ImgClipBox
            clipClass="contact-clip-path-1"
            src="/public/img/contact-1.webp"
          />

          <ImgClipBox
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60 z-10"
            src="/public/img/contact-2.webp"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80 z-10">
          <ImgClipBox
            clipClass="absolute md:scale-125"
            src="/public/img/swordman-partial.webp"
          />
          <ImgClipBox
            clipClass="sword-man-clip-path md:scale-125"
            src="/public/img/swordman.webp"
          />
        </div>

              <div className="flex flex-col items-center text-center z-50">
                <p className="font-general text-[10px]  uppercase">Join zentry</p>

                <p className="special-font mt-10 w-full font-zentry text-5xl leading-[.9] md:text-[6rem]">Let's b<b>u</b>ild the <br/> new era of g<b>a</b>ming <br/> t<b>o</b>gether</p>


                  <Button title="Contact Us" containerClass='mt-10 cursor-pointer' />
              </div>
      </div>
    </div>
  );
};

export default Contact;
