import { ICommand } from './ICommand'

// export interface ICommandHandler {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   handle(command: ICommand): Promise<any>
// }

export interface ICommandHandler<TCommand extends ICommand, TResult> {
  handle(request: TCommand): TResult
}
