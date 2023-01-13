const validarEmail = (email) => {
  return email?.toString().includes("@") && email?.toString().includes(".");
};

const validarSenha = (senha) => {
  return senha?.toString().length > 6;
};

const validarName = (name) => {
  return name?.toString().length > 2;
};

const validarConfirmarSenha = (senha, confirmarSenha) => {
  return validarSenha(senha) && senha === confirmarSenha;
};

export { validarEmail, validarSenha, validarName, validarConfirmarSenha };
