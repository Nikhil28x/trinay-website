import { cpSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const projectRoot = process.cwd();
const cloudflareOutput = join(projectRoot, '.svelte-kit', 'cloudflare');
const deploymentOutput = join(projectRoot, 'dist');
const serverOutput = join(deploymentOutput, 'server');
const staticOutput = join(deploymentOutput, 'static');
const svelteOutput = join(deploymentOutput, 'output');
const cloudflareManifestOutput = join(deploymentOutput, 'cloudflare-tmp');

rmSync(deploymentOutput, { recursive: true, force: true });
mkdirSync(serverOutput, { recursive: true });
mkdirSync(staticOutput, { recursive: true });

cpSync(join(cloudflareOutput, '_worker.js'), join(serverOutput, 'index.js'));
cpSync(join(projectRoot, '.svelte-kit', 'output'), svelteOutput, { recursive: true });
cpSync(join(projectRoot, '.svelte-kit', 'cloudflare-tmp'), cloudflareManifestOutput, {
	recursive: true
});

for (const entry of readdirSync(cloudflareOutput, { withFileTypes: true })) {
	if (entry.name === '_worker.js') continue;
	cpSync(join(cloudflareOutput, entry.name), join(staticOutput, entry.name), { recursive: true });
}

console.log('Staged Cloudflare Worker output in dist.');
