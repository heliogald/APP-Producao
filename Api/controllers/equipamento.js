import { db } from "../db.js";

export const getEquipamentos = (req, res) => {
  // Extração dos parâmetros de query
  const { _end, _order = "ASC", _sort = "id", _start = 0, q } = req.query;

  // Cálculo para limit e offset baseado nos parâmetros de paginação
  const limit = _end ? parseInt(_end, 10) - parseInt(_start, 10) : 10; // padrão de 10 itens por página se não especificado
  const offset = _start ? parseInt(_start, 10) : 0;

  // Inicialização da cláusula WHERE para busca
  let whereClause = "";
  if (q) {
    whereClause = `WHERE equipamentoModelo LIKE '%${q}%'`; // ajustar conforme necessidade das colunas de busca
  }

  // Consulta com ordenação e paginação
  const qSQL = `SELECT * FROM equipamentos ${whereClause} ORDER BY ${_sort} ${_order} LIMIT ${limit} OFFSET ${offset};`;

  db.query(qSQL, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};

export const getEquipamentosId = (req, res) => {
  const { id } = req.params;
  const q = "SELECT * FROM equipamentos where id = ?;";

  db.query(q, [id], (err, data) => {
    // Usar parâmetros de consulta parametrizada
    if (err) {
      return res.status(500).json(err);
    }

    // Adicionar uma verificação para ver se o item foi encontrado
    if (data.length === 0) {
      return res.status(404).json({ message: "Equipamento not found" });
    }

    return res.status(200).json(data[0]); // Retorna apenas o primeiro item se múltiplos não forem esperados
  });
};

export const addEquipamentos = (req, res) => {
  const q = "INSERT INTO equipamentos(`equipamentoModelo`) VALUE(?)";

  const values = [req.body.equipamentoModelo];

  console.log(values);
  console.log(req.body);

  db.query(q, [values], (error) => {
    if (error) return res.json(error);

    return res.status(200).json("Cliente cadastrado com sucesso");
  });
};

export const updateEquipamentos = (req, res) => {
  const q = "UPDATE equipamentos SET `equipamentoModelo` = ? WHERE `id` = ?";

  const values = [req.body.equipamentoModelo, req.params.id];

  db.query(q, values, (error, result) => {
    if (error) return res.status(500).json(error);

    // Verifica se houve alguma linha afetada pela atualização
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Equipamento não encontrado" });
    }

    // Retorna o objeto atualizado
    db.query(
      "SELECT * FROM equipamentos WHERE id = ?",
      req.params.id,
      (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data[0]);
      }
    );
  });
};

export const deleteEquipamentos = (req, res) => {
  const q = "DELETE FROM equipamentos WHERE `id` = ?";

  db.query(q, [req.params.id], (error) => {
    if (error) return res.json(error);

    return res.status(200).json("Cliente deletado com sucesso");
  });
};
