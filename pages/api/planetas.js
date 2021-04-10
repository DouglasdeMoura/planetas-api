export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      nome: 'Mercúrio',
      posicao: 1,
      diametro: 4879.4,
      tipo: 'rochoso',
    },
    {
      nome: 'Vênus',
      posicao: 2,
      diametro: 12103.6,
      tipo: 'rochoso',
    },
    {
      nome: 'Terra',
      posicao: 3,
      diametro: 12756.2 ,
      tipo: 'rochoso',
    },
    {
      nome: 'Marte',
      posicao: 4,
      diametro: 6792.4,
      tipo: 'rochoso',
    },
    {
      nome: 'Júpiter',
      posicao: 5,
      diametro: 142984,
      tipo: 'gasoso',
    },
    {
      nome: 'Saturno',
      posicao: 6,
      diametro: 120536,
      tipo: 'gasoso',
    },
    {
      nome: 'Urano',
      posicao: 7,
      diametro: 120536,
      tipo: 'gasoso',
    },
    {
      nome: 'Netuno',
      posicao: 8,
      diametro: 49528,
      tipo: 'gasoso',
    },
  ]);
}
