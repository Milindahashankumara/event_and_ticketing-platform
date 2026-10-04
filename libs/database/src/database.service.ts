import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/prisma/sqlite/driver';
import { Pool } from 'node_modules/@types/pg/index.mjs';
import * as schema from './schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres/driver';

@Injectable()
export class DatabaseService implements OnModuleDestroy {
  private pool: Pool;
  public db: NodePgDatabase<typeof schema>;

  constructor() {
    const connectionString = process.env.DATABASE_URL!;

    this.pool = new Pool({
      connectionString,
    });
    this.db = drizzle(this.pool, { schema });

    console.log('Database connected');
  }

  async onModuleDestroy() {
    await this.pool.end();
  }

  get schema() {
    return schema;
  }
}
