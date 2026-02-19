import type ExtractorCodec from './ExtractorCodec.js';
import type formats from './index.js';

export type BuiltInMessagesFormat = keyof typeof formats;

type CustomMessagesFormat = {
  codec: string | (() => ExtractorCodec);
  extension: `.${string}`;
};

export type MessagesFormat = BuiltInMessagesFormat | CustomMessagesFormat;
