import { Optional } from '@/core/@types/optional'
import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface INotificationProps {
  recipientId: UniqueEntityID
  title: string
  content: string
  createdAt: Date
  readAt?: Date
}

export class Notification extends Entity<INotificationProps> {
  get recipientId() {
    return this.props.recipientId
  }

  get title() {
    return this.props.title
  }

  get content() {
    return this.props.content
  }

  get readAt() {
    return this.props.readAt
  }

  get createdAt() {
    return this.props.createdAt
  }

  read() {
    this.props.readAt = new Date()
  }

  static create(
    props: Optional<INotificationProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const notification = new Notification(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return notification
  }
}
