#!/usr/bin/env node
import meow from 'meow'
import updateNotifier from 'update-notifier'

import pkg from '../package.json'
import commands from './commands'
import findGitmojiCommand from './utils/findGitmojiCommand'

updateNotifier({ pkg }).notify()

const cli = meow(
  `
  Usage
    $ gitcooper
  Options
    --config, -g    Setup gitcooper-cli preferences.
    --commit, -c    Interactively commit using the prompts
    --coAuthors,    Show option to add Co-Authors on commit. Works only with --commmit option
    --refs,         Show option to add issue on commit. Works only with --commmit option
    --timeEntry,    Create a time entry registry on redmine
    --mergeTo, -m   Merge current branch to the specified
    --changeStatus  Show options to change issue status after commit
    --list, -l      List all the available gitmojis
    --search, -s    Search gitmojis
    --version, -v   Print gitcooper-cli installed version
    --update, -u    Sync emoji list with the repo
`,
  {
    flags: {
      commit: { type: 'boolean', alias: 'c' },
      config: { type: 'boolean', alias: 'g' },
      help: { type: 'boolean', alias: 'h' },
      init: { type: 'boolean', alias: 'i' },
      list: { type: 'boolean', alias: 'l' },
      remove: { type: 'boolean', alias: 'r' },
      search: { type: 'boolean', alias: 's' },
      update: { type: 'boolean', alias: 'u' },
      version: { type: 'boolean', alias: 'v' },
      coAuthors: { type: 'boolean' },
      refs: { type: 'boolean' },
      timeEntry: { type: 'boolean' },
      mergeTo: { type: 'boolean', alias: 'm' },
      changeStatus: { type: 'boolean' },
      sandbox: { type: 'boolean' }
    }
  }
)

export const options = {
  commit: () => commands.commit('client', cli.flags),
  mergeTo: () => cli.input.map(input => commands.mergeTo(input)),
  config: () => commands.config(),
  hook: () => commands.commit('hook'),
  init: () => commands.createHook(),
  list: () => commands.list(),
  remove: () => commands.removeHook(),
  search: () => cli.input.map((input) => commands.search(input)),
  update: () => commands.update()
}

findGitmojiCommand(cli, options)
