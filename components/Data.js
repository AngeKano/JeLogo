const Data_Factures = [
  {
    nom: "Canal +",
    text: require("../assets/icons/factureItems/canal.png"),
    backgroundColor: "black",
    textColor: "white",
    option: [
      {
        Label: "Reconduire mon abonement actuel",
        option: [
          {
            Etape: "Numéro de réabonement CANAL +",
          },
          {
            Etape: "Code secret",
          },
        ],
      },
      {
        Label: "Changer d’offre",
        option: [
          {
            Etape: "Numéro de réabonement CANAL +",
          },
          {
            Etape: "Code secret",
          },
        ],
      },
      {
        Label: "Consulter / Regulariser mon solde impayé",
        option: [
          {
            Etape: "Numéro de réabonement CANAL +",
          },
          {
            Etape: "Code secret",
          },
        ],
      },
    ],
  },
  {
    nom: "CIE",
    text: require("../assets/icons/factureItems/cie.png"),
    backgroundColor: "#F1892A",
    textColor: "white",
    option: [
      {
        Etape: "Numero identifiant CIE",
      },
      {
        Etape: "Code secret",
      },
    ],
  },
  {
    nom: "SODECI",
    text: require("../assets/icons/factureItems/sodeci.png"),
    backgroundColor: "#00AC67",
    textColor: "white",
    option: [
      {
        Etape: "Numero identifiant CIE",
      },
      {
        Etape: "Code secret",
      },
    ],
  },
  {
    nom: "Pont HKB",
    text: require("../assets/icons/factureItems/hkb.png"),
    backgroundColor: "#00AC67",
    textColor: "white",
    option: [
      {
        Etape: "Numero de badget HKB",
      },
      {
        Etape: "Code secret",
      },
    ],
  },
  {
    nom: "StarTimes",
    text: require("../assets/icons/factureItems/startimes.png"),
    backgroundColor: "#F1892A",
    textColor: "white",
    option: [
      {
        Etape: "Numero d’abonné",
      },
      {
        Etape: "Code secret",
      },
    ],
  },
];

const Data_Transaction = [
  {
    nom: "Orange Money",
    text: require("../assets/icons/Mobileservices.png"),
  },
  {
    nom: "Moov Money",
    text: require("../assets/icons/Group12.png"),
  },
  {
    nom: "MTN Money",
    text: require("../assets/icons/Group13.png"),
  },
  {
    nom: "Wave",
    text: require("../assets/icons/Group14.png"),
  },
];

const Data_Pass = [
  {
    nom: "Orange Money",
    backgroundColor: "black",
    textColor: "#FF7900",
    text: require("../assets/icons/Mobileservices.png"),
    option: [
      {
        Label: "Pass Mix",
        option: [
          {
            Label: "Pass 1 à 3 jours",
            option: [
              {
                Label: "Pass Mix 300F (25min+50Mo)",
              },
              {
                Label: "Minutes - 200F(15 min TR)",
              },
            ],
          },
          {
            Label: "Pass Semaine",
            option: [
              {
                Label: "Pass Mix 1000F (70min+600Mo)",
              },
              {
                Label: "Pass Mix 500F (50min+250Mo)",
              },
            ],
          },
          {
            Label: "Pass Mois",
            option: [
              {
                Label: "Pass Mix 200000F (120min+20Go)",
              },
              {
                Label: "Pass Mix 10000F (500min+10Go)",
              },
              {
                Label: "Pass Mix 5000F (400min+4Go)",
              },
              {
                Label: "Pass Mix 3000F (250min+2.5Go)",
              },
            ],
          },
        ],
      },
      {
        Label: "Pass Internet",
        option: [
          {
            Label: "Pass reseaux sociaux",
            option: [
              {
                Label: "Social 300F - 450Mo",
              },
              {
                Label: "TikTok 300F - 600Mo",
              },
            ],
          },
          {
            Label: "Pass 1 à  3 jours",
            option: [
              {
                Label: "2Jours 200F - 220Mo",
              },
              {
                Label: "3Jours 300F - 340Mo",
              },
              {
                Label: "3Jours 500F - 650Mo",
              },
            ],
          },
          {
            Label: "Pass Semaine",
            option: [
              {
                Label: "Semaine 1000F - 1224Mo",
              },
            ],
          },
          {
            Label: "Pass Mois",
            option: [
              {
                Label: "Mois 2500F - 3.5Go",
              },
              {
                Label: "Mois 5000F - 7.2Go",
              },
              {
                Label: "Mois 10000F - 15Go",
              },
              {
                Label: "Mois 20000F - 36Go",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    nom: "Moov Money",
    backgroundColor: "#0066B5",
    textColor: "white",
    text: require("../assets/icons/Group12.png"),
    option: [
      {
        Label: "Forfait Internet",
        option: [
          {
            Label: "Internet illimité",
            option: [
              { Label: "1H illim 300F" },
              { Label: "2H illim 500F" },
              { Label: "6H illim 1300F" },
            ],
          },
          {
            Label: "Forfaits Journaliers",
            option: [
              { Label: "2J 150Mo 150F" },
              { Label: "2J 220Mo 200F" },
              { Label: "3J 340Mo 300F" },
              { Label: "3J 750Mo 500F" },
            ],
          },
          {
            Label: "Forfaits Hebdomadaires",
            option: [
              { Label: "7J 1Go 750F" },
              { Label: "10J 1300Mo 1000F" },
              { Label: "21J 2000Mo 1500F" },
            ],
          },
          {
            Label: "Forfaits Mensuels",
            option: [
              { Label: "30J 3Go 2000F" },
              { Label: "30J 7.2Go 4900F" },
              { Label: "30J 22Go 9900F" },
              { Label: "30J 35Go 14900F" },
              { Label: "30J 50Go 19900F" },
            ],
          },
          {
            Label: "Forfaits Maxi Data",
            option: [
              { Label: "30J 150Go 24000F" },
              { Label: "30J 300Go 29000F" },
              { Label: "30J 400Go 39000F" },
            ],
          },
          {
            Label: "Forfaits Spéciaux",
            option: [
              { Label: "Nuit Soft 1Go+30min TR 200F" },
              { Label: "Sociiaux Jour 500Mo 200F" },
              { Label: "Forfait TikTok 1Go 300F" },
            ],
          },
        ],
      },
      {
        Label: "Forfaits Izy Heures +",
        option: [
          { Label: "10MinTR + 15Mo +30SMS 150F" },
          { Label: "15MinTR + 25Mo + 50SMS 200F" },
          { Label: "25MinTR + 100Mo + 100SMS 300F" },
          { Label: "40MinTR + 250Mo + 250SMS 500F" },
          { Label: "80MinTR + 500Mo + 500SMS 1000F" },
          { Label: "120MinTR + 500Mo + 500SMS 1500F" },
          { Label: "200MinTR + 2Go + 500SMS 2500F" },
          { Label: "400MinTR + 5Go + 500SMS 5000F" },
          { Label: "830MinTR + 8Go + 500SMS 10000F" },
          { Label: "1660MinTR + 20Go + 1000SMS 20000F" },
        ],
      },
      {
        Label: "Forfaits MoovFolie",
        option: [
          {
            Label: "MoovFolie Appels",
            option: [
              { Label: "1J 12Min TR 150F" },
              { Label: "2J 17Min TR 200F" },
              { Label: "3J 25Min TR 300F" },
              { Label: "4J 42Min TR 500F" },
              { Label: "15J 85Min TR 1000F" },
              { Label: "21J 130Min TR 1500F" },
              { Label: "30J 220Min TR 2500F" },
              { Label: "30J 445Min TR 5000F" },
            ],
          },
          {
            Label: "MoovFolie Internet",
            option: [{ Label: "3J 400Mo 200F" }, { Label: "7J 1Go 500F" }],
          },
          {
            Label: "MoovFolie Appels + Internet",
            option: [
              { Label: "23H-05H 30Min TR 200F" },
              { Label: "7J 1H TR + 1Go 700F" },
            ],
          },
        ],
      },
    ],
  },

  {
    nom: "MTN Money",
    backgroundColor: "#FFC403",
    textColor: "black",
    text: require("../assets/icons/Group13.png"),
    option: [],
  },
];

const Test = [
  {
    nom: "Papa",
    enfant: [
      {
        nom: "ano",
        enfant: [
          {
            nom: "mm",
          },
          {
            nom: "tte",
          },
        ],
      },
      {
        nom: "ange",
        enfant: [
          {
            nom: "stph",
          },
        ],
      },
      {
        nom: "grc",
        enfant: [
          {
            nom: "nacj",
          },
          {
            nom: "jr",
          },
        ],
      },
    ],
  },
  {
    nom: "Maman",
    enfant: [
      {
        nom: "retyre",
      },
    ],
  },
];
const Test2 = [];
export default { Data_Factures, Data_Transaction, Data_Pass, Test };
