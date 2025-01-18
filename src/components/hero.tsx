import ButtonPrimary, { ButtonOutline } from "./button";

export default function Hero() {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center">
            <figure className="img-box w-9 h-9 rounded-lg mr-2 ">
              <img
                src="img/logo.webp"
                alt=""
                width={40}
                height={40}
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 max-2-[15ch] sm:max-w-[20ch] lg:max-2-[15ch] mt-5 mb-8 lg:mb-10 ">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" href="/cv.pdf" />
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="mt-10 items-center  md:mt-0">
          <figure className=" w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-purple-300 to-65% rounded-[60px] overflow-hidden">
            <img
              src="img/logo.webp"
              alt=""
              className="w-full"
              width={656}
              height={800}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
