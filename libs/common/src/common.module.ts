import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
	providers: [CommonService],
	exports: [CommonService],
	imports: [PrismaModule],
})
export class CommonModule {}
