import chalk from 'chalk'
import execa from 'execa'

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

const exec = async (cmd, args) => {
  const { stdout } = await execa(cmd, args)
  return stdout
}

const getCurrentBranch = async () => {
  const cmdArgs = [
    'branch',
    '--show-current'
  ]
  return exec('git', cmdArgs)
}

const checkoutTo = async (targetBranch: string) => {
  const cmdArgs = [
    'checkout',
    targetBranch
  ]
  return exec('git', cmdArgs)
}

const pull = async (targetBranch: string) => {
  const cmdArgs = [
    'pull',
    'origin',
    targetBranch
  ]
  return exec('git', cmdArgs)
}

const merge = async (fromBranch: string) => {
  const cmdArgs = [
    'merge',
    `origin/${fromBranch}`
  ]
  return exec('git', cmdArgs)
}

interface Output {
  messages: String[]
}

const mergeTo = async (targetBranch: string) => {
  try {
    const output : Output = {
      messages: []
    }
    const currentBranch = await getCurrentBranch()

    output.messages.push(
      `Merging ${currentBranch} to ${targetBranch}`
    )

    await validateTargetBranch(targetBranch)

    await checkoutTo(targetBranch)

    const pullStdout = await pull(targetBranch)
    output.messages.push(pullStdout)

    const mergeStdout = await merge(currentBranch)
    output.messages.push(mergeStdout)

    console.log(output.messages)

  } catch(error) {
    const coloredMessage = chalk.red(error)
    console.log(coloredMessage)
  }
}

export default mergeTo
