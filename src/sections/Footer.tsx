import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="flex justify-center">
          <img src='/assets/logodashb.png' height={70} width={70} alt="SaaS logo" />
          </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">Sobre</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#clientes">Clientes</a>
          <a href="#planos">Planos</a>
          <a href="https://wa.me/11977792099">Ajuda</a>
          <a href="https://dashfacil.com/politicas-de-privacidade">Políticas de privacidade</a>
          <a href="https://dashfacil.com/termos-de-uso">Termos de uso</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 Dash Fácil. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
