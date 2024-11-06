"use client";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "O software facilitou nossa análise de dados e reduziu custos significativamente!",
    imageSrc: '/assets/avatar-1.png',
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Agora analisamos dados facilmente e economizamos nos lançamentos. Excelente!",
    imageSrc: '/assets/avatar-2.png',
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "Dashboard automático revolucionou nossa empresa. Simples e econômico!",
    imageSrc: '/assets/avatar-3.png',
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "Facilidade na análise e redução de custos. Software indispensável!",
    imageSrc: '/assets/avatar-4.png',
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Analisar dados nunca foi tão fácil e econômico. Recomendo!",
    imageSrc: '/assets/avatar-5.png',
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "Economizamos tempo e dinheiro com este software de dashboards automáticos.",
    imageSrc: '/assets/avatar-6.png',
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Facilita nossas decisões com dados claros e redução de custos",
    imageSrc: '/assets/avatar-7.png',
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "Software incrível: análise simples e custos menores nos lançamentos.",
    imageSrc: '/assets/avatar-8.png',
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Melhoramos nossas análises e reduzimos custos com este software eficiente!",
    imageSrc: '/assets/avatar-9.png',
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }, index) => (
            <div key={index} className="card">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <img
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Depoimentos</div>
          </div>
          <h2 className="section-title mt-5">O que os usuários dizem</h2>
          <p className="section-description mt-5">
            De facilidade ao analisar os dados, a redução de custos de tráfego
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
