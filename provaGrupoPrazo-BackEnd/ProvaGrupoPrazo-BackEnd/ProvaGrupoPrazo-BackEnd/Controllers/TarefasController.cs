using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProvaGrupoPrazo_BackEnd.Models;
using ProvaGrupoPrazo_BackEnd.Repository;

namespace ProvaGrupoPrazo_BackEnd.Controllers
{
    [Route("api/[controller]")]
    public class TarefasController : Controller
    {
        // GET
        [HttpGet]
        public List<Tarefa> CarregarTarefas()
        {
            return new TarefaRepository().CarregarTarefas();
        }

        // POST
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

        // PUT 
        [HttpPut]
        public IActionResult EditarTarefa([FromBody]Tarefa tarefa)
        {
            try
            {
                new TarefaRepository().EditarTarefa(tarefa);
                return Ok();
            }
            catch
            {
                return null;
            }
        }

        // DELETE
        [HttpDelete("{id}")]
        public IActionResult ExcluirTarefa(int id)
        {
            try
            {
                new TarefaRepository().ExcluirTarefa(id);
                return Ok();
            }
            catch
            {
                return null;
            }
        }
    }
}
