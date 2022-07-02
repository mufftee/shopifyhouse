import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type IcpExampleChannel = 'ipc-example';

contextBridge.exposeInMainWorld('electron', {
  icpExample: {
    sendMessage(channel: IcpExampleChannel, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: IcpExampleChannel, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => ipcRenderer.removeListener(channel, subscription);
    },
    once(channel: IcpExampleChannel, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
});
