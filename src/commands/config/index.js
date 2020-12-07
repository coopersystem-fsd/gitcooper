// @flow
import inquirer from 'inquirer'

import configurationPrompts, { CONFIGURATION_PROMPT_NAMES } from './prompts'
import configurationVault from '../../utils/configurationVault'

const config = () => {
  inquirer.prompt(configurationPrompts()).then((answers) => {
    configurationVault.setAutoAdd(answers[CONFIGURATION_PROMPT_NAMES.AUTO_ADD])
    configurationVault.setEmojiFormat(
      answers[CONFIGURATION_PROMPT_NAMES.EMOJI_FORMAT]
    )
    configurationVault.setSignedCommit(
      answers[CONFIGURATION_PROMPT_NAMES.SIGNED_COMMIT]
    )
    configurationVault.setScopePrompt(
      answers[CONFIGURATION_PROMPT_NAMES.SCOPE_PROMPT]
    ),
    configurationVault.setContacts(
      answers[CONFIGURATION_PROMPT_NAMES.CONTACTS]
    ),
    configurationVault.setLdapUsername(
      answers[CONFIGURATION_PROMPT_NAMES.LDAP_USERNAME]
    ),
    configurationVault.setLdapPassword(
      answers[CONFIGURATION_PROMPT_NAMES.LDAP_PASSWORD]
    ),
    configurationVault.setSyncCommit(
      answers[CONFIGURATION_PROMPT_NAMES.SYNC_COMMIT]
    )
  })
}

export default config
