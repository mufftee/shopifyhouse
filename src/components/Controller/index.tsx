export default function Controller() {
  // calling IPC exposed from preload script
  window.electron.ipcRenderer.on('ipc-example', (arg) => {
    // eslint-disable-next-line no-console
    console.log(arg);
  });

  const startTest = () => {
    window.electron.ipcRenderer.sendMessage(
      'ipc-example',
      'https://www.github.com/'
    );
  };

  return (
    <div className="controller-view">
      <button type="button" onClick={() => startTest()}>
        Start Test
      </button>
    </div>
  );
}
