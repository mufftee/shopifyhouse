import { IcpExampleChannel } from 'main/preload';

declare global {
  interface Window {
    electron: {
      icpExample: {
        sendMessage(channel: IcpExampleChannel, args: string): void;
        on(
          channel: string,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: string, func: (...args: unknown[]) => void): void;
      };
    };
  }
}

export {};
