using Microsoft.EntityFrameworkCore;
using teste.Objetos;

namespace teste.Models
{
    public class UsuarioContext : DbContext
    {

        public DbSet<Usuario> Users { get; set; } = null!;

        public UsuarioContext(DbContextOptions<UsuarioContext> options)
       : base(options)
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite(@"Data Source=D:\Repositorio\teste\LoginsDb.db");
    }
}
