//crear test de los metodos del contrato

const TasksContract = artifacts.require("TasksContract");

contract("TasksContract", (accounts) => {
  before(async () => {
    this.tasksContract = await TasksContract.deployed();
  });

  it("migrate deployed successfully", async () => {
    const address = await this.tasksContract.address;

    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
  });


  /*string NombreMascota;
        string NumeroDocumento;
        string Especie;
        string Sexo;
        string Raza;
        string FechaNacimiento;
        string DocumentoPropietario;
        string NombrePropietario;
        string CIDHistoriaClinica;
        bool done;
        uint256 createdAt;*/

  it("get Tasks List", async () => {
    const tasksCounter = await this.tasksContract.tasksCounter();
    const task = await this.tasksContract.tasks(tasksCounter);

    assert.equal(task.IDRegistro.toNumber(), tasksCounter.toNumber());
    assert.equal(task.NombreMascota, "Molly");
    assert.equal(task.NumeroDocumento, "002");
    assert.equal(task.Especie, "Gato");
    assert.equal(task.Sexo, "Hembra");
    assert.equal(task.Raza, "Europeo");
    assert.equal(task.FechaNacimiento, "07/09/2020");
    assert.equal(task.DocumentoPropietario, "73106549");
    assert.equal(task.NombrePropietario, "Jheyson A.");
    assert.equal(task.CIDHistoriaClinica, "02");
    assert.equal(task.done, false);
    assert.equal(tasksCounter, 1);
  });

  it("task created successfully", async () => {
    const result = await this.tasksContract.createTask("Zanaho", "003", "Conejo", "Macho", "Cone", "14/02/2022", "595943", "Jose", "03");
    const taskEvent = result.logs[0].args;
    const tasksCounter = await this.tasksContract.tasksCounter();

    assert.equal(tasksCounter, 2);
    assert.equal(taskEvent.IDRegistro.toNumber(), 2);
    assert.equal(taskEvent.NombreMascota, "Zanaho");
    assert.equal(taskEvent.NumeroDocumento, "003");
    assert.equal(taskEvent.Especie, "Conejo");
    assert.equal(taskEvent.Sexo, "Macho");
    assert.equal(taskEvent.Raza, "Cone");
    assert.equal(taskEvent.FechaNacimiento, "14/02/2022");
    assert.equal(taskEvent.DocumentoPropietario, "595943");
    assert.equal(taskEvent.NombrePropietario, "Jose");
    assert.equal(taskEvent.CIDHistoriaClinica, "03");
    assert.equal(taskEvent.done, false);
  });

  it("task toggled done", async () => {
    const result = await this.tasksContract.toggleDone(1);
    const taskEvent = result.logs[0].args;
    const task = await this.tasksContract.tasks(1);

    assert.equal(task.done, true);
    assert.equal(taskEvent.IDRegistro.toNumber(), 1);
    assert.equal(taskEvent.done, true);
  });
});