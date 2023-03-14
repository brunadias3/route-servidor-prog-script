import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt"

@Entity({name:"users"})
export class User {
    //define a chave primária como auto incremento
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable:false,unique:true,length:70})
    mail: string;

    @Column({ nullable:false, select:false, length:100})
    password: string;

    @BeforeInsert() // A função hashPassword é disparada antes do insert e update
    @BeforeUpdate()
    hashPassword(): void {
        if (this.password) {
            // A senha é codificada usando o algoritmo do pacote bcrypt
            this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
        }
    }

    compare(input:string): Promise<boolean> {
        // A senha fornecida em input é comparada com a senha do registro armazenado no SGBD
        return bcrypt.compare(input, this.password)
    }

}