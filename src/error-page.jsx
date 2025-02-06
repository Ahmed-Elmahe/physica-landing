import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen bg-base-100">
      <h1 className="font-extrabold text-white text-9xl tracking-widest">
        404
      </h1>
      <p className="absolute px-4 py-2 text-sm text-white bg-error rounded transform rotate-12">
        Page Not Found
      </p>
      <Link to="/" className="mt-8">
        <button className="relative inline-block px-8 py-3 text-sm font-medium text-error bg-base-100 border border-current group focus:outline-none focus:ring hover:text-orange-500 active:text-orange-500">
          <span className="absolute inset-0 transition-transform transform translate-x-0.5 translate-y-0.5 bg-error group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block">Go Home</span>
        </button>
      </Link>
    </main>
  );
}
