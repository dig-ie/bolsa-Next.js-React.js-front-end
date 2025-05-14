interface Theme {
  colors: {
    customBlue: string;
    primaryGreen: string;
    secondaryColor: string;
    alertColor: string;
    alertError: string;
    alertSuccess: string;
    fundoEscuro: string;
    backgroundClaro: string;
    textClaro: string;
  };
}

const theme: Theme = {
  colors: {
    customBlue: '#1e40af',
    primaryGreen: '#2ecc71', // Verde
    secondaryColor: '#2c3e50', // Grafite
    alertColor: '#f1c40f', // Âmbar
    alertError: '#e74c3c', // Vermelho
    alertSuccess: '#27ae60', // Verde escuro
    fundoEscuro: '#1e272e', // Azul Marinho Escuro
    backgroundClaro: '#f5f6fa', // Cinza Claro
    textClaro: '#333333', // Cinza Escuro
  },
};