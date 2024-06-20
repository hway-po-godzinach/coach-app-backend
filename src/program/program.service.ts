import { Injectable } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProgramService {
  constructor(private prismaService: PrismaService) {}

  create(createProgramDto: CreateProgramDto) {
    const { name, description } = createProgramDto;

    return this.prismaService.program.create({
      data: {
        name,
        description,
      },
    });
  }

  findAll() {
    return this.prismaService.program.findMany();
  }

  findOne(id: string) {
    return this.prismaService.program.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateProgramDto: UpdateProgramDto) {
    const { name, description } = updateProgramDto;

    return this.prismaService.program.update({
      data: {
        name,
        description,
      },
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.prismaService.program.delete({
      where: {
        id,
      },
    });
  }
}
