import { db } from "../db.js";

export const getPecas = (req, res) => {
  // Extração dos parâmetros de query
  const { _end, _order = "ASC", _sort = "id", _start = 0, q } = req.query;

  // Cálculo para limit e offset baseado nos parâmetros de paginação
  const limit = _end ? parseInt(_end, 10) - parseInt(_start, 10) : 10; // padrão de 10 itens por página se não especificado
  const offset = _start ? parseInt(_start, 10) : 0;

  // Inicialização da cláusula WHERE para busca
  let whereClause = "";
  if (q) {
    whereClause = `WHERE descricao LIKE '%${q}%'`; // ajustar conforme necessidade das colunas de busca
  }

  // Consulta com ordenação e paginação
  const qSQL = `SELECT * FROM pecas ${whereClause} ORDER BY ${_sort} ${_order} LIMIT ${limit} OFFSET ${offset};`;

  db.query(qSQL, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};

export const getPecasId = (req, res) => {
  const { id } = req.params;
  const q = "SELECT * FROM pecas where id = ?;";

  db.query(q, [id], (err, data) => {
    // Usar parâmetros de consulta parametrizada
    if (err) {
      return res.status(500).json(err);
    }

    // Adicionar uma verificação para ver se o item foi encontrado
    if (data.length === 0) {
      return res.status(404).json({ message: "Peças not found" });
    }

    return res.status(200).json(data[0]); // Retorna apenas o primeiro item se múltiplos não forem esperados
  });
};

export const addPecas = (req, res) => {
  const q = "INSERT INTO pecas(`codigo`,`descricao`) VALUE (?)";

  const values = [req.body.codigo, req.body.descricao];

  console.log(values);
  console.log(req.body);

  db.query(q, [values], (error) => {
    if (error) return res.json(error);

    return res.status(200).json("Peça cadastrada com sucesso");
  });
};

export const updatePecas = (req, res) => {
  const q = "UPDATE pecas SET `codigo` = ?,`descricao` = ? WHERE `id` = ?";

  const values = [req.body.codigo,req.body.descricao, req.params.id]

  db.query(q, values, (error, result) => {
    if (error) return res.status(500).json(error);

    // Verifica se houve alguma linha afetada pela atualização
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Equipamento não encontrado" });
    }

    // Retorna o objeto atualizado
    db.query("SELECT * FROM pecas WHERE id = ?", req.params.id, (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data[0]);
    });
  });
};

export const deletePecas = (req, res) => {
  const q = "DELETE FROM pecas WHERE `id` = ?";

  db.query(q, [req.params.id], (error) => {
    if (error) return res.json(error);

    return res.status(200).json("Peça deletada com sucesso");
  });
};
