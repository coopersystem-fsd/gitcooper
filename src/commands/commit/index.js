// @flow
import inquirer from 'inquirer'

import getEmojis from '../../utils/getEmojis'
import prompts from './prompts'
import withHook, { registerHookInterruptionHandler } from './withHook'
import withClient from './withClient'
import { type Options } from './prompts'
import configurationVault from '../../utils/configurationVault'
import sync from './sync'

const commit = async (mode: 'client' | 'hook', options: Options) => {
  if(configurationVault.getSyncCommit()) {
    await sync()
  }

  if (mode === 'hook') registerHookInterruptionHandler()

  return getEmojis()
    .then((gitmojis) => prompts(gitmojis, options))
    .then((questions) => {
      inquirer.prompt(questions).then((answers) => {
        if (mode === 'hook') return withHook(answers)

        return withClient(answers)
      })
    })
}

export default commit
