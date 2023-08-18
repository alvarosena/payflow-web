import { sign } from 'jsonwebtoken'

interface Props {
  id?: string
}

export const configProps = {
  jwt: {
    secret: 'b2edc2b5147c0583265864cd99931fb2',
    expiresIn: '1d',
  },
}

export class GenerateAccessToken {
  execute(props: Props) {
    const { secret, expiresIn } = configProps.jwt

    if (secret) {
      const access_token = sign({}, secret, {
        subject: props.id,
        expiresIn,
      })

      return {
        access_token,
      }
    }
  }
}

const generate = new GenerateAccessToken()
generate.execute({ id: 'id' })
