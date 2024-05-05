import { AuthProvider, HttpError } from "react-admin";


// Defina a URL base da API
const API_URL = 'http://localhost:4000';

export const authProvider: AuthProvider = {  
  login: async ({ username, password } ) => {    
    try {
      // Mapeando os nomes para corresponder à API
      const requestBody = JSON.stringify({ usuario: username, senha: password });

      // Faz uma requisição POST para a rota de login da API
      const response = await fetch(`${API_URL}/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      });

      // Verifica se a resposta da API é bem sucedida
      if (response.ok) {
        // Tente fazer o parse do JSON da resposta
        try {
          const data = await response.json();
          localStorage.setItem('auth', JSON.stringify({ ...data, username }));
          return Promise.resolve();
        } catch (error) {
          // Se não conseguir fazer o parse do JSON, assuma que a resposta é uma string simples
          localStorage.setItem('auth', JSON.stringify({ username }));
          return Promise.resolve();
        }
      } else {
        // Tentativa de ler o corpo da resposta como JSON ou texto
        const errorText = await response.text();
        try {
          const errorData = JSON.parse(errorText);
          return Promise.reject(new HttpError(errorData.message || 'Erro desconhecido', response.status));
        } catch {
          return Promise.reject(new HttpError(errorText, response.status));
        }
      }
    } catch (error) {
      console.error("Network error", error);
      return Promise.reject(new HttpError("Network error", 500));
    }
  },
  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => Promise.resolve(undefined),
  _getIdentity: () => {
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;
    return Promise.resolve(user ? { id: user.id, fullName: user.fullName, avatar: user.avatar } : null);
  },
  get getIdentity() {
    return this._getIdentity;
  },
  set getIdentity(value) {
    this._getIdentity = value;
  },
};

export default authProvider;




