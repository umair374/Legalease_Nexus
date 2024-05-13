import React from "react";
import {
  Home,
  BlogPage,
  BlogContentPage,
  AboutContentPage,
  ArticlePage,
  FaqContent,
  FaqVideoContent,
  PricingContent,
  SigninPage,
  CheckoutContent,
  MembershipContent,
} from "../src/pages";
import { Success, Cancel, Legaldocs, BookCard, BookSearch } from "./components";
import useFetch from "./hooks/useFetch";
import { Routes, Route } from "react-router-dom";
import "@stripe/stripe-js";

export default function App() {
  const { loading, data, error } = useFetch(
    "http://localhost:1337/api/blogs?populate=*"
  );

  if (loading) return <p>Loading...</p>;

  if (error) {
    return (
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="/" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </main>
    );
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutContentPage />} />
        <Route path="/blog" element={<BlogPage blogs={data} />} />
        <Route path="/blog/:id" element={<BlogContentPage blogs={data} />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/faqs" element={<FaqContent />} />
        <Route path="/faqvideoseries" element={<FaqVideoContent />} />
        <Route path="/subscriptionbox/pricing" element={<PricingContent />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/checkout" index element={<CheckoutContent />} />
        <Route path="success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/membership" element={<MembershipContent />} />
        <Route path="/legaldocuments" element={<Legaldocs />} />
        <Route path="/books" element={<BookSearch />} />
        <Route path="/bookinfo" element={<BookCard />} />
      </Routes>
    </div>
  );
}
