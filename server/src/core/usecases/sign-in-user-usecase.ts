import { GenerateAccessToken } from '../../lib/generate-token'
import { UsersRepository } from '../repositories/users-repository'

interface SignInUserUseCaseRequest {
  pic: string
  name: string
  email: string
}

export class SignInUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ pic, name, email }: SignInUserUseCaseRequest) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)
    const generateAccessToken = new GenerateAccessToken()

    if (userAlreadyExists) {
      const access_token = generateAccessToken.execute({
        id: userAlreadyExists.id,
      })

      return {
        user: userAlreadyExists,
        access_token,
      }
    }

    const user = await this.usersRepository.create({ pic, name, email })
    const access_token = generateAccessToken.execute({
      id: user.id,
    })
    return {
      user,
      access_token,
    }
  }
}
