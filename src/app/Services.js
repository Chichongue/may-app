import { Imagem2 } from '../../public/img/imagem';
import { Imagem3 } from '../../public/img/imagem';
function Serviços(){
    return (
        <div className="flex flex-col items-center bg-white  text-black ">
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold">Serviços</h2>
            <p className="text-1xl md:text-1xl lg:text-1xl mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor. Maecenas <br /> quam nunc, tincidunt quis facilisis ut, faucibus eget </p>

            <div className="pt-9 flex items-center text-black font-bold justify-around">
                <div className="">
                    <div className="grid grid-cols-3 gap-4 items-center">
                        <div>
                          
                            <label htmlFor="checkbox1">Website Builder</label>
                        </div>

                        <div>
                            
                            <label htmlFor="checkbox2">Free Domain and SSL</label>
                        </div>

                        <div>
                       
                            <label htmlFor="checkbox3">WP Acelerator</label>
                        </div>

                        <div>
                            
                            <label htmlFor="checkbox4">Auto installer</label>
                        </div>

                        <div>
                           
                            <label htmlFor="checkbox5">DDos and Malware</label>
                        </div>

                        <div>
                          
                            <label htmlFor="checkbox6">24/7 Support</label>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="">
                        <Imagem2/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Serviços;

export function Article() {
  return (
    <div className="flex justify-center">
      <div className="m-5 max-w-xs rounded overflow-hidden shadow-lg mx-4 my-8 flex">
        <div className="m-5 col-span-1 px-6 py-4">
          <Imagem3/>
        </div>
      </div>
      <div className="m-5">
        <div className="m-5 col-span-1 px-6 py-4">
          <div className="m-5 font-bold text-xl mb-2 text-white">Desbloqueie o potencial do seu<br />negócio com nosso microcrédito<br />rápido e acessível</div>
        </div>
      </div>
    </div>
  );
}





