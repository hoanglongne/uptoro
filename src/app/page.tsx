"use client"

import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import placeholder1 from "../asset/placeholder/placeholder1.png"
import udhc from "../asset/img/udhc.avif"
import coinbase from "../asset/img/coinbase.avif"
import defy from "../asset/img/defy.avif"
import featureLeft from "../asset/img/feature-left.avif"
import reward from "../asset/img/reward.avif"
import realtime from "../asset/img/realtime.avif"
import category1 from "../asset/img/category1.avif"
import category2 from "../asset/img/category2.avif"
import category3 from "../asset/img/category3.avif"
import team1 from "../asset/img/team1.avif"
import team2 from "../asset/img/team2.avif"
import team3 from "../asset/img/team3.avif"
import liveleft from "../asset/img/liveleft.webp"
import { useState } from "react"
import React from "react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedTextVisible, setAnimatedTextVisible] = useState(false);
  const [learnMoreButton1Visible, setLearnMoreButton1Visible] = useState(false);
  const [learnMoreButton2Visible, setLearnMoreButton2Visible] = useState(false);
  const [learnMoreButton3Visible, setLearnMoreButton3Visible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Ref for the animated text section
  const animatedTextRef = React.useRef(null);
  const learnMoreButton1Ref = React.useRef(null);
  const learnMoreButton2Ref = React.useRef(null);
  const learnMoreButton3Ref = React.useRef(null);

  // Set up intersection observer for animation
  React.useEffect(() => {
    const createObserver = (ref: React.RefObject<HTMLElement>, setVisibleFunc: React.Dispatch<React.SetStateAction<boolean>>) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibleFunc(entry.isIntersecting);
        },
        { threshold: 0.1, rootMargin: "0px" }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    };

    const textObserver = createObserver(animatedTextRef, setAnimatedTextVisible);
    const button1Observer = createObserver(learnMoreButton1Ref, setLearnMoreButton1Visible);
    const button2Observer = createObserver(learnMoreButton2Ref, setLearnMoreButton2Visible);
    const button3Observer = createObserver(learnMoreButton3Ref, setLearnMoreButton3Visible);

    return () => {
      if (animatedTextRef.current) textObserver.unobserve(animatedTextRef.current);
      if (learnMoreButton1Ref.current) button1Observer.unobserve(learnMoreButton1Ref.current);
      if (learnMoreButton2Ref.current) button2Observer.unobserve(learnMoreButton2Ref.current);
      if (learnMoreButton3Ref.current) button3Observer.unobserve(learnMoreButton3Ref.current);
    };
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const headerHeight = 80;

    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY < headerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const carouselSlides = [
    {
      image: (
        <div className="flex items-center justify-center h-full">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute left-1/2 transform -translate-x-36">
              <div className="w-20 h-20 rounded-full border-[7px] border-white opacity-90 relative"></div>
              <div className="w-20 h-20 rounded-full border-[7px] border-white opacity-90 absolute -top-4 -left-4"></div>
              <div className="w-20 h-20 rounded-full border-[7px] border-white opacity-90 absolute top-4 -left-8"></div>
            </div>

            <div className="h-44 w-2 bg-white opacity-90 absolute"></div>

            <div className="absolute left-1/2 transform translate-x-12">
              <div className="w-20 h-20 rounded-full border-[7px] border-white opacity-90 relative"></div>
              <div className="w-20 h-20 rounded-full border-[7px] border-white opacity-90 absolute -top-4 left-4"></div>
              <div className="w-20 h-20 rounded-full border-[7px] border-white opacity-90 absolute top-4 left-8"></div>
            </div>
          </div>
        </div>
      ),
      title: "Your funds are yours",
      description: "Withdraw anytime, no penalties or lockups. Your money always stays in your control."
    },
    {
      image: (
        <div className="flex items-center justify-center h-full">
          <div className="w-28 h-28 rounded-full bg-[#f25d9c] flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        </div>
      ),
      title: "Earn higher interest",
      description: "Get 3x the rate of traditional savings accounts with daily interest payouts."
    },
    {
      image: (
        <div className="flex items-center justify-center h-full">
          <div className="relative">
            <div className="w-32 h-16 bg-white rounded-lg opacity-90 flex items-center justify-center relative">
              <div className="absolute bg-[#f25d9c] w-8 h-8 rounded-full -right-2 -top-2 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
            <div className="w-32 h-16 bg-white rounded-lg opacity-90 absolute top-6 left-4"></div>
            <div className="w-32 h-16 bg-white rounded-lg opacity-90 absolute top-12 left-8"></div>
          </div>
        </div>
      ),
      title: "Simple and secure",
      description: "Your deposits are fully secured and protected with bank-level security."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col">
        <section className="py-4 md:py-[24px] bg-white">
          <div className="container max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex flex-col gap-[16px] pb-6 md:pb-10">
                <div className="flex flex-col">
                  <h1 className="text-[28px] sm:text-[32px] md:text-[42px] font-[700] text-[#0c056c] tracking-tighter">A savings app with a higher rate</h1>
                  <p className="text-lg sm:text-xl md:text-[20px] text-[#0c056c] font-[700]">Earn 3x the rate of your bank account</p>
                </div>
                <div className="hidden sm:flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="#how-it-works" className="inline-flex">
                    <button className="rounded-full bg-[#f1f1f1] hover:bg-gray-100 px-6 py-2.5 text-sm font-bold text-[16px] text-[#0c056c] flex items-center gap-1">
                      Learn more
                      <div className="w-5 h-5 rounded-full font-black flex items-center justify-center">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                      </div>
                    </button>
                  </a>

                  <a href="/sign-up" className="inline-flex">
                    <button className="rounded-full bg-[#f25d9c] text-white hover:bg-[#f25d9c]/90 px-6 py-2.5 text-[16px] font-bold flex items-center">
                      Join waitlist
                      <svg className="ml-2 h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>

              <div className="flex w-full flex-col gap-[16px]">
                <div className="w-full mb-12">
                  <div className="bg-[#FBFBFB] rounded-[24px]">
                    <div className="relative mx-auto">
                      <div className="relative rounded-[32px] overflow-hidden z-10">
                        <Image
                          src={placeholder1}
                          alt="Nook App Interface"
                          className="w-full"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                  <p className="text-xl font-medium text-black">Backed by</p>
                  <div className="flex flex-wrap justify-center gap-8">
                    <Image
                      src={defy}
                      alt="Backed by defy"
                      width={140}
                      height={48}
                      className="h-7 w-auto object-contain"
                    />
                    <Image
                      src={udhc}
                      alt="Backed by a16z"
                      width={140}
                      height={48}
                      className="h-7 w-auto object-contain"
                    />
                    <Image
                      src={coinbase}
                      alt="Backed by coinbase ventures"
                      width={140}
                      height={48}
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Carousel Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <Image
                  src={featureLeft}
                  alt="Smarter way to save"
                  className="w-full rounded-2xl"
                  priority
                />
              </div>

              <div className="flex flex-col order-1 md:order-2 mb-8 md:mb-0">
                <div className="relative h-full flex flex-col justify-center">
                  <div className="bg-[#FBFBFB] p-4 sm:p-6 md:p-8 rounded-[24px] max-w-[480px] mx-auto md:ml-auto md:mr-4">
                    <div className="mb-4 relative bg-[#e6e6e6] aspect-video rounded-xl flex items-center justify-center overflow-hidden h-[180px] sm:h-[220px] w-full">
                      {carouselSlides[currentSlide].image}
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        {carouselSlides.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`rounded-full transition-all ${index === currentSlide
                              ? "w-6 sm:w-8 h-2 bg-[#0c056c]"
                              : "w-2 h-2 bg-gray-300"
                              }`}
                          ></button>
                        ))}
                      </div>

                      <button onClick={nextSlide} className="p-1">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#0c056c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>

                    <div className="text-left">
                      <h2 className="text-[22px] sm:text-[26px] font-bold mb-1 text-[#0c056c]">{carouselSlides[currentSlide].title}</h2>
                      <p className="text-[#0c056c] text-sm sm:text-base font-medium">
                        {carouselSlides[currentSlide].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Full Layout */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4 md:px-8">
            {/* Top stat */}
            <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-16">
              <h2 className="text-[42px] sm:text-[56px] md:text-[72px] font-bold text-black mb-1 tracking-tight">$638,482,746</h2>
              <p className="text-gray-600 flex items-center justify-center gap-1 text-sm sm:text-base">
                in assets on
                <span className="font-bold text-black flex items-center">
                  Moonwell
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.2" />
                    <path d="M8 3.5V8L10.5 10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </p>
            </div>

            {/* Upper stats row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-[#f9f9f9] py-8 px-6 rounded-3xl">
                <div className="flex flex-col items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f2f2f2] flex items-center justify-center mb-5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-[32px] font-bold mb-1">258,036</h3>
                  <p className="text-gray-400">successful transactions</p>
                </div>
              </div>
              <div className="bg-[#f9f9f9] py-8 px-6 rounded-3xl">
                <div className="flex flex-col items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f2f2f2] flex items-center justify-center mb-5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-[32px] font-bold mb-1">12,703</h3>
                  <p className="text-gray-400">loans all in good standing</p>
                </div>
              </div>
              <div className="bg-[#f9f9f9] py-8 px-6 rounded-3xl">
                <div className="flex flex-col items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f2f2f2] flex items-center justify-center mb-5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-[32px] font-bold mb-1">$250,000</h3>
                  <p className="text-gray-400">bug bounty by Halborn</p>
                </div>
              </div>
            </div>

            {/* Center placeholder image */}
            <div className="w-full rounded-3xl overflow-hidden mb-10 aspect-[16/9] bg-gray-100 flex items-center justify-center">
              <p className="text-gray-400">Lifestyle Image Placeholder</p>
            </div>

            {/* Phone screenshots row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-[#f9f9f9] flex flex-col items-center justify-between p-8 pb-0 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-600 mb-8">Rewards every 16 seconds</h3>
                <div className="flex justify-center">
                  <div className="max-w-[340px]">
                    <Image
                      src={reward}
                      alt="Rewards every 16 seconds"
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[#f9f9f9] flex flex-col items-center justify-between p-8 pb-0 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-600 mb-8">Real time projections</h3>
                <div className="flex justify-center">
                  <div className="max-w-[340px]">
                    <Image
                      src={realtime}
                      alt="Real time projections"
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom stats row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f9f9f9] py-8 md:py-14 px-4 md:px-6 rounded-3xl">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#f2f2f2] flex items-center justify-center mb-5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 22V12H15V22" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-[32px] md:text-[42px] font-bold mb-1 text-center">8.4% APY</h3>
                  <p className="text-gray-500 text-center">Average over the last 12mo</p>
                </div>
              </div>
              <div className="bg-[#f9f9f9] py-8 md:py-14 px-4 md:px-6 rounded-3xl">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#f2f2f2] flex items-center justify-center mb-5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-[32px] md:text-[42px] font-bold mb-1 text-center">3x</h3>
                  <p className="text-gray-500 text-center">Higher than your bank</p>
                </div>
              </div>
              <div className="bg-[#f9f9f9] py-8 md:py-14 px-4 md:px-6 rounded-3xl">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#f2f2f2] flex items-center justify-center mb-5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2V6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 18V22" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4.93 4.93L7.76 7.76" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.24 16.24L19.07 19.07" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 12H6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M18 12H22" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4.93 19.07L7.76 16.24" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.24 7.76L19.07 4.93" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-[32px] md:text-[42px] font-bold mb-1 text-center">$8,350,731</h3>
                  <p className="text-gray-500 text-center">In interest paid out</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Text Section */}
        <section
          ref={animatedTextRef}
          className="py-10 md:py-16 bg-white overflow-hidden"
        >
          <div className="container max-w-7xl mx-auto px-4 md:px-8 flex justify-center items-center">
            <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold text-gray-900 tracking-tight overflow-hidden text-center">
              {'Safe. Secure. 100% free to use.'.split('').map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block ${animatedTextVisible ? 'transition-all duration-150 ease-in-out' : ''}`}
                  style={{
                    opacity: animatedTextVisible ? 1 : 0,
                    transform: animatedTextVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transitionDelay: animatedTextVisible ? `${index * 15}ms` : '0ms',
                    whiteSpace: letter === ' ' ? 'pre' : 'normal',
                    fontSize: 'inherit'
                  }}
                >
                  {letter}
                </span>
              ))}
            </h2>
          </div>
        </section>

        {/* How It Works Section - Updated */}
        <section className="pb-16 md:pb-24 pt-10 md:pt-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4 md:px-8">
            {/* Section 1 */}
            <div className="mb-16 md:mb-24">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start">
                <div className="md:col-span-3 mb-10 md:mb-0">
                  <div className="text-gray-400 text-base">0.1</div>

                  <h2 className="text-[24px] sm:text-[28px] font-bold mb-2">Convert your cash to a stablecoin</h2>
                  <p className="text-gray-800 mb-6 md:mb-10 text-base leading-tight">
                    Nook partners with Coinbase—our trusted payment provider—to convert your funds into USDC, a stablecoin pegged 1:1 to the U.S. dollar, enabling lending across crypto protocols.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6 sm:gap-0">
                    <button
                      ref={learnMoreButton1Ref}
                      className={`rounded-full bg-[#f1f1f1] hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-[16px] sm:text-[18px] text-[#0c056c] flex items-center gap-1 mx-auto sm:mx-0 ${learnMoreButton1Visible ? 'transition-all duration-[3500ms] ease-in-out delay-[800ms]' : ''}`}
                      style={{
                        opacity: learnMoreButton1Visible ? 1 : 0,
                        transform: learnMoreButton1Visible ? 'translateY(0)' : 'translateY(20px)',
                        transitionProperty: learnMoreButton1Visible ? 'opacity, transform' : 'none'
                      }}
                    >
                      Learn more
                      <div className="w-5 h-5 rounded-full font-black flex items-center justify-center">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                      </div>
                    </button>
                    <div className="flex flex-col items-center justify-center w-full sm:w-auto text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">$40 billion</h3>
                      <p className="text-gray-900 font-medium text-sm sm:text-base">in USDC already in circulation</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 flex items-center justify-center">
                  <div className="bg-[#f9f9f9] p-4 rounded-3xl overflow-hidden w-full md:max-w-[320px] md:ml-auto h-[220px] sm:h-[280px]">
                    <Image
                      src={category1}
                      alt="Convert your cash to a stablecoin"
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-16 md:mb-24">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start">
                <div className="md:col-span-3 mb-10 md:mb-0">
                  <div className="text-gray-400 text-base">0.2</div>


                  <h2 className="text-[24px] sm:text-[28px] font-bold mb-2">Lend your cash</h2>
                  <p className="text-gray-800 mb-6 md:mb-10 text-base leading-tight">
                    Nook sends funds from your wallet directly to Moonwell — our trusted lending partner overseeing more than $638 million in assets. As soon as your funds are safely deposited, they begin generating rewards.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6 sm:gap-0">
                    <button
                      ref={learnMoreButton2Ref}
                      className={`rounded-full bg-[#f1f1f1] hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-[16px] sm:text-[18px] text-[#0c056c] flex items-center gap-1 mx-auto sm:mx-0 ${learnMoreButton2Visible ? 'transition-all duration-[3500ms] ease-in-out delay-[800ms]' : ''}`}
                      style={{
                        opacity: learnMoreButton2Visible ? 1 : 0,
                        transform: learnMoreButton2Visible ? 'translateY(0)' : 'translateY(20px)',
                        transitionProperty: learnMoreButton2Visible ? 'opacity, transform' : 'none'
                      }}
                    >
                      Learn more
                      <div className="w-5 h-5 rounded-full font-black flex items-center justify-center">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                      </div>
                    </button>
                    <div className="flex flex-col items-center justify-center w-full sm:w-auto text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">$638 million</h3>
                      <p className="text-gray-900 font-medium text-sm sm:text-base">under management with Moonwell</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 flex items-center justify-center">
                  <div className="bg-[#f9f9f9] rounded-3xl overflow-hidden w-full md:max-w-[320px] md:ml-auto h-[220px] sm:h-[280px]">
                    <Image
                      src={category2}
                      alt="Lend your cash"
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start">
                <div className="md:col-span-3 mb-10 md:mb-0">
                  <div className="text-gray-400 text-base">0.3</div>

                  <h2 className="text-[24px] sm:text-[28px] font-bold mb-2">Withdraw anytime</h2>
                  <p className="text-gray-800 mb-6 md:mb-10 text-base leading-tight">
                    At any point, you can withdraw your funds directly back to your Bank or Coinbase account. There are no lockups, delays or wait times.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6 sm:gap-0">
                    <button
                      ref={learnMoreButton3Ref}
                      className={`rounded-full bg-[#f1f1f1] hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-[16px] sm:text-[18px] text-[#0c056c] flex items-center gap-1 mx-auto sm:mx-0 ${learnMoreButton3Visible ? 'transition-all duration-[3500ms] ease-in-out delay-[800ms]' : ''}`}
                      style={{
                        opacity: learnMoreButton3Visible ? 1 : 0,
                        transform: learnMoreButton3Visible ? 'translateY(0)' : 'translateY(20px)',
                        transitionProperty: learnMoreButton3Visible ? 'opacity, transform' : 'none'
                      }}
                    >
                      Learn more
                      <div className="w-5 h-5 rounded-full font-black flex items-center justify-center">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                      </div>
                    </button>
                    <div className="flex flex-col items-center justify-center w-full sm:w-auto text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">258,036</h3>
                      <p className="text-gray-900 font-medium text-sm sm:text-base">successful transactions with no issues</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 flex items-center justify-center">
                  <div className="bg-[#f9f9f9] rounded-3xl overflow-hidden w-full md:max-w-[320px] md:ml-auto h-[220px] sm:h-[280px]">
                    <Image
                      src={category3}
                      alt="Withdraw anytime"
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 tracking-tight">From the team</h2>
            <p className="text-gray-400 text-base mb-10 md:mb-16">The Nook co-founders and the team behind the app</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 max-w-full sm:max-w-[95%] md:max-w-[90%]">
              <div className="flex flex-col">
                <div className="text-gray-400 text-base mb-1">01</div>
                <h3 className="text-2xl font-bold mb-4">How Nook leverages DeFi</h3>
                <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4 h-[240px]">
                  <Image
                    src={team1}
                    alt="Sohail Khanifar - Co-founder and CPO"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <p className="text-gray-800 text-base">
                  Co-founder and CPO Sohail Khanifar goes in depth to explain how DeFi lending works and how user funds are protected.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="text-gray-400 text-base mb-1">02</div>
                <h3 className="text-2xl font-bold mb-4">A better way to save</h3>
                <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4 h-[240px]">
                  <Image
                    src={team2}
                    alt="Joey Isaacson - Co-founder and CEO"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <p className="text-gray-800 text-base">
                  Co-founder and CEO Joey Isaacson walks you through the Nook app - and shows how it outperforms traditional savings accounts.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="text-gray-400 text-base mb-1">03</div>
                <h3 className="text-2xl font-bold mb-4">Who we are</h3>
                <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4 h-[240px]">
                  <Image
                    src={team3}
                    alt="Nook Team Members"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <p className="text-gray-800 text-base">
                  Joey, Kenzan and Sohail. Three former Coinbase builders with the goal to bring you a higher savings rate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="container max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 md:mb-12 tracking-tight text-gray-900">FAQ</h2>

            <div className="w-full">
              <Accordion type="multiple" className="space-y-3">
                <AccordionItem value="item-1" className="border-0 bg-transparent">
                  <AccordionTrigger className="hover:no-underline py-4 flex text-xl sm:text-2xl font-bold">
                    <h3 className="text-left text-gray-900">What is defi lending?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 text-gray-800 text-base font-medium">
                    <p className="mb-4">Decentralized Finance (DeFi) lending lets you earn interest on your money by lending it through blockchain-based protocols. Borrowers use these protocols to access funds without selling their crypto, paying an interest rate in return. Currently, over $8 billion in active loans is locked in these protocols.</p>
                    <p>Here's a <a href="#" className="underline font-medium">Blog Post</a> that dives into more details, including a current market analysis.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-0 bg-transparent">
                  <AccordionTrigger className="hover:no-underline py-4 flex text-xl sm:text-2xl font-bold">
                    <h3 className="text-left text-gray-900">How does it work?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 text-gray-800 text-base font-medium">
                    <p className="mb-4">Think of Nook as a high-yield savings account that taps into the crypto market. When you deposit money - whether through Coinbase, Apple Pay, or a debit card - your funds are pooled and then loaned out to traders or investors. They pay interest on those loans and that interest comes back to you.</p>
                    <p>This <a href="#" className="underline font-medium">blog post</a> takes a deeper look at how Nook works and walks through the user experience.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-0 bg-transparent">
                  <AccordionTrigger className="hover:no-underline py-4 flex text-xl sm:text-2xl font-bold">
                    <h3 className="text-left text-gray-900">How are such high returns possible?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 text-gray-800 text-base font-medium">
                    <p className="mb-4">It's simple supply and demand. Crypto traders often need access to liquidity for trading, tax benefits, or yield farming, and they're willing to pay higher rates for that convenience.</p>
                    <p>If the borrower is unable to repay the loan, the protocol automatically liquidates the borrower's collateral to repay the loan. That's the beauty of collateralized lending: the system is designed to protect lenders (you) and the borrowers assume the risk.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-0 bg-transparent">
                  <AccordionTrigger className="hover:no-underline py-4 flex text-xl sm:text-2xl font-bold">
                    <h3 className="text-left text-gray-900">What does security & risk management look like?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 text-gray-800 text-base font-medium">
                    <p>We implement multiple layers of security: All loans are overcollateralized (typically 150%+ of the borrowed amount), creating a safety buffer against market volatility. Moonwell's smart contracts have undergone extensive security audits and maintain a $250,000 bug bounty program with Halborn. Our team continuously monitors protocol health metrics, liquidity levels, and market conditions. By using USDC, a regulated stablecoin with transparent reserves, we minimize exposure to crypto market volatility.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-0 bg-transparent">
                  <AccordionTrigger className="hover:no-underline py-4 flex text-xl sm:text-2xl font-bold">
                    <h3 className="text-left text-gray-900">What makes Nook different from other crypto lending platforms?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 text-gray-800 text-base font-medium">
                    <p>Nook stands apart through our focus on simplicity and accessibility. We've built an intuitive interface that hides all the technical complexity of DeFi. Unlike many crypto platforms, we handle the conversion between USD and crypto seamlessly. We prioritize safety by working exclusively with audited, battle-tested protocols like Moonwell. Our team brings experience from Coinbase, combining crypto expertise with user-friendly design. Most importantly, we never lock your funds—you maintain full control and can withdraw anytime.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
              <div className="max-w-none md:col-span-2 md:-ml-28 -ml-4 sm:ml-0">
                <Image
                  src={liveleft}
                  alt="Nook App on iPhone"
                  className="w-full h-auto"
                  priority
                />
              </div>

              <div className="flex flex-col text-left md:col-span-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 tracking-tight text-gray-900">Nook is going live soon</h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 md:mb-10">Join the waitlist today as we continue to build and roll out the early beta</p>
                <div>
                  <a href="/sign-up" className="inline-flex">
                    <button className="rounded-full bg-[#f25d9c] text-white hover:bg-[#f25d9c]/90 px-6 py-2.5 text-[16px] font-bold flex items-center">
                      Join waitlist
                      <svg className="ml-2 h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <h1 className="hidden md:block text-[200px] lg:text-[274px] font-bold mt-24 tracking-tight overflow-hidden">
              UPTORO
            </h1>
          </div>
        </section>
      </main>

      {/* Mobile floating button */}
      <div className={`fixed bottom-0 left-0 right-0 sm:hidden z-50 p-4 bg-gradient-to-t from-white via-white to-transparent transition-transform duration-300 ${isHeaderVisible ? 'translate-y-full' : 'translate-y-0'}`}>
        <div className="max-w-[320px] mx-auto">
          <a href="/sign-up" className="block">
            <button className="w-full rounded-full bg-[#f25d9c] text-white hover:bg-[#f25d9c]/90 px-6 py-3 text-[16px] font-bold flex items-center justify-center">
              Join waitlist
              <svg className="ml-2 h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </>
  )
}
