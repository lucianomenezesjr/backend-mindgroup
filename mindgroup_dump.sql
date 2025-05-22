-- MySQL dump 10.13  Distrib 8.0.42, for Linux (x86_64)
--
-- Host: localhost    Database: mindgroup
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artigo`
--

DROP TABLE IF EXISTS `artigo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artigo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `conteudo` text NOT NULL,
  `autorId` int NOT NULL,
  `imagemBanner` varchar(255) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  KEY `FK_076faa4793a4883d83d4f47e401` (`autorId`),
  CONSTRAINT `FK_076faa4793a4883d83d4f47e401` FOREIGN KEY (`autorId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artigo`
--

LOCK TABLES `artigo` WRITE;
/*!40000 ALTER TABLE `artigo` DISABLE KEYS */;
INSERT INTO `artigo` VALUES (5,'O Futuro da Inteligência Artificial em 2024','Resumo: A Inteligência Artificial (IA) está evoluindo rapidamente, e 2024 promete trazer avanços significativos. Neste artigo, exploramos as tendências que devem moldar o futuro da IA.\nConteúdo:\nA Inteligência Artificial já faz parte do nosso cotidiano, desde assistentes virtuais até carros autônomos. Em 2024, especialistas preveem que a IA se tornará ainda mais integrada em setores como saúde, educação e negócios.\n\nAlgumas tendências incluem:\n\nIA Generativa: Ferramentas como ChatGPT e Midjourney devem se tornar mais precisas e acessíveis.\n\nRegulamentações: Governos devem criar leis para garantir o uso ético da IA.\n\nPersonalização: Sistemas de IA vão adaptar conteúdos e serviços conforme o perfil do usuário.\n\nCom esses avanços, é crucial discutir como a tecnologia pode beneficiar a sociedade sem comprometer a privacidade ou substituir empregos indiscriminadamente.',15,'/codigoBanner.png','2025-05-21 21:05:22.196522'),(9,'TypeScript vs. JavaScript: Quando e Por Que Migrar?','Resumo: TypeScript tem ganhado popularidade no desenvolvimento front-end e back-end. Neste artigo, exploramos suas vantagens e casos de uso ideais.\nConteúdo:\n\nTypeScript (TS) é um superset tipado de JavaScript que oferece maior segurança e produtividade para projetos complexos. Principais benefícios:\n\nTipagem Estática\n\nDetecta erros durante a compilação, evitando bugs em runtime.\n\nExemplo:\n\nfunction soma(a: number, b: number): number {\n  return a + b;\n}\n// soma(\"1\", 2); → Erro de compilação!\n\nFerramentas Inteligentes\n\nAutocompletar e refatoração mais eficientes (VS Code, WebStorm).\n\nCompatibilidade com JavaScript\n\nTS compila para JS, funcionando em qualquer ambiente.\n\nQuando migrar?\n\nProjetos em crescimento com múltiplos desenvolvedores.\n\nAplicações empresariais onde a estabilidade é crítica.',15,'/artigoTsBanner.png','2025-05-22 14:55:14.650977'),(10,'Como a IA Está Transformando o Desenvolvimento de Software','Resumo: Ferramentas de IA como GitHub Copilot e ChatGPT estão revolucionando a forma como codificamos. Descubra os impactos e desafios.\nConteúdo:\n\nA Inteligência Artificial está se tornando um \"parceiro de programação\" indispensável:\n\nCódigo Autocompletado\n\nGitHub Copilot sugere trechos baseados em contexto (economizando até 35% do tempo).\n\nDebugging Automatizado\n\nPlataformas como Amazon CodeGuru identificam vulnerabilidades em tempo real.\n\nDesafios\n\nViés em algoritmos e dependência excessiva da IA podem prejudicar o aprendizado.\n\nFuturo:\nA tendência é que IA auxilie em tarefas repetitivas, enquanto humanos focam em lógica complexa e criatividade.',15,'/codigoBanner.png','2025-05-22 14:56:05.285679'),(11,'As 5 Tendências de Tecnologia para 2024 que Você Precisa Conhecer','Computação Quântica Prática\n\nEmpresas como IBM e Google estão tornando quântica acessível para criptografia e otimização.\n\nPWAs (Progressive Web Apps)\n\nApps web com desempenho nativo e funcionamento offline.\n\nLow-Code/No-Code\n\nPlataformas como Bubble e OutSystems aceleram desenvolvimento sem codificação profunda.\n\n5G + IoT\n\nConexões ultra-rápidas impulsionando cidades inteligentes e wearables.\n\nEthical Tech\n\nMovimento por algoritmos transparentes e sustentabilidade digital.',16,'/artigoTsBanner.png','2025-05-22 14:59:37.424974'),(12,'O que são Microsserviços e Quando Usá-los?','Resumo: Microsserviços revolucionaram a forma como construímos sistemas escaláveis. Entenda seus prós e contras.\nConteúdo:\nMicrosserviços dividem uma aplicação em serviços independentes, cada um com sua própria base de dados e lógica.\n\nVantagens:\n\nEscalabilidade horizontal (ex: AWS Lambda).\n\nDeploy independente por equipe.\n\nTolerância a falhas (um serviço falha, os outros continuam).\n\nDesafios:\n\nComplexidade em gerenciar comunicação entre serviços (HTTP/gRPC).\n\nMonitoramento distribuído (ex: Prometheus + Grafana).\n\nCaso de Uso Ideal:\n\nAplicações SaaS como Netflix ou Uber.',16,'','2025-05-22 17:14:34.845784'),(13,'React Server Components: A Revolução no Front-End','Resumo: React Server Components (RSCs) prometem reduzir o bundle size e melhorar performance. Veja como funcionam.\nConteúdo:\nRSCs permitem renderizar componentes diretamente no servidor, eliminando a necessidade de enviar JavaScript para o cliente.\n\nDiferenças Chave:\n\nClient Components: Interativos (useState, useEffect).\n\nServer Components: Leves, acessam bancos de dados diretamente.\n\nExemplo Prático:\n\n// Server Component (não usa hooks)\nasync function UserProfile({ userId }) {\n  const user = await db.users.get(userId); // Direto no servidor!\n  return <Profile user={user} />;\n}\n\nQuando Usar?\n\nAplicações com conteúdo dinâmico mas pouca interatividade.',16,'','2025-05-22 17:15:29.062495'),(14,'Python vs. Go: Qual Escolher para Back-End em 2024?','Categoria: Back-End\nResumo: Comparação detalhada entre Python (Django/FastAPI) e Go (Gin) para APIs escaláveis.\nConteúdo:\n\nCritério	Python (FastAPI)	Go (Gin)\nPerformance	10x mais lento que Go	Rápido (compilado)\nConcorrência	Async (asyncio)	Goroutines nativas\nEcossistema	ML/Data Science	Cloud/DevOps\nConclusão:\n\nUse Python para prototipagem rápida ou projetos com IA.\n\nPrefira Go para APIs de alta carga (ex: fintechs).',16,'','2025-05-22 17:15:59.121054'),(15,'O Poder do Terminal: Comandos Linux que Todo Dev Deve Saber','Resumo: Domine o terminal com comandos que aceleram seu fluxo de trabalho.\nConteúdo:\n\n# 1. Buscar arquivos por conteúdo\ngrep -r \"palavra-chave\" /pasta\n\n# 2. Monitorar processos pesados\nhtop\n\n# 3. Redirecionar saídas\nnpm install > log.txt 2>&1\n\n# 4. SSH sem senha (chaves públicas)\nssh-copy-id usuario@servidor\n\n# 5. Matar processo na porta 3000\nlsof -i :3000 && kill -9 PID',16,'','2025-05-22 17:16:45.937436'),(16,'Quantum Computing para Devs: Por Onde Começar?','Resumo: Introdução prática à computação quântica com Qiskit (IBM) e Cirq (Google).\nConteúdo:\n\nConceitos Básicos:\n\nQubits (0 e 1 simultâneos).\n\nEntrelaçamento quântico.\n\nHello World em Qiskit:\n\nfrom qiskit import QuantumCircuit, transpile\nfrom qiskit_aer import AerSimulator\n\nqc = QuantumCircuit(2)\nqc.h(0)  # Porta Hadamard (superposição)\nqc.cx(0, 1)  # Emaranhamento\nprint(qc.draw())',16,'','2025-05-22 17:17:29.374160');
/*!40000 ALTER TABLE `artigo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `sobrenome` varchar(255) DEFAULT NULL,
  `imagemPerfil` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'luciano.menezes.jr11@gmail.com','1234',NULL,NULL,NULL),(2,'luciano.menezes@gmail.com','1234',NULL,NULL,NULL),(3,'teste@gmail.com','1234',NULL,NULL,NULL),(4,'tobiasperassi@gmail.com','ftftftft',NULL,NULL,NULL),(5,'teste02@email.com','$2b$10$J6JoOotTXeI.V1hHjf74tO5iLNK.RggECH6wzk6dANKVRGlUZs1Q.',NULL,NULL,NULL),(6,'teste03@gmail.com','$2b$10$QQP7vHay.XNIx9Bv86K/.eVN6b9yTYxa3GjowP2.BQhe04.ao2una',NULL,NULL,NULL),(7,'ola@email.com','$2b$10$NLTpdTmHV9iltzck8WbQlOtQoTnqxqqtQC35mA.mnjet5eibukSne',NULL,NULL,NULL),(8,'luciano@email.com','$2b$10$bfW.FO8IyMNCHlkP.uOiMucHaxbS0YzjsGsI2LNFPEDOHt3ts8ns2',NULL,NULL,NULL),(12,'ljr@gmail.com','$2b$10$d1bfuTgazf6wGeoJzQqYyeCaU7V0/EcQKQt4hqms92pluS/cjQJ1i',NULL,NULL,NULL),(15,'luciano3@email.com','1234','Luciano','Junior',''),(16,'jeduardo@email.com','1234','José','Eduardo','');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-22 17:37:41
