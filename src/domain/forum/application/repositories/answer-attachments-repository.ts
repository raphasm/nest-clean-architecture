import { AnswerAttachment } from '../../enterprise/entities/answer-attachment'

export abstract class IAnswerAttachmentsRepository {
  abstract findManyByAnswerId(answerId: string): Promise<AnswerAttachment[]>

  abstract deleteManyByAnswerId(answerId: string): Promise<void>
}
