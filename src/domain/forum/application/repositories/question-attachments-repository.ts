import { QuestionAttachment } from '../../enterprise/entities/question-attachment'

export abstract class IQuestionAttachmentsRepository {
  abstract createMany(attachments: QuestionAttachment[]): Promise<void>
  abstract deleteMany(attachment: QuestionAttachment[]): Promise<void>

  abstract findManyByQuestionId(
    questionId: string,
  ): Promise<QuestionAttachment[]>

  abstract deleteManyByQuestionId(questionId: string): Promise<void>
}
