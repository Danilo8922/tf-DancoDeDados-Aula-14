// Otimizando as consultas 

db.entregas.createIndex({cliente_id: 1, status: 1})