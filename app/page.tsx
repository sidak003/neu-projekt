import Image from "next/image";
import logo from "../public/logo.svg";
import person from "../public/person.svg";
import leaf from "../public/leaf.png";
import arrow from "../public/arrow.svg";
import heart from "../public/heart.svg";
import Link from "next/link";
import WaitlistForm from "./waitlistForm";

export default function Home() {
  return (
    <main className="bg-white px-6 pt-4 font-sans font-normal text-text-100 md:px-16 md:py-4">
      <div className="flex items-center justify-between">
        <Image src={logo} alt="Company Logo" width={100} />
        <Link
          className="rounded border-2 border-text-100 bg-red-fire px-4 py-3 font-bold shadow-drop transition-all hover:bg-yellow-fire active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          href={"#waitlist"}
        >
          Join Waitlist
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="z-10 mt-24 text-center leading-para md:mt-40">
          We aim to build the largest and most ambitious startup community in
          India
        </p>
        <h1 className="z-10 mt-2 text-center font-serif text-h3 leading-heading md:mt-4 md:text-h1">
          Join the Startup Revolution
          <br />
          Where Visionaries Unite
        </h1>
        <div className="relative h-40 w-40 md:h-52 lg:w-3/5">
          <Image
            src={arrow}
            alt="An Arrow pointing to waitlist"
            fill
            className="object-contain object-left"
          />
        </div>
        <Image
          src={heart}
          alt="A Heart"
          className="absolute right-5 top-48 h-20 w-20 md:right-40 md:top-60 md:h-28 md:w-28"
        />
        <div
          className="relative w-full rounded border-2 border-text-100 bg-cyan-pastel px-6 pb-8 pt-6 shadow-drop md:px-16 md:pb-14 md:pt-12"
          id="waitlist"
        >
          <Image
            src={leaf}
            alt="Leaf Design"
            width={176}
            className="absolute hidden md:-top-11 md:right-6 md:block lg:right-10"
          />
          <h3 className="font-serif text-h4 leading-heading md:text-h3">
            Join our Exclusive Waitlist
          </h3>
          <p className="mt-2 leading-para md:mt-4">
            Ready to dive into the startup revolution?
            <br />
            Secure your spot on our waitlist and be part of the future.
          </p>
          <WaitlistForm />
        </div>
        <Image
          src={person}
          alt="Person holding Coming Soon Board"
          width={430}
        />
        <div className="mb-16 rounded border-2 border-text-100 bg-green-pastel px-8 py-6 font-serif text-h5 font-bold shadow-drop md:mb-32 md:px-12 md:py-8 md:text-h3">
          coming soon
        </div>
      </div>
    </main>
  );
}
