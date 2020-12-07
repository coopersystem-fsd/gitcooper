// @flow
import Conf from 'conf'

import {
  CONFIGURATION_PROMPT_NAMES,
  EMOJI_COMMIT_FORMATS
} from '../commands/config/prompts'

export const config = new Conf({ projectName: 'gitmoji' })

const setAutoAdd = (autoAdd: boolean) => {
  config.set(CONFIGURATION_PROMPT_NAMES.AUTO_ADD, autoAdd)
}

const setContacts = (contacts: string) => {
  config.set(CONFIGURATION_PROMPT_NAMES.CONTACTS, contacts)
}

const setEmojiFormat = (emojiFormat: string) => {
  config.set(CONFIGURATION_PROMPT_NAMES.EMOJI_FORMAT, emojiFormat)
}

const setSignedCommit = (signedCommit: boolean) => {
  config.set(CONFIGURATION_PROMPT_NAMES.SIGNED_COMMIT, signedCommit)
}

const setScopePrompt = (scopePrompt: boolean) => {
  config.set(CONFIGURATION_PROMPT_NAMES.SCOPE_PROMPT, scopePrompt)
}

const setLdapUsername = (username: string) => {
  config.set(CONFIGURATION_PROMPT_NAMES.LDAP_USERNAME, username)
}

const setLdapPassword = (password: string) => {
  config.set(CONFIGURATION_PROMPT_NAMES.LDAP_PASSWORD, password)
}

const setSyncCommit = (sync: boolean) => {
  config.set(CONFIGURATION_PROMPT_NAMES.SYNC_COMMIT, sync)
}

const getAutoAdd = (): boolean => {
  return config.get(CONFIGURATION_PROMPT_NAMES.AUTO_ADD) || false
}

const getContacts = (): string => {
  return config.get(CONFIGURATION_PROMPT_NAMES.CONTACTS) || ''
}

const getEmojiFormat = (): string => {
  return (
    config.get(CONFIGURATION_PROMPT_NAMES.EMOJI_FORMAT) ||
    EMOJI_COMMIT_FORMATS.CODE
  )
}

const getSignedCommit = (): boolean => {
  return config.get(CONFIGURATION_PROMPT_NAMES.SIGNED_COMMIT) || false
}

const getScopePrompt = (): boolean => {
  return config.get(CONFIGURATION_PROMPT_NAMES.SCOPE_PROMPT) || false
}

const getLdapUsername = (): string => {
  return config.get(CONFIGURATION_PROMPT_NAMES.LDAP_USERNAME) || ''
}

const getLdapPassword = (): string => {
  return config.get(CONFIGURATION_PROMPT_NAMES.LDAP_PASSWORD) || ''
}

const getSyncCommit = () : boolean => {
  return config.get(CONFIGURATION_PROMPT_NAMES.SYNC_COMMIT) || false
}

export default {
  getAutoAdd,
  getContacts,
  getEmojiFormat,
  getScopePrompt,
  getSignedCommit,
  getLdapPassword,
  getLdapUsername,
  getSyncCommit,
  setAutoAdd,
  setContacts,
  setEmojiFormat,
  setScopePrompt,
  setSignedCommit,
  setLdapPassword,
  setLdapUsername,
  setSyncCommit
}
