import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Either, right } from '@/core/either'
import { Notification } from '../../enterprise/entities/notification'
import { INotificationsRepository } from '../repositories/notifications-repository'

export interface ISendNotificationUseCaseRequest {
  recipientId: string
  title: string
  content: string
}

export type ISendNotificationUseCaseResponse = Either<
  null,
  {
    notification: Notification
  }
>

export class SendNotificationUseCase {
  constructor(private notificationRepository: INotificationsRepository) {}

  async execute({
    recipientId,
    title,
    content,
  }: ISendNotificationUseCaseRequest): Promise<ISendNotificationUseCaseResponse> {
    const notification = Notification.create({
      recipientId: new UniqueEntityID(recipientId),
      title,
      content,
    })

    await this.notificationRepository.create(notification)

    return right({
      notification,
    })
  }
}
