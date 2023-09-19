import Image from "next/image";
import logo from "../public/logo.svg";
import person from "../public/person.svg";
import leaf from "../public/leaf.png";
import idea from "../public/idea.svg";
import money from "../public/money.svg";
import Link from "next/link";
import WaitlistForm from "./waitlistForm";
import Collage from "./collage";

export default function Home() {
  return (
    <main className="px-6 pt-4 font-sans font-normal text-text-100 md:px-16 md:py-4">
      <div className="flex items-center md:justify-between">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="The Startup Company"
            className="w-20 md:w-[6.25rem]"
          />
        </Link>
        <Link
          className="hidden rounded border-2 border-text-100 bg-red-fire px-4 py-3 font-bold shadow-drop transition-all hover:bg-yellow-fire active:translate-x-0.5 active:translate-y-0.5 active:shadow-none md:inline"
          href={"#waitlist"}
        >
          Join Waitlist
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-12 flex flex-col items-center text-center font-serif text-h3 font-black leading-heading md:text-h1">
          <span className="flex items-end">
            From
            <Image src={idea} className="w-12 md:w-20" alt="Idea" />
            Concept
          </span>
          <span className="flex items-center">
            to
            <Image src={money} className="w-11 md:w-[4.5rem]" alt="Money" />
            Customer
          </span>
        </h1>
        <p className="mt-2 max-w-[29rem] text-center leading-para text-text-75 md:mt-4 md:max-w-[38rem] md:text-h5">
          "We help early-stage founders validate their ideas, craft winning
          business plans, and acquire their first 100 customers. With AI-driven
          insights, a supportive community, and personalized mentorship, we
          empower you to turn your startup dream into a thriving reality."
        </p>
        <div
          className="relative w-full rounded border-2 border-text-100 bg-green-pastel px-6 pb-8 pt-6 shadow-drop md:px-16 md:pb-14 md:pt-12"
          id="waitlist"
        >
          <Image
            src={leaf}
            alt="Leaf Design"
            width={176}
            className="absolute hidden md:-top-11 md:right-6 md:block lg:right-10"
          />
          <h3 className="font-serif text-h4 leading-heading md:text-h3">
            Interested in our launch?
          </h3>
          <p className="mt-2 leading-para md:mt-4">
            Secure your spot on our waitlist,
            <br />
            We've got exciting news coming your way!
          </p>
          <WaitlistForm />
        </div>
        <Image
          src={person}
          alt="Person holding Coming Soon Board"
          width={430}
        />
        <div className="mb-16 rounded border-2 border-text-100 bg-purple-pastel px-8 py-6 font-serif text-h5 font-bold shadow-drop md:mb-32 md:px-12 md:py-8 md:text-h3">
          coming soon
        </div>
        <Collage />
      </div>
    </main>
  );
}
