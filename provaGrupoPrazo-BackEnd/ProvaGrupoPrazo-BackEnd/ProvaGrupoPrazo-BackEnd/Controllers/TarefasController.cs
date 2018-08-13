using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProvaGrupoPrazo_BackEnd.Models;
using ProvaGrupoPrazo_BackEnd.Repository;

namespace ProvaGrupoPrazo_BackEnd.Controllers
{
    [Route("api/[controller]")]
    public class TarefasController : Controller
    {
        // GET api/values
        [HttpGet]
        public List<Tarefa> CarregarTarefas()
        {
            return new TarefaRepository().CarregarTarefas();
        }

        // POST api/values/5
        [HttpPost]
        public IActionResult AdicionarTarefa([FromBody]Tarefa tarefa)
        {
            try
            {
                new TarefaRepository().AdicionarTarefa(tarefa);
                return Ok();
            }
            catch
            {
                return null;
            }
        }

        // PUT api/values/5
        [HttpPut]
        public IActionResult EditarTarefa([FromBody]Tarefa tarefa)
        {
            return Ok();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok();
        }
    }
}
