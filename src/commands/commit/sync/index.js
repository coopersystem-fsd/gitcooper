import chalk from 'chalk'
import { exec, getCurrentBranch } from '../../mergeTo'

const syncFromDevelop = async () => {
  const cmdArgs = [
    'merge',
    'origin/develop'
  ]
  return exec('git', cmdArgs)
}

const sync = async () => {
  const currentBranch = await getCurrentBranch()

  console.log(
    chalk.green(`Merging develop into ${currentBranch}`)
  )

  const syncStdout = await syncFromDevelop()

  console.log(
    chalk.gray(syncStdout)
  )

  console.log(
    chalk.green(`${currentBranch} is up to date`)
  )
}

export default sync
