using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProvaGrupoPrazo_BackEnd.Models
{
    public class Tarefa
    {
        public int Id { get; set; }
        public bool Concluida { get; set; }
        public string Titulo { get; set; }
    }
}
