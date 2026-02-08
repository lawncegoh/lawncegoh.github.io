const { ChildProcess } = require('node:child_process');

const originalKill = process.kill.bind(process);
const originalChildKill = ChildProcess.prototype.kill;

process.kill = (pid, signal) => {
  try {
    return originalKill(pid, signal);
  } catch (error) {
    if (error && error.code === 'EPERM') {
      return false;
    }
    throw error;
  }
};

ChildProcess.prototype.kill = function patchedKill(signal) {
  try {
    return originalChildKill.call(this, signal);
  } catch (error) {
    if (error && error.code === 'EPERM') {
      return false;
    }
    throw error;
  }
};
