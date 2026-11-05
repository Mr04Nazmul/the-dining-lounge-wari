import { spawn } from 'node:child_process';
const args=process.argv.slice(2);const index=args.indexOf('--port');const port=index>=0?args[index+1]:'3000';
const server=spawn(process.execPath,['node_modules/next/dist/bin/next','dev','--hostname','0.0.0.0','--port',port],{stdio:'inherit'});
process.on('SIGTERM',()=>server.kill('SIGTERM'));process.on('SIGINT',()=>server.kill('SIGINT'));server.on('exit',code=>process.exit(code??0));
