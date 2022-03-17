const express = require("express");

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    
    this.express.listen(3000, () =>
      console.log(`Sua API REST está funcionando na porta 3000 `)
    );
  }


  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}
module.exports = new App().express;