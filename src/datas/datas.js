const datas = [
  {
    id: 1,
    title: "Mousse au chocolat",
    nbPersonnes: 4,
    ingredients: [
      {
        name: "oeuf",
        quantity: 1,
        measurementUnit: null,
      },
      {
        name: "farine",
        quantity: 3,
        measurementUnit: "càs",
      },
      {
        name: "chocolat noir",
        quantity: 80,
        measurementUnit: "g",
      },
    ],
    recipe:
      "A préparer la veille. Séparer les blancs d'oeufs des jaunes. Mélanger les jaunes avec le sucre jusqu'à ce que le mélange mousse et blanchisse. Faire fondre le chocolat au bain-marie et le rajouter au mélange jaune d'oeufs + sucre. Monter les blancs d'oeufs en neige avec une pincée de sel. Rajouter les blancs délicatement au reste de la préparation en soulevant la masse pour ne pas faire retomber les blancs. Mettre au réfrigérateur et consommer le lendemain. Avant de la manger, saupoudrer le dessus de la sultane avec des vermicelles colorés ou mettre quelques Smarties pour les enfants, ou les grands !!",
    image:
      "https://assets.afcdn.com/recipe/20131024/48381_w1200h1625c1cx1728cy2340.webp",
    category: 3,
  },
  {
    id: 2,
    title: "Filet de poulet au curry",
    nbPersonnes: 4,
    ingredients: [
      {
        name: "oignon",
        quantity: 1,
        measurementUnit: null,
      },
      {
        name: "ail en poudre",
        quantity: null,
        measurementUnit: null,
      },
      {
        name: "Sauce soja",
        quantity: 4,
        measurementUnit: "càs",
      },
      {
        name: "Curry",
        quantity: 1,
        measurementUnit: "càc",
      },
      {
        name: "Filets de poulet",
        quantity: 4,
        measurementUnit: null,
      },
      {
        name: "Ciboulette",
        quantity: 4,
        measurementUnit: "brins",
      },
      {
        name: "Crème fraîche épaisse ou liquide",
        quantity: 10,
        measurementUnit: "cl",
      },
    ],
    recipe:
      "Couper les filets de poulet en petits morceaux, les mettre dans un saladier avec la sauce soja, l'ail, l'huile d'olive, la ciboulette et le curry. Laissez reposer une heure. Après, faire revenir l'oignon avec un peu d'huile d'olive, une fois légèrement caramélisé, mettre la viande. Quand la viande commence à cuire, mettre petit à petit la crème fraîche (épaisse ou liquide), ajouter du curry selon vos goûts sur la viande. Mélanger bien le tout, saler et poivrer.",
    image:
      "https://assets.afcdn.com/recipe/20200907/114028_w1200h1800c1cx1834cy2751cxb3668cyb5502.webp",
    category: 2,
  },
  {
    id: 3,
    title: "Oeufs à la tomate et chorizo",
    nbPersonnes: 4,
    ingredients: [
      {
        name: "tomates",
        quantity: 8,
        measurementUnit: null,
      },
      {
        name: "Gousses d'ail",
        quantity: 3,
        measurementUnit: null,
      },
      {
        name: "Chorizo",
        quantity: 12,
        measurementUnit: "tranches",
      },
      {
        name: "Huile d'olive",
        quantity: null,
        measurementUnit: null,
      },
      {
        name: "Oeufs",
        quantity: 8,
        measurementUnit: null,
      },
    ],
    recipe:
      "Emincer l'ail et le faire revenir dans l'huile d'olive dans une poêle. Ajouter les tomates et les faire fondre à feux doux pendant 10 mn. Remuer de temps en temps. Disposer les oeufs dans la poêle comme des oeufs au plat, puis le chorizo. Faire cuire pendant 6/7 mn. Saler et poivrer.",
    image:
      "https://assets.afcdn.com/recipe/20140708/25625_w1200h1747c1cx1350cy1965.webp",
    category: 2,
  },
  {
    id: 4,
    title: "Salade de pâtes à l'italienne",
    nbPersonnes: 4,
    ingredients: [
      {
        name: "tomates cerises",
        quantity: 6,
        measurementUnit: null,
      },
      {
        name: "Feuilles de basilic",
        quantity: 12,
        measurementUnit: null,
      },
      {
        name: "Citron",
        quantity: null,
        measurementUnit: null,
      },
      {
        name: "Huile d'olive",
        quantity: 6,
        measurementUnit: "càs",
      },
      {
        name: "Pâtes",
        quantity: 250,
        measurementUnit: "g",
      },
      {
        name: "Melon",
        quantity: 1,
        measurementUnit: null,
      },
      {
        name: "Mozarella",
        quantity: 150,
        measurementUnit: "g",
      },
      {
        name: "Fines tranches de jambon de Parme",
        quantity: 4,
        measurementUnit: null,
      },
      {
        name: "Olives noires",
        quantity: 12,
        measurementUnit: null,
      },
    ],
    recipe:
      "Faire cuire les pâtes 8 à 10 min. Couper le melon en deux et détailler la chair en billes à l'aide d'une cuillère parisienne. Couper les tomates cerises en deux, la mozzarella en dés et le jambon en lanières. Dans un saladier, mélanger le jus du citron et l'huile d'olive. Saler et poivrer. Ajouter 6 feuilles de basilic ciselées. Égoutter les pâtes. Les passer rapidement sous l'eau froide puis les verser dans le saladier. Mélanger. Ajouter les billes de melon, les tomates cerises, la mozzarella, le jambon et les olives. Parsemer du reste de basilic.",
    image:
      "https://assets.afcdn.com/recipe/20130525/36002_w768h576c1cx256cy192.webp",
    category: 1,
  },
  {
    id: 5,
    title: "Filet mignon de porc aux courgettes",
    nbPersonnes: 4,
    ingredients: [
      {
        name: "Courgettes",
        quantity: 1,
        measurementUnit: "kg",
      },
      {
        name: "Raisins secs",
        quantity: 75,
        measurementUnit: "g",
      },
      {
        name: "Bouillon de volaille dégraissé",
        quantity: 10,
        measurementUnit: "cl",
      },
      {
        name: "Gousse d'ail",
        quantity: 1,
        measurementUnit: null,
      },
      {
        name: "Bouquet garni",
        quantity: 1,
        measurementUnit: null,
      },
      {
        name: "Huile d'olive",
        quantity: 2,
        measurementUnit: "càs",
      },
      {
        name: "Beurre",
        quantity: 30,
        measurementUnit: "g",
      },
      {
        name: "Filet mignon",
        quantity: 1,
        measurementUnit: null,
      },
    ],
    recipe:
      "Eplucher les courgettes. Les couper en tronçons ou en gros bâtonnets de 5cm de longueur. Faire revenir le filet mignon dans une cocotte dans le mélange huile d'olive et beurre. Lorsqu'il est bien doré, ajouter les courgettes, l'ail écrasé, les raisins secs, le bouquet garni et le bouillon de volaille. Saler et poivrer. Bien mélanger, couvrir et laisser cuire 25mn à feu doux. Découper le filet mignon en tranches fines. Le dresser sur un grand plat entouré de la garniture de courgettes et de raisins et le servir avec de la semoule de couscous cuite à la vapeur.",
    image:
      "https://assets.afcdn.com/recipe/20180827/81946_w1200h800c1cx2808cy1872cxb5616cyb3744.webp",
    category: 2,
  },
  {
    id: 6,
    title: "Tartare de crevettes, mangue et avocats",
    nbPersonnes: 4,
    ingredients: [
      {
        name: "Brins d'aneth",
        quantity: 4,
        measurementUnit: null,
      },
      {
        name: "Tabasco",
        quantity: 6,
        measurementUnit: "gouttes",
      },
      {
        name: "Crevettes roses cuites",
        quantity: 200,
        measurementUnit: "g",
      },
      {
        name: "Avocats",
        quantity: 2,
        measurementUnit: null,
      },
      {
        name: "Mangue",
        quantity: 1,
        measurementUnit: null,
      },
      {
        name: "Citron",
        quantity: 1,
        measurementUnit: null,
      },
      {
        name: "Oignon nouveau",
        quantity: 1,
        measurementUnit: null,
      },
      {
        name: "Filet mignon",
        quantity: 1,
        measurementUnit: null,
      },
    ],
    recipe:
      "Ouvrez les avocats, retirez le noyau, prélevez la chair, arrosez-la de jus de citron vert. Épluchez la mangue. Coupez-la tout en petits dés. Décortiquez les crevettes. Coupez-les également en petits morceaux. Mélangez-les avec les dés des fruits très délicatement, l'oignon haché, le jus de citron vert restant, l'huile d'olive, les gouttes de tabasco ,le sel de Guérande (selon convenance) et le poivre écrasé et l'aneth coupée. Disposez cette préparation dans vos coupelles, assiettes de présentation... parsemez de poivre, fleur de sel de Guérande et aneth !",
    image:
      "https://assets.afcdn.com/recipe/20130121/35948_w1200h1476c1cx813cy1000.webp",
    category: 1,
  },
  {
    id: 7,
    title: "Verrine de fraises aux speculos",
    nbPersonnes: 4,
    ingredients: [
      {
        name: "Fraises",
        quantity: 300,
        measurementUnit: "g",
      },
      {
        name: "Fromage blanc",
        quantity: 300,
        measurementUnit: "g",
      },
      {
        name: "Speculos",
        quantity: 1,
        measurementUnit: "paquet",
      },
    ],
    recipe:
      "Mixez puis déposez la moitié des spéculoos au fond de chaque verrine. Recouvrez de fromage blanc sur environ 3 cm de hauteur. Mixez les fraises (sauf 2) et répartissez-les dans chaque verrine. Recouvrez avec le reste des spéculos puis terminez par 1/2 fraise. Mettez au frais avant de servir.",
    image:
      "https://assets.afcdn.com/recipe/20130328/27153_w1200h1666c1cx912cy1266.webp",
    category: 3,
  },
  {
    id: 8,
    title: "Verrine semi-croquante au concombre et chantilly au saumon",
    nbPersonnes: 6,
    ingredients: [
      {
        name: "Aneth",
        quantity: null,
        measurementUnit: null,
      },
      {
        name: "Concombre",
        quantity: 1,
        measurementUnit: null,
      },
      {
        name: "Crackers salés",
        quantity: 6,
        measurementUnit: null,
      },
      {
        name: "Saumon fumé",
        quantity: 250,
        measurementUnit: "g",
      },
      {
        name: "Crème liquide",
        quantity: 50,
        measurementUnit: "cl",
      },
      {
        name: "Oeufs de lump noirs",
        quantity: 1,
        measurementUnit: "càc",
      },
    ],
    recipe:
      "Placer un saladier (celui pour préparer la chantilly au congélateur). Émietter les crackers et en verser une couche au fond de chaque verrine. Éplucher et couper le concombre en petits cubes. Répartir dans les 6 verrines. Réserver 2 tranches de saumon. Couper le reste du saumon en petits morceaux et mélanger avec l'aneth ciselé. Battre la crème en chantilly et y incorporer le saumon. Placer la chantilly dans une poche à douille et remplir les verrines. Déposer une touche d'oeufs de lump sur chaque verrine. Pour la décoration : piquer une lamelle de saumon sur un pic en bois de sorte à former un serpentin et déposer en travers sur chaque verrine.",
    image:
      "https://assets.afcdn.com/recipe/20161021/63749_w1200h1800c1cx2000cy3000.webp",
    category: 1,
  },
  {
    id: 9,
    title: "Gougères au fromage",
    nbPersonnes: 6,
    ingredients: [
      {
        name: "Gruyère râpé",
        quantity: 150,
        measurementUnit: "g",
      },
      {
        name: "Farine tamisée",
        quantity: 150,
        measurementUnit: "g",
      },
      {
        name: "Beurre",
        quantity: 80,
        measurementUnit: "g",
      },
      {
        name: "Muscade râpée",
        quantity: 1,
        measurementUnit: "pincée",
      },
      {
        name: "Oeufs",
        quantity: 5,
        measurementUnit: null,
      },
    ],
    recipe:
      "Préchauffez le four à 200°C (th 6-7). Dans une casserole, portez 25 cl d'eau à ébullition, avec le beurre coupé en morceaux + 1 cuillère à café de sel. Hors du feu, ajoutez la farine d'un coup. Mélangez vivement, et faites dessécher pendant 1 min sur feu doux. Laissez tiédir quelques instants, et incorporez les oeufs un par un en mélangeant bien. Ajoutez le gruyère râpé, la muscade, le sel et le poivre. Déposez cette pâte à l'aide de 2 cuillères à café, en petits tas séparés, sur une plaque beurrée. Vous pouvez dorer les petites gougères avec un jaune d'oeuf, à l'aide d'un pinceau. Enfournez 25 min en surveillant.",
    image:
      "https://assets.afcdn.com/recipe/20160513/2643_w1200h1800c1cx1908cy2861.webp",
    category: 1,
  },
  {
    id: 10,
    title: "Moelleux au chocolat",
    nbPersonnes: 6,
    ingredients: [
      {
        name: "Chocolat",
        quantity: 250,
        measurementUnit: "g",
      },
      {
        name: "Beurre",
        quantity: 175,
        measurementUnit: "g",
      },
      {
        name: "Sucre glace",
        quantity: 125,
        measurementUnit: "g",
      },
      {
        name: "Farine",
        quantity: 75,
        measurementUnit: "g",
      },
      {
        name: "Oeufs",
        quantity: 5,
        measurementUnit: null,
      },
    ],
    recipe:
      "Faire fondre le chocolat. Ajouter le beurre en morceaux peu à peu et l'incorporer pour obtenir un crème bien lisse. Mettre la farine et le sucre glace dans un saladier. Ajouter les oeufs entiers et mélanger jusqu'à obtention d'une émulsion homogène. Verser le mélange chocolat-beurre sur cette préparation. Mélanger. Beurrer et fariner 6 moules individuels ou un grand moule. Verser la préparation et mettre à four chaud (200°C) - 10 min pour les petits gâteaux, 15 pour le grand. Servir tiède avec une crème anglaise (le centre doit être coulant) ou servir froid nappé de ganache au chocolat.",
    image:
      "https://assets.afcdn.com/recipe/20171019/73301_w1200h800c1cx1800cy1200cxb3600cyb2400.webp",
    category: 3,
  },
  {
    id: 11,
    title: "Cookies pépites aux flocons d'avoine",
    nbPersonnes: 6,
    ingredients: [
      {
        name: "Chocolat",
        quantity: 120,
        measurementUnit: "g",
      },
      {
        name: "Flocons d'avoine",
        quantity: 120,
        measurementUnit: "g",
      },
      {
        name: "Levure",
        quantity: 1,
        measurementUnit: "sachet",
      },
      {
        name: "Farine",
        quantity: 240,
        measurementUnit: "g",
      },
      {
        name: "Sucre vanillé",
        quantity: 1,
        measurementUnit: "sachet",
      },
      {
        name: "Sucre roux",
        quantity: 150,
        measurementUnit: "g",
      },
      {
        name: "Beurre tendre",
        quantity: 75,
        measurementUnit: "g",
      },
      {
        name: "Oeufs",
        quantity: 2,
        measurementUnit: null,
      },
      {
        name: "Margarine",
        quantity: 75,
        measurementUnit: "g",
      },
    ],
    recipe:
      "Préchauffer le four à 180°C. Mélanger flocons, farine et sucre (vanillé et roux), puis malaxer à la main avec oeufs, levure, sucre et beurre/margarine, ajouter ensuite les pépites. Mettre de petites boules de pâte légèrement applaties sur une plaque à pâtisserie recouverte d'une feuille de cuisson, bien espacées. Enfourner 10 mn environ, pas plus, ça continue de cuire après être sorti du four.",
    image:
      "https://assets.afcdn.com/recipe/20140814/55564_w1200h1800c1cx900cy1350.webp",
    category: 3,
  },
];

export default datas;
