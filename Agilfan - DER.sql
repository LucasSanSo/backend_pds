CREATE TABLE "alunos" (
  "cpf" varchar PRIMARY KEY,
  "nome" varchar,
  "endereco" varchar,
  "telefone" varchar,
  "e_mail" varchar
);

CREATE TABLE "turmas" (
  "id_turma" varchar PRIMARY KEY,
  "curso" varchar,
  "turno" varchar,
  "ano_ref" integer,
  "semestre_ref" integer
);

CREATE TABLE "usuarios_alunos" (
  "matricula" varchar PRIMARY KEY,
  "cpf" varchar,
  "id_turma" varchar,
  "password" varchar,
  FOREIGN KEY ("cpf") REFERENCES "alunos" ("cpf"),
  FOREIGN KEY ("id_turma") REFERENCES "turmas" ("id_turma")
);

CREATE TABLE "mensalidades" (
  "id_mensalidade" varchar PRIMARY KEY,
  "usuarios_alunos" varchar,
  "mes_ref" integer,
  "ano_ref" integer,
  "dia_vcto" TIMESTAMP,
  "dia_pagamento" TIMESTAMP,
  "pago" boolean,
  FOREIGN KEY ("usuarios_alunos") REFERENCES "usuarios_alunos" ("matricula")
);

CREATE TABLE "perfis" (
  "id_perfil" varchar PRIMARY KEY,
  "description" varchar,
  "permissions" varchar
);

CREATE TABLE "usuarios_admins" (
  "id_user" varchar PRIMARY KEY,
  "id_perfil" varchar,
  "nome" varchar,
  "user" varchar,
  "password" varchar,
  "cpf" varchar,
  FOREIGN KEY ("id_perfil") REFERENCES "perfis" ("id_perfil")
);

CREATE TABLE "valores" (
  "id_valores" varchar,
  "valor_cheio" DECIMAL,
  "valor_dia_5" DECIMAL,
  "valor_dia_10" DECIMAL,
  "valor_dia_30" DECIMAL,
  "descont_bolsa_perc" float,
  "juros" DECIMAL,
  "mora" DECIMAL,
  "turma" varchar,
  PRIMARY KEY ("id_valores", "turma"),
  FOREIGN KEY ("turma") REFERENCES "turmas" ("id_turma")
);