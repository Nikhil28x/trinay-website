import { cpSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const projectRoot = process.cwd();
const cloudflareOutput = join(projectRoot, '.svelte-kit', 'cloudflare');
const deploymentOutput = join(projectRoot, 'dist');
const serverOutput = join(deploymentOutput, 'server');
const staticOutput = join(deploymentOutput, 'static');

rmSync(deploymentOutput, { recursive: true, force: true });
mkdirSync(serverOutput, { recursive: true });
mkdirSync(staticOutput, { recursive: true });

cpSync(join(cloudflareOutput, '_worker.js'), join(serverOutput, 'index.js'));

for (const entry of readdirSync(cloudflareOutput, { withFileTypes: true })) {
	if (entry.name === '_worker.js') continue;
	cpSync(join(cloudflareOutput, entry.name), join(staticOutput, entry.name), { recursive: true });
}

console.log('Staged Cloudflare Worker output in dist.');
