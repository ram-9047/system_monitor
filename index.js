import os from "node:os";

const cpus = os.cpus();
const cores = cpus.length;
// // console.log(cores, "current cores");
// const totalMemory = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
// // console.log(totalMemory, "GB total memory");
// const freeMemory = (os.freemem() / (1024 * 1024)).toFixed(2);
// // console.log(freeMemory, "MB free memory");
// const upTime = parseInt(os.uptime() / (60 * 60));
// // console.log(upTime, "hours up time");
// const platform = os.platform();
// // console.log(platform, "platform");
// const arch = os.arch();
// // console.log(arch, "architecture");
const systemInfo = {
  cores: cpus.length,
  totalMemory: (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2),
  freeMemory: (os.freemem() / (1024 * 1024)).toFixed(2),
  upTime: parseInt(os.uptime() / (60 * 60)),
  platform: os.platform(),
  arch: os.arch(),
};
console.log("System Info:");
console.table(systemInfo);
console.log("CPU Usage:");

function monitorCpu() {
  let oldCpus = os.cpus();

  setTimeout(() => {
    let newCpus = os.cpus();
    const usageCalculator = newCpus.map((cpu, index) => {
      return {
        core: index,
        usage: calculateCpuUsage(cpu, oldCpus[index]) + "%",
      };
    });

    // console.clear();
    // Save cursor position
    process.stdout.write("\x1B[s");
    // Clear from cursor to end of screen
    process.stdout.write("\x1B[J");

    console.table(usageCalculator);
    process.stdout.write("\x1B[u");
    oldCpus = newCpus;
  }, 1000);
}

function calculateCpuUsage(newCpu, oldCpu) {
  const idleNew = newCpu.times.idle;
  const totalNew = Object.values(newCpu.times).reduce((a, b) => a + b, 0);
  const idleOld = oldCpu.times.idle;
  const totalOld = Object.values(oldCpu.times).reduce((a, b) => a + b, 0);
  const idleDifference = idleNew - idleOld;
  const totalDifference = totalNew - totalOld;
  const used = totalDifference - idleDifference;
  const usage = ((used / totalDifference) * 100).toFixed(2);
  return usage;
}

setInterval(() => {
  monitorCpu();
}, 1000);
