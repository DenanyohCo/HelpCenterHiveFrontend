import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto text-center px-4 lg:px-40 py-4 h-12 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-col items-center space-y-3 sm:mb-0 mb-3 border-gray-200">
      <div className="text-center text-gray-500">
        Built with love in Columbus, Ohio by {" "}
        <Link
          className="text-blue-600 hover:underline font-bold"
          href="https://www.linkedin.com/in/theodenanyoh"
          target="_blank"
        >
          Theo Denanyoh.{" "}
        </Link>
      </div>
      <div className="text-center text-gray-500">
        Powered by{" "}
        <Link
          className="text-blue-600 hover:underline font-bold"
          href="https://nextjs.org/"
          target="_blank"
        >
          NextJS,{" "}
        </Link>
        <Link
          className="text-blue-600 hover:underline font-bold"
          href="https://nextui.org/"
          target="_blank"
        >
          NextUI,{" "}
        </Link>
        and{" "}
          <Link
            className="text-blue-600 hover:underline font-bold"
            href="https://strapi.io/"
            target="_blank"
          >
            Strapi.
          </Link>
      </div>
    </footer>
  );
}