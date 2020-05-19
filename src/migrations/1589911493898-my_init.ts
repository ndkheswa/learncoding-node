import {MigrationInterface, QueryRunner} from "typeorm";

export class MyInit1589911493898 implements MigrationInterface {
    name = 'myInit1589911493898'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_table" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_b02a47aeb5bfd6728e8eae9c143" UNIQUE ("username"), CONSTRAINT "PK_c50d83972fb8fa9d6cddcae7201" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users_table"`, undefined);
    }

}
