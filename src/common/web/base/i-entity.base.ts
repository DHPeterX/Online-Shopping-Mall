import { Column, CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class IBaseEntity {
	@PrimaryColumn({ name: 'ID', default: () => 'gen_random_uuid()' })
	id: string;

	@IsOptional()
	@Column({ name: 'NAME', nullable: true, comment: 'Name' })
	name: string;

	@IsOptional()
	@Column({ name: 'REMARK', nullable: true, comment: 'Remark' })
	remark: string;

	@Exclude()
	@IsOptional()
	@Column({ name: 'REMARK_IT', nullable: true, comment: 'Remark (IT)' })
	remarkIt: string;

	@Exclude()
	@IsOptional()
	@Column({
		name: 'DEL_FLAG',
		default: 'N',
		nullable: false,
		comment: 'Del Flag',
	})
	@Exclude()
	@IsOptional()
	@Column({
		name: 'SYSDATE',
		type: 'timestamp',
		nullable: false,
		comment: 'DB SystemTime',
		default: () => 'CURRENT_TIMESTAMP',
	})
	sysdate: Date;

	@IsOptional()
	@CreateDateColumn()
	@Column({
		name: 'CREATED_AT',
		type: 'date',
		nullable: true,
		comment: 'Created At',
	})
	createdAt: string;

	@IsOptional()
	@Column({
		length: 64,
		name: 'CREATED_BY',
		nullable: true,
		comment: 'Created By',
	})
	createdBy: string;

	@IsOptional()
	@Column({
		length: 255,
		name: 'CREATED_NAME',
		nullable: true,
		comment: 'Created Name',
	})
	createdName: string;

	@IsOptional()
	@UpdateDateColumn()
	@Column({
		name: 'UPDATED_AT',
		type: 'date',
		nullable: true,
		comment: 'Updated At',
	})
	updatedAt: string;

	@IsOptional()
	@Column({
		length: 64,
		name: 'UPDATED_BY',
		nullable: true,
		comment: 'Updated By',
	})
	updatedBy: string;

	@IsOptional()
	@Column({
		length: 255,
		name: 'UPDATED_NAME',
		nullable: true,
		comment: 'Updated Name',
	})
	updatedName: string;
}
