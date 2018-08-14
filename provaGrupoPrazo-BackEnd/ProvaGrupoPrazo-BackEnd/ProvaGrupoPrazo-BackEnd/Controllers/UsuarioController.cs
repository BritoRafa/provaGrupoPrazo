using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProvaGrupoPrazo_BackEnd.Models;
using ProvaGrupoPrazo_BackEnd.Repository;

namespace ProvaGrupoPrazo_BackEnd.Controllers
{
    [Route("api/[controller]")]
    public class UsuarioController : Controller
    {
        // GET: Usuario
        [HttpGet]
        public List<Usuario> CarregarUsuarios()
        {
            return new UsuarioRepository().CarregarUsuarios();
        }

        // POST
        [HttpPost]
        public IActionResult AdicionarUsuario([FromBody]Usuario usuario)
        {
            try
            {
                new UsuarioRepository().AdicionarUsuario(usuario);
                return Ok();
            }
            catch
            {
                return null;
            }
        }

        // PUT 
        [HttpPut]
        public IActionResult EditarUsuario([FromBody]Usuario usuario)
        {
            try
            {
                new UsuarioRepository().EditarUsuario(usuario);
                return Ok();
            }
            catch
            {
                return null;
            }
        }

        // DELETE
        [HttpDelete("{id}")]
        public IActionResult ExcluirUsuario(int id)
        {
            try
            {
                new UsuarioRepository().ExcluirUsuario(id);
                return Ok();
            }
            catch
            {
                return null;
            }
        }
    }
}