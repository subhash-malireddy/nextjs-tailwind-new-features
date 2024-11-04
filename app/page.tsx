import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/app/ui/home.module.scss";
import { noNswNovice } from "./ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-skin-fill-accent-base p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col justify-center gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-skin-fill-secondary-default px-6 py-10 md:px-20">
          <div className="relative h-0 w-0 border-b-[26px] border-l-[15px] border-r-[15px] border-b-[var(--color-text-base)] border-l-transparent border-r-transparent" />
          <p
            className={`text-xl text-skin-base md:text-3xl md:leading-normal ${noNswNovice.className}`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="underline">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-skin-fill-accent-base px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-skin-fill-accent-hover md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        {/* Hero Images */}
        {/* <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div> */}
      </div>
    </main>
  );
}
