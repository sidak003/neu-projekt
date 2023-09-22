import Image from "next/image";
import logo from "../public/logo.svg";
import person from "../public/assets/person.svg";
import leaf from "../public/assets/leaf.png";
import idea from "../public/assets/idea.svg";
import money from "../public/assets/money.svg";
import { RiInstagramLine, RiLinkedinFill, RiMailLine } from "react-icons/ri";
import Link from "next/link";
import WaitlistForm from "./waitlistForm";
import Collage from "./collage";

export default function Home() {
  return (
    <main className="px-6 pt-4 font-sans font-normal text-text-100 md:px-16">
      <div className="flex items-center md:justify-between">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="The Startup Company"
            className="w-20 md:w-[6.25rem]"
          />
        </Link>
        <Link
          className="invisible relative rounded-sm border-2 border-text-100 bg-red-fire px-4 py-3 font-bold shadow-drop-mini transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none md:visible"
          href={"#waitlist"}
        >
          {" "}
          Join Waitlist
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-12 flex flex-col items-center text-center font-serif text-h3 font-black leading-heading md:text-h1">
          <span className="flex items-end">
            From
            <Image
              src={idea}
              className="w-12 md:w-20"
              alt="Idea"
              draggable={false}
            />
            Concept
          </span>
          <span className="flex items-center">
            to
            <Image
              src={money}
              className="w-11 md:w-[4.5rem]"
              alt="Money"
              draggable={false}
            />
            Customer
          </span>
        </h1>
        <p className="mt-2 max-w-[29rem] text-center leading-para text-text-75 md:mt-4 md:max-w-[38rem] md:text-h5">
          &ldquo;We help early-stage founders validate their ideas, craft
          winning business plans, and acquire their first 100 customers.&rdquo;
        </p>
        <div className="mt-8 flex w-full max-w-xs flex-col gap-4 md:mt-12 md:w-max md:max-w-max md:flex-row md:gap-12">
          <div className="max-w-5xl rounded-sm border-2 border-text-100 px-4 py-3 text-center font-semibold md:px-6 md:py-4 md:text-h5">
            Coming Fall 2023
          </div>
          <Link
            className="relative rounded-sm border-2 border-text-100 bg-red-fire px-4 py-3 text-center font-bold shadow-drop-mini transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none md:px-6 md:py-4 md:text-h5"
            href={"#waitlist"}
          >
            <div className="absolute -right-[10px] -top-[10px] h-5 w-5 rounded-full border-2 border-text-100 bg-green-fire md:-right-3 md:-top-3 md:h-6 md:w-6" />
            Join Waitlist
          </Link>
        </div>
        <h3 className="mb-8 mt-24 text-center font-serif text-h4 md:mb-16 md:mt-40 md:text-h3">
          Some Problems We Solve
        </h3>
        <Collage />
        <div
          className="relative mt-24 w-full rounded border-2 border-text-100 bg-green-pastel px-6 pb-8 pt-6 shadow-drop md:mt-40 md:px-16 md:pb-14 md:pt-12"
          id="waitlist"
        >
          <Image
            src={leaf}
            alt="Leaf Design"
            width={176}
            className="invisible absolute md:visible md:-top-11 md:right-6 lg:right-10"
          />
          <h3 className="font-serif text-h4 leading-heading md:text-h3">
            Interested in our launch?
          </h3>
          <p className="mt-2 leading-para md:mt-4">
            Secure your spot on our waitlist,
            <br />
            We&apos;ve got exciting news coming your way!
          </p>
          <WaitlistForm />
        </div>
        <Image
          src={person}
          alt="Person holding Coming Soon Board"
          width={430}
        />
        <div className="rounded border-2 border-text-100 bg-purple-pastel px-8 py-6 font-serif text-h5 font-bold shadow-drop-mini md:px-12 md:py-8 md:text-h3">
          Coming Fall 2023
        </div>
        <div className="mt-40 h-[1px] w-full bg-text-100" />
        <div className="flex w-full flex-col items-center justify-between gap-4 pb-8 pt-2 md:flex-row md:gap-0 md:pt-4">
          <h5 className="font-serif md:text-h5">The Startup Company</h5>
          <div className="flex items-center gap-6 md:gap-8">
            <Link
              href={"https://www.linkedin.com/company/thestartupco/"}
              target="_blank"
              className="rounded-sm border-2 border-text-100 bg-blue-pastel px-2 py-2 shadow-drop-mini transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
            >
              <RiLinkedinFill className="h-6 w-6 md:h-8 md:w-8" />
            </Link>
            <Link
              href={"https://www.instagram.com/thestartupcompany.in/"}
              target="_blank"
              className="rounded-sm border-2 border-text-100 bg-red-pastel px-2 py-2 shadow-drop-mini transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
            >
              <RiInstagramLine className="h-6 w-6 md:h-8 md:w-8" />
            </Link>
            <Link
              href={"mailto: media@thestartupcompany.in"}
              target="_blank"
              className="rounded-sm border-2 border-text-100 bg-green-pastel px-2 py-2 shadow-drop-mini transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
            >
              <RiMailLine className="h-6 w-6 md:h-8 md:w-8" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
