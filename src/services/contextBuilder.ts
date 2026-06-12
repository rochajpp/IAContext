import fg from 'fast-glob'
import fs from 'fs/promises'
import path from 'path'

import { DEFAULT_IGNORES } from '../utils/ignoreRules';

export interface ContextStats {
    fileCount: number;
    lineCount: number;
    outputSize: number;
}

export class ContextBuilder {

    private buildTree(files: string[]): string {
        return files.join('\n');
    }

    async build(projectPath: string): Promise<string> {
        const files = await fg('**/*', {
            cwd: projectPath,
            onlyFiles: true,
            ignore: DEFAULT_IGNORES
        });

        let output = '';

        for (const file of files) {
            const fullPath = path.join(projectPath, file);

            try {
                const content = await fs.readFile(fullPath, 'utf8');

                output += `\n=== ${file} ===\n\n`;
                output += content;
                output += '\n';
            } catch {
                continue;
            }
        }

        const projectName = path.basename(projectPath);

        const tree = this.buildTree(files);

        const markdown = `
        #Projeto: ${projectName}

        ##Estrutura


        \`\`\`
        ${tree}
        \`\`\`

        ${output}
        `;

        return markdown;
    }
}

