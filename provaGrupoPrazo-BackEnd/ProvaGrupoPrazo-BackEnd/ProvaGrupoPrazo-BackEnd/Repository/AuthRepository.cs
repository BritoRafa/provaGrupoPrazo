using Dapper;
using ProvaGrupoPrazo_BackEnd.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProvaGrupoPrazo_BackEnd.Repository
{
    public class AuthRepository
    {
        private ConnectionFactory conn;
        public AuthRepository()
        {
            conn = new ConnectionFactory();
        }
        public Usuario FazerLogin(Usuario usuario)
        {
            try
            {
                var queryString = @"SELECT * FROM Usuarios WHERE Nome = @Nome AND Senha = @Senha";
                var usuarioLogado = new Usuario();
                using (var conection = conn.ConnectionString)
                {
                    usuarioLogado = conection.QueryFirstOrDefault<Usuario>(queryString, usuario);
                }
                return usuarioLogado;
            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}
