import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    try {
      const [novoAluno] = await Aluno.findOrCreate({
        where: { email: 'caio@gmail.com' },
        defaults: {
          nome: 'Caio',
          sobrenome: 'Oliveira',
          idade: 20,
          peso: 86,
          altura: 1.75,
        },
      });
      res.json(novoAluno);
    } catch (e) {
      console.log(e);
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new HomeController();
