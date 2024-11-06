import ArrowRight from "@/assets/arrow-right.svg";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Evolua agora seu lançamento
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Assine agora</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <img src='assets/logosaas.png' alt="Saas Logo" height={70} width={70} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">Sobre</a>
              <a href="#funcionalidades">Funcionalidades</a>
              <a href="#clientes">Clientes</a>
              <a href="#planos">Planos</a>
              <a href="https://wa.me/11977792099">Ajuda</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
