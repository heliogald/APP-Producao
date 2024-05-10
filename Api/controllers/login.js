// import bcrypt from 'bcrypt';
// import { db } from '../db.js'; // Certifique-se de que a importação corresponda à implementação real do seu db

// export const addUsuario = async (req, res) => {
//   const { nome, email, usuario, senha } = req.body;

//   // Verificar se nome, email, usuario e senha foram fornecidos
//   if (!nome || !email || !usuario || !senha) {
//     return res.status(400).send("Preencha todos os dados.");
//   }

//   try {
//     // Verificar se o usuário ou email já existe no banco de dados
//     const EXIST_USER_QUERY = "SELECT * FROM users WHERE usuario = ? OR email = ?";
//     db.query(EXIST_USER_QUERY, [usuario, email], async (err, results) => {
//       if (err) {
//         return res.status(500).send("Erro ao verificar usuário existente");
//       } else if (results.length > 0) {
//         // Se já existir um usuário ou email, não permitir o registro
//         return res.status(409).send("Usuário ou e-mail já registrado");
//       } else {
//         // Se não existir, prosseguir com o registro
//         const saltRounds = 10; // Número de rounds para o salt
//         const hashedPassword = await bcrypt.hash(senha, saltRounds);
//         const INSERT_USER_QUERY = "INSERT INTO users (nome, email, usuario, senha) VALUES (?, ?, ?, ?)";

//         db.query(INSERT_USER_QUERY, [nome, email, usuario, hashedPassword], (err, result) => {
//           if (err) {
//             return res.status(500).send("Erro ao registrar usuário");
//           } else {
//             return res.send("Usuário registrado com sucesso");
//           }
//         });
//       }
//     });
//   } catch (error) {
//     return res.status(500).send("Erro ao criar hash da senha");
//   }
// };

// export const getLogin = (req, res) => {
//   const { usuario, senha } = req.body;

//   // Verificar se nome e senha foram fornecidos
//   if (!usuario || !senha) {
//     return res.status(400).send("Usuário e senha são necessários.");
//   }

//   const SELECT_USER_QUERY = "SELECT * FROM users WHERE usuario = ?";

//   db.query(SELECT_USER_QUERY, [usuario], async (err, results) => {
//     if (err) {
//       res.status(500).send("Erro ao autenticar usuário");
//     } else if (results.length === 0) {
//       res.status(401).send("Usuário não cadastrado");
//     } else {
//       const user = results[0];
//       try {
//         const match = await bcrypt.compare(senha, user.senha);
//         if (match) {
//           res.send("Login bem-sucedido");
//         } else {
//           res.status(401).send("Senha incorreta");
//         }
//       } catch (error) {
//         res.status(500).send("Erro ao comparar senhas");
//       }
//     }
//   });
// };



// controllers/login.js
import bcrypt from 'bcrypt';
import { db } from '../db.js';

export const addUsuario = async (req, res) => {
  const { nome, email, usuario, senha } = req.body;

  if (!nome || !email || !usuario || !senha) {
    return res.status(400).send("Preencha todos os dados.");
  }

  try {
    const EXIST_USER_QUERY = "SELECT * FROM users WHERE usuario = ? OR email = ?";
    db.query(EXIST_USER_QUERY, [usuario, email], async (err, results) => {
      if (err) {
        return res.status(500).send("Erro ao verificar usuário existente");
      } else if (results.length > 0) {
        return res.status(409).send("Usuário ou e-mail já registrado");
      } else {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(senha, saltRounds);
        const INSERT_USER_QUERY = "INSERT INTO users (nome, email, usuario, senha) VALUES (?, ?, ?, ?)";
        db.query(INSERT_USER_QUERY, [nome, email, usuario, hashedPassword], (err, result) => {
          if (err) {
            return res.status(500).send("Erro ao registrar usuário");
          } else {
            return res.send("Usuário registrado com sucesso");
          }
        });
      }
    });
  } catch (error) {
    return res.status(500).send("Erro ao criar hash da senha");
  }
};


export const editUsuario = async (req, res) => {
  const { nome, email, usuario, senha } = req.body;

  // Certifique-se de que todos os campos necessários estão presentes
  if (!nome || !email || !usuario || !senha) {
    return res.status(400).send("Todos os campos são necessários para atualização.");
  }

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(senha, saltRounds);  // Criptografando a senha

    const q = "UPDATE users SET nome = ?, email = ?, usuario = ?, senha = ? WHERE id = ?";
    const values = [nome, email, usuario, hashedPassword];

    db.query(q, [...values, req.params.id], (error, result) => {
      if (error) {
        return res.status(500).send("Internal Server Error");
      } else if (result.affectedRows === 0) {
        return res.status(404).send("Usuário não encontrado");
      } else {
        return res.status(200).send("Usuário atualizado com sucesso");
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erro ao criar hash da senha");
  }
};



export const deleteUsuario = async (req, res) => {
  const { id } = req.params; // Usando parâmetros de rota

  if (!id) {
    return res.status(400).send("ID do usuário é necessário para exclusão.");
  }

  const DELETE_USER_QUERY = "DELETE FROM users WHERE id = ?";
  db.query(DELETE_USER_QUERY, [id], (err, result) => {
    if (err) {
      return res.status(500).send("Erro ao deletar usuário");
    } else if (result.affectedRows === 0) {
      return res.status(404).send("Usuário não encontrado");
    } else {
      return res.send("Usuário deletado com sucesso");
    }
  });
};


export const listUsuarios = (req, res) => {
  const { _end, _order = 'ASC', _sort = 'id', _start = 0, q } = req.query;  

  // Cálculo para limit e offset baseado nos parâmetros de paginação
  const limit = _end ? _end - _start : 10; // padrão de 10 itens por página se não especificado
  const offset = _start ? parseInt(_start) : 0;

  // Inicialização da cláusula WHERE para busca
  let whereClause = '';
  if (q) {
      whereClause = `WHERE nome LIKE '%${q}%' OR email LIKE '%${q}%' OR usuario`; // ajustar conforme necessidade das colunas de busca
     
  }
  // Consulta com ordenação e paginação
  const qSQL = `SELECT * FROM users ${whereClause} ORDER BY ${_sort} ${_order} LIMIT ${limit} OFFSET ${offset};`;

  db.query(qSQL, (err, data) => {
      if (err) {
          return res.status(500).json(err);
      }
      return res.status(200).json(data);
  });
};


export const getUsuarioById = (req, res) => {
  const { id } = req.params; // Assuming ID comes from route parameter
  const SELECT_USER_BY_ID_QUERY = "SELECT * FROM users WHERE id = ?";
  db.query(SELECT_USER_BY_ID_QUERY, [id], (err, results) => {
    if (err) {
      return res.status(500).send("Erro ao buscar usuário");
    } else if (results.length === 0) {
      return res.status(404).send("Usuário não encontrado");
    } else {
      return res.json(results[0]);
    }
  });
};

export const getLogin = (req, res) => {
  const { usuario, senha } = req.body;

  if (!usuario || !senha) {
    return res.status(400).send("Usuário e senha são necessários.");
  }

  const SELECT_USER_QUERY = "SELECT * FROM users WHERE usuario = ?";
  db.query(SELECT_USER_QUERY, [usuario], async (err, results) => {
    if (err) {
      res.status(500).send("Erro ao autenticar usuário");
    } else if (results.length === 0) {
      res.status(401).send("Usuário não cadastrado");
    } else {
      const user = results[0];
      try {
        const match = await bcrypt.compare(senha, user.senha);
        if (match) {
          res.send("Login bem-sucedido");
        } else {
          res.status(401).send("Senha incorreta");
        }
      } catch (error) {
        res.status(500).send("Erro ao comparar senhas");
      }
    }
  });
};
