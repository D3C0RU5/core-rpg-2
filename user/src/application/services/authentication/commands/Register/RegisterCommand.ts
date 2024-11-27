import Command from "../../../../common/command/ICommand";

export class RegisterCommand implements Command {

  operation = "register";

  constructor(readonly name: string, readonly email: string, readonly password: string) {
  }
}