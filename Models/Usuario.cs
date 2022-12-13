using System.ComponentModel.DataAnnotations;

namespace teste.Objetos
{
    public class Usuario
    {
        public int id { get; set; }
        [Required]
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string CPF { get; set; }
        public string Endereco { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string ConfSenha { get; set; }
    }
}
