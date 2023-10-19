import { PrismaService } from '@/infra/prisma/prisma.service'
import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'

const pageQueryParamSchema = z.object({
  query: z.coerce.string(),
})

const queryValidationPipe = new ZodValidationPipe(pageQueryParamSchema)

type PageQueryParamSchema = z.infer<typeof pageQueryParamSchema>

@Controller('/find')
export class FindManyController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle(@Query(queryValidationPipe) query: PageQueryParamSchema) {
    const result = await this.prisma.question.findMany({
      where: {
        title: {
          contains: String(query),
          mode: 'insensitive',
        },
      },
    })
    return {
      result: {
        result,
      },
    }
  }
}
