CREATE TABLE "mensalidades" (
  "id_mensalidade" varchar PRIMARY KEY,
  "matricula" varchar,
  "mes_ref" integer,
  "ano_ref" integer,
  "dia_vcto" TIMESTAMP,
  "dia_pagamento" TIMESTAMP,
  "valor_pago" float,
  "status_pago" bool,
  "id_turma" varchar
);

CREATE TABLE "usuarios" (
  "matricula" varchar PRIMARY KEY,
  "user" varchar,
  "password" varchar,
  "perfil" varchar,
  "nome" varchar,
  "endereco" varchar,
  "telefone" varchar,
  "e_mail" varchar,
  "cpf" varchar
);

CREATE TABLE "turmas" (
  "id_turma" varchar PRIMARY KEY,
  "curso" varchar,
  "turno" varchar,
  "ano_ref" integer,
  "semestre_ref" integer,
  "valor_cheio" float
);

ALTER TABLE "mensalidades" ADD FOREIGN KEY ("id_turma") REFERENCES "turmas" ("id_turma");

ALTER TABLE "mensalidades" ADD FOREIGN KEY ("matricula") REFERENCES "usuarios" ("matricula");
