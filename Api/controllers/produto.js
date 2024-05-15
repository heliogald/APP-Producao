import { db } from "../db.js";
import dayjs from "dayjs";

export const getProdutos = (req, res) => {
  // Extração dos parâmetros de query
  const { _end, _order = "ASC", _sort = "id", _start = 0, q } = req.query;

  // Cálculo para limit e offset baseado nos parâmetros de paginação
  const limit = _end ? _end - _start : 10; // padrão de 10 itens por página se não especificado
  const offset = _start ? parseInt(_start) : 0;

  // Inicialização da cláusula WHERE para busca
  let whereClause = "";
  if (q) {
    whereClause = `WHERE nomeCliente LIKE '%${q}%' OR equipamentoModelo LIKE '%${q}%' OR numeroDeSerie LIKE '%${q}%' OR \
      DATE_FORMAT(dataDeLiberacao, '%d/%m/%Y') LIKE '%${q}%' OR codigo LIKE '%${q}%' OR descricao LIKE '%${q}%' OR quantidade LIKE '%${q}%' OR void LIKE '%${q}%' `; // ajustar conforme necessidade das colunas de busca
  }

  // Consulta com ordenação e paginação
  const qSQL = `SELECT *, DATE_FORMAT(dataDeLiberacao, '%d/%m/%Y') AS dataDeLiberacao FROM produtos ${whereClause} ORDER BY ${_sort} ${_order} LIMIT ${limit} OFFSET ${offset};`;

  db.query(qSQL, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};

export const getProdutosId = (req, res) => {
  const { id } = req.params; // Acessar o ID passado como parâmetro na rota
  const q =
    "SELECT *, DATE_FORMAT(dataDeLiberacao, '%d/%m/%Y') AS dataDeLiberacao FROM produtos WHERE id = ?;";

  db.query(q, [id], (err, data) => {
    // Usar parâmetros de consulta parametrizada
    if (err) {
      return res.status(500).json(err);
    }

    // Adicionar uma verificação para ver se o item foi encontrado
    if (data.length === 0) {
      return res.status(404).json({ message: "Item not found" });
    }

    return res.status(200).json(data[0]); // Retorna apenas o primeiro item se múltiplos não forem esperados
  });
};

export const addProdutos = (req, res) => {
  const values = req.body.pecas.map((peca) => [    
    req.body.nomeCliente,
    req.body.equipamentoModelo,
    req.body.numeroDeSerie,
    req.body.dataDeLiberacao,
    peca.codigo,
    peca.descricao,
    peca.quantidade,
    peca.void,
  ]);  
  const q =
    "INSERT INTO produtos(`nomeCliente`, `equipamentoModelo`, `numeroDeSerie`, `dataDeLiberacao`, `codigo`, `descricao`, `quantidade`, `void`) VALUES ?";

  db.query(q, [values], (error) => {
    if (error) return res.json(error);

    return res.status(200).json("Itens cadastrados com sucesso");
  });
};


export const updateProdutos = (req, res) => {
  // Converter a data de liberação para o formato YYYY-MM-DD
  const formattedDate = dayjs(req.body.dataDeLiberacao, "DD/MM/YYYY").format(
    "YYYY-MM-DD"
  );

  const q =
    "UPDATE produtos SET `nomeCliente` = ?, `equipamentoModelo` = ?, `numeroDeSerie` = ?, `dataDeLiberacao` = ?,\
    `codigo` = ?, `descricao` = ?, `quantidade` = ?, `void` = ? WHERE `id` = ?";

  const values = [
    req.body.nomeCliente,
    req.body.equipamentoModelo,
    req.body.numeroDeSerie,
    formattedDate, // Usar a data formatada
    req.body.codigo,
    req.body.descricao,
    req.body.quantidade,
    req.body.void,
  ];
  console.log(values);

  db.query(q, [...values, req.params.id], (error) => {
    if (error) return res.status(500).json({ error: "Internal Server Error" });

    return res.status(200).json("Item atualizado com sucesso");
  });
};

export const deleteProdutos = (req, res) => {
  const q = "DELETE FROM produtos WHERE `id` = ?";

  db.query(q, [req.params.id], (error) => {
    if (error) return res.json(error);

    return res.status(200).json("Item deletado com sucesso");
  });
};
