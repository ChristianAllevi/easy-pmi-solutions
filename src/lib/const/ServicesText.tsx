import { servicecard } from "@/app/types";
import { image_service_digital, image_service_energy, image_service_phone, image_service_pos } from "../../../public/images";

export const services: servicecard[] = [
    {
      image: image_service_pos,
      title: "Sistemi di pagamento POS per ogni tipo di attività",
      description: "Terminali POS affidabili, veloci e senza complicazioni. Soluzioni pensate per negozi, professionisti e attività in crescita. Attivazione rapida, assistenza dedicata e costi trasparenti.",
      color:"bg-pmi-light-blue"
    },
    {
      image: image_service_phone,
      title: "Telefonia aziendale senza pensieri",
      description: "Pacchetti voce e dati su misura per la tua impresa. Connessioni stabili e piani flessibili che si adattano al tuo modo di lavorare.",
      color:"bg-pmi-mint"
    },
    {
      image: image_service_energy,
      title: "Energia per la tua azienda, al giusto prezzo",
      description: "Consulenza energetica dedicata per ottimizzare costi e consumi. Ti aiutiamo a scegliere l’offerta luce e gas più conveniente per la tua attività.",
      color:"bg-pmi-light-blue"
    },
    {
      image: image_service_digital,
      title: "Servizi digitali per rendere la tua impresa più efficiente",
      description: "Dalla gestione documentale agli strumenti per automatizzare i processi: ti offriamo soluzioni digitali semplici che migliorano produttività e organizzazione.",
      color:"bg-pmi-mint"
    }
  ]