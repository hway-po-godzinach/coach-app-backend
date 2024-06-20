import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProgramModule } from './program/program.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ProgramModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
