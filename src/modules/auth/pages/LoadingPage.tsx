import { Button } from "@/shared/components";
import logo from '@/shared/assets/nexlab.svg';

export function LoadingPage() {

  return (
    <main className="flex flex-col bg-gradient-to-br from-white from-[40%] to-[#999999] min-h-screen px-6 py-8">

      {/* 2. Bloco Superior que cresce para ocupar o espaço disponível */}
      <div className="flex-col flex flex-1 w-full max-w-md mx-auto">

        {/* Espaço reservado para a Imagem da Empresa */}
        <div className="flex justify-center mt-10 mb-12">
          <img src={logo} alt="NEX.lab" />
        </div>
      </div>

        <h1 className="text-4xl font-semibold text-center text-black mb-10">
          Photo OPP
        </h1>

      <div className="w-full max-w-md mx-auto mt-auto">
        <Button
          type="submit"
          onClick={(e) => { handleSubmit(e) }}
          disabled={isLoading}
          className="w-full py-4 text-lg bg-[#5A5A5A] text-white hover:bg-[#4A4A4A]"
        >
          {isLoading ? "Entrando..." : "Entrar"}
        </Button>
      </div>
    </main>
  );
}

