using Dapper;
using ProvaGrupoPrazo_BackEnd.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProvaGrupoPrazo_BackEnd.Repository
{
    public class TarefaRepository
    {
        private ConnectionFactory conn;
        public TarefaRepository()
        {
            conn = new ConnectionFactory();
        }
        public List<Tarefa> CarregarTarefas()
        {
            try
            {
                var queryString = @"SELECT * FROM Tarefas";
                var tarefas = new List<Tarefa>();
                using (var conection = conn.ConnectionString)
                {
                    tarefas = conection.Query<Tarefa>(queryString).ToList();
                }
                return tarefas;
            }
            catch (Exception)
            {
                return null;
            }
        }
        public void AdicionarTarefa(Tarefa tarefa)
        {
            try
            {
                var queryString = @"INSERT INTO Tarefas (Titulo) VALUES (@Titulo)";
                using (var connection = conn.ConnectionString)
                {
                    connection.Execute(queryString, tarefa);
                }
            }
            catch (Exception e)
            {
                System.Console.WriteLine(e.Message);
            }
        }
        public void EditarTarefa(Tarefa tarefa)
        {
            try
            {
                var queryString = @"UPDATE Tarefas SET Titulo = @Titulo WHERE Id = @Id";
                using(var connection = conn.ConnectionString)
                {
                    connection.Execute(queryString, tarefa);
                }
            }
            catch (Exception e)
            {
                System.Console.WriteLine(e.Message);
            }
        }
        public void ExcluirTarefa(int id)
        {
            try
            {
                var queryString = @"DELETE FROM Tarefas WHERE Id = @Id";
                using(var connection = conn.ConnectionString)
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
