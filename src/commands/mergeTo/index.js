import chalk from 'chalk'
import execa from 'execa'
import { STATUS_CODES } from 'http'

const validateTargetBranch = async (targetBranch) => {
  const cmdArgs = [
    'branch',
    '-a'
  ]
  const executed = await execa('git', cmdArgs)
  const stdout : string = executed.stdout
  if(stdout.indexOf(`remotes/origin/${targetBranch}`) != -1) {
    return;
  }
  throw new Error('Target branch not found!');
}

const getCurrentBranch = async () => {
  const cmdArgs = [
    'branch',
    '--show-current'
  ]
  return await execa('git', cmdArgs)
}

const checkoutTo = async (targetBranch: string) => {
  const cmdArgs = [
    'checkout',
    targetBranch
  ]
  await execa('git', cmdArgs)
}

const pull = async (targetBranch: string) => {
  const cmdArgs = [
    'pull',
    'origin',
    targetBranch
  ]
  const { stdout } = await execa('git', cmdArgs)
  return stdout
}

interface Output {
  messages: String[]
}

const mergeTo = async (targetBranch: string) => {
  try {
    const output : Output = {
      messages: []
    }
    const currentBranch = getCurrentBranch()

    output.messages.push(
      chalk.blue(`Merging ${currentBranch} to ${targetBranch}`)
    )

    await validateTargetBranch(targetBranch)
    await checkoutTo(targetBranch)
    const pullStdout = await pull(targetBranch)
    output.messages.push(pullStdout)



    console.log(output.messages)
  } catch(error) {
    const coloredMessage = chalk.red(error)
    console.log(coloredMessage)
  }
}

export default mergeTo
