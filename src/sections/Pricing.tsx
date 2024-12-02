"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";

const pricingTiers = [
  {
    title: "Iniciante",
    monthlyPrice: 97,
    buttonText: "Assinar",
    popular: false,
    inverse: false,
    features: [
      "1 subconta",
      "Até 50 mil leads",
      "Criação de dashboards",
      "Atualização automática",
    ],
    checkout: "https://buy.stripe.com/test_14k4kg8bqejz4ak5kk",
  },
  {
    title: "Avançado",
    monthlyPrice: 297,
    buttonText: "Assinar",
    popular: true,
    inverse: true,
    features: [
      "Até 5 subcontas",
      "Até 250 mil leads",
      "Criação de dashboards",
      "Atualização automática",
      "Ferramentas com IA",
      "Criador de debriefing",
    ],
    checkout: "https://buy.stripe.com/test_aEU5okdvK8ZfgX67st",
  },
  {
    title: "Empresas",
    monthlyPrice: 497,
    buttonText: "Assinar",
    popular: false,
    inverse: false,
    features: [
      "Até 20 subcontas",
      "Até 1,5M leads",
      "Criação de dashboards",
      "Atualização automática",
      "Ferramentas com IA",
      "Criador de debriefing",
    ],
    checkout: "https://buy.stripe.com/test_fZe4kgajyfnD9uEaEG",
  },
];

export const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedCheckoutUrl, setSelectedCheckoutUrl] = useState("");
  const [emailError, setEmailError] = useState("");
  const router = useRouter();
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const handleOpenModal = (checkoutUrl: string) => {
    setSelectedCheckoutUrl(checkoutUrl);
    setIsModalOpen(true);
    setEmail("");
    setEmailError("");
  };

  const handleEmailSubmit = async () => {
    if (!email.trim()) {
      setEmailError("Por favor, insira um email para continuar.");
      return;
    }

    try {
      const url = new URL('/api/check-email', backendUrl);

      const response = await fetch(url.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.exists) {
        setEmailError(
          "Este email já está em uso. Se você é o dono da conta e quer alterá-la, acesse app.dashfacil.com/minha-conta. Caso contrário, use outro email."
        );
      } else {
        const url = new URL(selectedCheckoutUrl);
        url.searchParams.append("prefilled_email", email);

        setIsModalOpen(false);
        router.push(url.toString());
      }
    } catch (error) {
      console.error("Erro ao verificar o email:", error);
      alert("Ocorreu um erro ao verificar o email. Por favor, tente novamente.");
      setIsModalOpen(false);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Planos</h2>
          <p className="section-description mt-5">
            Escolha o que mais se encaixa com você
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            (
              {
                title,
                monthlyPrice,
                buttonText,
                popular,
                inverse,
                features,
                checkout,
              },
              index
            ) => (
              <div
                key={index}
                className={twMerge(
                  "card",
                  inverse === true && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{
                          backgroundPositionX: "100%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    R${monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      "tracking-tight font-bold text-black/50",
                      inverse === true && "text-white"
                    )}
                  >
                    /mês
                  </span>
                </div>
                <button
                  onClick={() => handleOpenModal(checkout)}
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px] cursor-pointer",
                    inverse === true && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-center gap-4">
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>

      {/* Modal para coletar o email */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Insira seu email</h2>
            <input
              type="email"
              className={twMerge(
                "w-full mb-2 border px-2 py-1 rounded-lg",
                emailError && "border-red-500"
              )}
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
            />
            {emailError && (
              <p className="text-red-500 text-sm mb-4">{emailError}</p>
            )}
            <button
              className="btn btn-primary w-full"
              onClick={handleEmailSubmit}
            >
              Prosseguir
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
};
