import { ICommand } from '../../application/common/command/ICommand'
import { ICommandHandler } from '../../application/common/command/ICommandHandler'

interface ICommandHandlerMap {
  [commandType: string]: ICommandHandler<any, any>
}

export class Mediator {
  private handlers = new Map<string, ICommandHandler<ICommand, any>>()

  register<TCommand extends ICommand, TResult>(
    command: new () => TCommand,
    handler: ICommandHandler<TCommand, TResult>,
  ): void {
    this.handlers.set(command.name, handler)
  }

  send<TCommand extends ICommand>(
    command: TCommand,
  ): TCommand extends { __resultType: infer TResult } ? TResult : never {
    const handler = this.handlers.get(command.constructor.name)
    if (!handler) {
      throw new Error(`No handler found for ${command.constructor.name}`)
    }
    return handler.handle(command)
  }
}
