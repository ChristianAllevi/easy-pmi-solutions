import BlueButton from "../ui/BlueButton"

function CatchPhrase() {
  return (
    <div className="flex justify-center">
      <div className="container flex flex-col items-center justify-center px-4 py-40 gap-12">
        <h2 className="text-pmi-h2 text-center leading-pmi-h tracking-tighter">
          Immaginiamo un mondo in cui ogni impresa, piccola o grande, possa lavorare con efficienza e serenità grazie a servizi davvero su misura.
        </h2>
        <BlueButton text="Richiedi una call gratuita" />
      </div>
    </div>
  )
}

export default CatchPhrase