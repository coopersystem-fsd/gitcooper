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

const setEmojiFormat = (emojiFormat: string) => {
  config.set(CONFIGURATION_PROMPT_NAMES.EMOJI_FORMAT, emojiFormat)
}

const setSignedCommit = (signedCommit: boolean) => {
  config.set(CONFIGURATION_PROMPT_NAMES.SIGNED_COMMIT, signedCommit)
}

const setScopePrompt = (scopePrompt: boolean) => {
  config.set(CONFIGURATION_PROMPT_NAMES.SCOPE_PROMPT, scopePrompt)
}

const setContacts = (contacts: string) => {
  config.set(CONFIGURATION_PROMPT_NAMES.ADD_CONTACTS, contacts)
}

const getAutoAdd = (): boolean => {
  return config.get(CONFIGURATION_PROMPT_NAMES.AUTO_ADD) || false
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

const getContacts = (): string => {
  return config.get(CONFIGURATION_PROMPT_NAMES.ADD_CONTACTS) || ''
}

export default {
  getAutoAdd,
  getEmojiFormat,
  getScopePrompt,
  getSignedCommit,
  getContacts,
  setAutoAdd,
  setEmojiFormat,
  setScopePrompt,
  setSignedCommit,
  setContacts
}
