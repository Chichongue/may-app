const Card = ({ title, description, imageUrl,texto }) => {
  return (
    <div className="bg-gray">
      <div className="">
        <img src={imageUrl} alt="" />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{texto}</h2>
        <h3 className="text-3xl">{title}</h3>
        <p>Oferecemos uma ampla gama de valores de<br/> empréstimo para atender às suas<br/> necessidades específicas de financiamento.{description}</p>
      </div>
    </div>
  );
};
export function Paragrafo(){
  return(
    <>
    <h2 className="flex justify-center text-4xl font-bold">Porque Escolher <br/>a BDQ Microcrédito?</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 gap-4 items-center justify-center">
      <Paragrafo
      />

      <Card
        title="Flexibilidade de Montante:"
        imageUrl="/img/Rectangle 79.png"
      />
      <Card
        title="Acesso Simplificado:"
        imageUrl="/img/Rectangle 79.png"
      />
      <Card
        title="Taxas Competitivas:"
        imageUrl="/img/Rectangle 79.png"
      />
    </div>
  );
};

export default App;


    
export function Questions(){
  return(
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-md">
        <h2 className="font-bold text-2xl text-center mb-10">Perguntas frequentes</h2>
        
        <p className="mb-3">Quem pode solicitar um crédito?</p>
        <hr className="mb-2"/>
        <p className="mb-2">Quais são os requisitos para obter um crédito?</p>
        <hr className="mb-2"/>
        <p className="mb-2">Quais são as taxas de juros?</p>
        <hr className="mb-2"/>
        <p className="mb-2">Quanto tempo leva para aprovar um crédito?</p>
        <hr className="mb-2"/>
      </div>
    </div>
  );
}
