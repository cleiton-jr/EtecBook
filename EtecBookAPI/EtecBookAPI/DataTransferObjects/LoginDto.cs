using System.ComponentModel.DataAnnotations;

namespace EtecBookAPI.DataTransferObjects;

public class LoginDto
{
    [Required(ErrorMessage = "Email ou Nome de Usuário requerido")]
    public string Email { get; set; }

    [DataType(DataType.Password)]
    [Required(ErrorMessage = "A Senha é requerida")]
    public string Password { get; set; }
}
