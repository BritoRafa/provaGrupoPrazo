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
        public int AdicionarTarefa(Tarefa tarefa)
        {
            try
            {
                var queryString = @"INSERT INTO Tarefas (Id, Titulo) VALUES (@Id, @Titulo)";
                using (var connection = conn.ConnectionString)
                {
                    return connection.Execute(queryString, tarefa);
                }
            }
            catch (Exception)
            {
                return 0;
            }
        }
    }
}
