using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using ProvaGrupoPrazo_BackEnd.Models;
using ProvaGrupoPrazo_BackEnd.Repository;

namespace ProvaGrupoPrazo_BackEnd.Controllers
{
    [Route("api/Login")]
    public class AuthController : Controller
    {
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]Usuario usuario)
        {
            var usuarioLogado = new AuthRepository().FazerLogin(usuario);
            if (usuarioLogado == null)
            {
                return BadRequest("Invalid client request");
            }

            if (usuarioLogado.Permissao == "administrador")
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, usuarioLogado.Nome),
                    new Claim(ClaimTypes.Role, "Administrador")
                };
                var tokeOptions = new JwtSecurityToken(
                    issuer: "http://localhost:52274",
                    audience: "http://localhost:52274",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString, UserName = usuarioLogado.Nome, UserRole = "Administrador" });
            }
            else if (usuarioLogado.Permissao == "basico")
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, usuarioLogado.Nome),
                    new Claim(ClaimTypes.Role, "Basico")
                };
                var tokeOptions = new JwtSecurityToken(
                    issuer: "http://localhost:52274",
                    audience: "http://localhost:52274",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString, UserName = usuarioLogado.Nome, UserRole = "Basico"});
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}