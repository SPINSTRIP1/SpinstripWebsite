import Image from "next/image";

export default function ContactUs({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div
      style={{
        backgroundImage: "url('/bg-2.png')",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#FFFFFF",
      }}
      id="contact-us"
      className="flex mx-auto w-full lg:max-w-296 md:bg-size-[205%] lg:bg-size-[115%] rounded-3xl lg:pl-20 md:p-0 md:pl-5 p-5 justify-between"
    >
      <div className="lg:max-w-130.25 flex flex-col justify-between h-auto pt-10 pb-5">
        <div>
          <h1 className="text-4xl md:text-[48px] leading-[120%] text-primary-text font-medium">
            {title || "Get early access to everything everywhere"}
          </h1>
          <p className="text-xl font-medium text-secondary-text text-pretty mt-4 mb-7">
            {description ||
              "Be among the first to explore, book and pay all in one app."}
          </p>
          <div className="liquid-glass rounded-3xl md:w-80.75 py-1 px-2 border border-white/70 shadow-lg shadow-white/30 flex gap-x-4 ">
            <input
              placeholder="Enter your Email"
              className="w-full h-full flex-1 pt-2 outline-none bg-transparent text-sm text-primary-text placeholder:text-secondary-text"
            />
            <button className="bg-primary font-bold text-xs rounded-3xl px-2 py-2 text-white flex items-center gap-x-2">
              Join the Waitlist
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-x-4 mt-6 md:mt-4">
          <Image
            src={"/logo.png"}
            className="w-27 md:w-28.25 h-8 md:h-8.75  object-contain"
            width={300}
            height={100}
            alt="Logo"
          />
          <a href="#">
            <Image
              src={"/Play.png"}
              alt="Play store"
              width={200}
              height={200}
              className="w-26 md:w-30 h-8 md:h-10"
            />
          </a>
          <a href="#">
            <Image
              src={"/App.png"}
              alt="App store"
              width={200}
              height={200}
              className="w-26 md:w-30 h-8 md:h-10"
            />
          </a>
        </div>
      </div>
      <Image
        src={"/32.png"}
        className="lg:w-155.25 lg:h-113.25 w-120 h-80 hidden md:inline-block object-cover"
        alt="Phones"
        width={900}
        height={500}
      />
    </div>
  );
}
