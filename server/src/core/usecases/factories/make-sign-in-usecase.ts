import { PrismaUsersRepository } from '../../repositories/prisma/prisma-users-repository'
import { SignInUserUseCase } from '../sign-in-user-usecase'

export function makeSignInUserUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const signInUserUseCase = new SignInUserUseCase(usersRepository)

  return signInUserUseCase
}
