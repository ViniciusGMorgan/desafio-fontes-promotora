import cep from "cep-promise";

class CepController {
  async show(paramCep) {
    console.log("chegouuu em", paramCep);
    let response = await cep(paramCep)
      .then((result) => {
        console.log("opaaa", result);
        return result;
      })
      .catch((error) => {
        console.log("iiiiih", result);
        return res.status(400).json(error);
      });
    return response;
  }
}

export default new CepController();
