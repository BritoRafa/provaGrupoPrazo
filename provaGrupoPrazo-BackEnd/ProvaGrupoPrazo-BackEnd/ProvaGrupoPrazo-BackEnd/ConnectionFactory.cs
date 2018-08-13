using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ProvaGrupoPrazo_BackEnd
{
    public class ConnectionFactory
    {
    public SqlConnection ConnectionString {
            get
            {
                return new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;Initial Catalog=GerenciadorTarefas;Integrated Security=True;");
            }
        }

}
}
