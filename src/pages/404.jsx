import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-[50vh] flex flex-col gap-4 justify-center items-center text-xl">
      <p>Error Page Not Found!</p>
      <Link className="text-cyan-700" href="/">
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
