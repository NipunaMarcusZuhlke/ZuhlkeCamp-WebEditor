import { UserConfig } from 'monaco-editor-wrapper';
import { syntaxDefinitions } from './syntax-definitions';

export const LANG_ID = 'hello';
export const LANG_EXTENSION = 'hello';

const LS_WS_URL = 'ws://localhost:8080/ls';

export const lsConfig: UserConfig = {
  wrapperConfig: {
    editorAppConfig: {
      $type: 'classic',
      codeResources: {
        main: {
          text: '',
          fileExt: LANG_EXTENSION,
        },
      },
      useDiffEditor: false,
      languageDef: {
        languageExtensionConfig: {
          id: LANG_ID,
          extensions: [LANG_EXTENSION],
        },
        monarchLanguage: syntaxDefinitions,
      },
    },
  },
  languageClientConfig: {
    languageId: LANG_ID,
    options: {
      $type: 'WebSocketUrl',
      url: LS_WS_URL,
      startOptions: {
        onCall: () => {
          console.log('Connected to socket.');
        },
        reportStatus: true,
      },
      stopOptions: {
        onCall: () => {
          console.log('Disconnected from socket.');
        },
        reportStatus: true,
      },
    },
  },
};
