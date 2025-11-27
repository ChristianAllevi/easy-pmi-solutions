import { planscard } from "@/app/types";
import { icon_company, icon_freelance, icon_startup } from "../../../public/icons";

export const plans: planscard[] = [
    {
      icon: icon_freelance,
      title: "Per Freelancer",
      description: "Ti aiutiamo a gestire incassi e comunicazioni in modo semplice e affidabile. Meno burocrazia, più tempo per i tuoi clienti.",
      catchword:"Semplicità"
    },
    {
      icon: icon_startup,
      title: "Per Startup",
      description: "Ti offriamo strumenti agili, scalabili e immediati per supportare il tuo team: per chi vuole muoversi veloce senza rinunciare alla stabilità.",
      catchword:"Crescita"
    },
    {
      icon: icon_company,
      title: "Per Imprese",
      description: "Efficienza e controllo dei costi per garantire continuità operativa, risparmio e supporto costante. Tecnologia semplice che fa la differenza ogni giorno.",
      catchword:"Affidabilità"
    }
  ]