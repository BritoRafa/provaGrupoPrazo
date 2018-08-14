using Dapper;
using ProvaGrupoPrazo_BackEnd.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProvaGrupoPrazo_BackEnd.Repository
{
    public class UsuarioRepository
    {
        private ConnectionFactory conn;
        public UsuarioRepository()
        {
            conn = new ConnectionFactory();
        }
        public List<Usuario> CarregarUsuarios()
        {
            try
            {
                var queryString = @"SELECT * FROM Usuarios";
                var usuarios = new List<Usuario>();
                using (var conection = conn.ConnectionString)
                {
                    usuarios = conection.Query<Usuario>(queryString).ToList();
                }
                return usuarios;
            }
            catch (Exception)
            {
                return null;
            }
        }
        public void AdicionarUsuario(Usuario usuario)
        {
            try
            {
                var queryString = @"INSERT INTO Usuarios (Nome, Email, Permissao, Senha) VALUES (@Nome, @Email, @Permissao, @Senha)";
                using (var connection = conn.ConnectionString)
                {
                    connection.Execute(queryString, usuario);
                }
            }
            catch (Exception e)
            {
                System.Console.WriteLine(e.Message);
            }
        }
        public void EditarUsuario(Usuario usuario)
        {
            try
            {
                var queryString = @"UPDATE Usuarios SET Nome = @Nome, Email = @Email, Permissao = @Permissao, Senha = @Senha WHERE Id = @Id";
                using (var connection = conn.ConnectionString)
                {
                    connection.Execute(queryString, usuario);
                }
            }
            catch (Exception e)
            {
                System.Console.WriteLine(e.Message);
            }
        }
        public void ExcluirUsuario(int id)
        {
            try
            {
                var queryString = @"DELETE FROM Usuarios WHERE Id = @Id";
                using (var connection = conn.ConnectionString)
                {
                    connection.Execute(queryString, new { Id = id });
                }
            }
            catch (Exception e)
            {
                System.Console.WriteLine(e.Message);
            }
        }
    }
}
