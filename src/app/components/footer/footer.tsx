import FeatherIcon from "feather-icons-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-8 md:p-16 bg-black text-white flex flex-col md:flex-row items-center gap-4 w-full md:text-start">
      <div className="font-medium">This Work was Compiled By</div>
      <div className="flex flex-col md:flex-row w-full items-center justify-evenly text-start">
        <Link
          target="_blank"
          className="flex w-full md:w-fit gap-4 items-center justify-between text-sm md:text-base"
          href={"https://ma.linkedin.com/in/mohammed-anass-touzani"}
        >
          TOUZANI Mohammed Anass
          <FeatherIcon icon="arrow-up-right" />
        </Link>
        <Link
          target="_blank"
          className="flex w-full md:w-fit gap-4 items-center justify-between text-sm md:text-base"
          href={"https://ma.linkedin.com/in/hidaya-tlemcani"}
        >
          BENOUDA TLEMCANI Hidaya
          <FeatherIcon icon="arrow-up-right" />
        </Link>{" "}
        <Link
          target="_blank"
          className="flex w-full md:w-fit gap-4 items-center justify-between text-sm md:text-base"
          href={"https://ma.linkedin.com/in/omar-moulay-berkchi-8a4422250"}
        >
          MOULAY BERKCHI Omar
          <FeatherIcon icon="arrow-up-right" />
        </Link>
      </div>
    </footer>
  );
}
