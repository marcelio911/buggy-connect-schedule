import { IsNotEmpty } from 'class-validator';

export class FotoCnh {
  @IsNotEmpty()
  fotoCnh: Buffer;
}
