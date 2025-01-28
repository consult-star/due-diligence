import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="absolute z-50 w-full text-white py-8 px-8 md:px-32">
      <div className="flex flex-row items-center justify-center md:justify-between">
        <div className="hidden md:block">
          <Link href="/">Due Diligence - Addoha 2025</Link>
        </div>
        <div className="space-x-4 md:space-x-12">
          <Link href="/">Home</Link>
          <Link
            target="_blank"
            href="https://drive.google.com/drive/folders/1UWDPsvAcmtiYZK2gWw4TA3AUtie-DSSd"
          >
            Explore the drive
          </Link>
        </div>
      </div>
    </nav>
  );
}
