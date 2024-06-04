import Logo from "./Logo";

function Footer() {
    return (
      <footer className="text-white bg-red-500">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div>
            <ul>
              <Logo/>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Sobre</h4>
            <h4 className="font-bold mb-2">Serviços</h4>
          </div>
          <div>
            <p className="font-bold mb-2">Termos e condições</p>
            <p className="font-bold mb-2">Políticas de Privacidade</p>
            <p className="font-bold mb-2">Licenças</p>
          </div>
          <div>
            <div className="flex">
              <div className="">
                <img src="/img/email.png" alt="" />
              </div>
              <div>
                <p>Email <br /> bdqmicrocredito.co.mz</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="">
                <img src="/img/call.png" alt="" />
              </div>
              <div>
                <p>Telefone <br /> (+258) 21663748490</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t  my-4" />
        <p>Copyright © BDKMICROCREDITO | Designed by wolftechindustries - Powered by Champier.lda.</p>
      </footer>
    );
  }
  
  export default Footer;
  
  