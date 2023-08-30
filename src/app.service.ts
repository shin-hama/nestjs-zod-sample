import { Injectable } from '@nestjs/common';

import z from 'zod';

const NestedSchema = z.object({
  hoge: z.number().positive().default(1),
  fuga: z.string().optional(),
});

const Schema = z.object({
  name: z.string().default('test'),
  nested: NestedSchema.default(NestedSchema.parse({})),
});

@Injectable()
export class AppService {
  parse(): string {
    const data = Schema.parse({ name: 'test', nested: { hoge: 2 } });
    return JSON.stringify(data);
  }

  parseEmpty(): string {
    const data = Schema.parse({});
    return JSON.stringify(data);
  }
}
