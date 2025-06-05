📦 Projeto: Escalabilidade e Otimização em NoSQL — Sistema de Gerenciamento de Entregas
📝 Descrição
Modelagem, escalabilidade e otimização de uma base NoSQL para um sistema de gerenciamento de entregas com alta demanda de operações de leitura e escrita em tempo real.

✅ Modelagem de Dados
Banco de Dados: MongoDB (modelo baseado em documentos)

Coleção: entregas

Campos principais:

_id: Identificador único da entrega

cliente_id: Identificador do cliente

origem e destino: Endereços envolvidos na entrega

status: Situação da entrega (ex.: "em_transito")

data_coleta e data_entrega: Datas e horários relacionados à entrega

✅ Estratégia de Escalabilidade
Tipo: Escalabilidade horizontal — adição de múltiplos servidores para lidar com o aumento de dados e operações.

Sharding:

Método: Por hash

Chave de Partição: cliente_id

Motivação:

Garante distribuição uniforme dos dados

Evita que um único shard fique sobrecarregado


✅ Monitoramento e Métricas
Métricas essenciais:

Taxa de operações por segundo (TPS): monitora o volume de leituras e escritas

Uso de CPU e memória por shard: identifica sobrecargas

Latência das consultas: assegura que o tempo de resposta esteja dentro do esperado

Rebalanceamento:

Necessário quando a distribuição de dados entre os shards se torna desigual

Pode ser realizado automaticamente via balancer ou manualmente com o comando moveChunk

🚀 Tecnologias
Banco de Dados: MongoDB

Consultas: MongoDB Shell

Monitoramento: MongoDB Atlas, Prometheus (opcional)

👨‍💻 Autor
Danilo Lenardi de Almeida