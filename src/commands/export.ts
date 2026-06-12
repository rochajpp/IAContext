import fs from 'fs/promises';
import path from 'path';

import {ContextBuilder} from '../services/contextBuilder';

export async function exportCommand(){
    const projectPath = process.cwd();

    const builder = new ContextBuilder();

    const content = await builder.build(projectPath);

    const outputFile = path.join(
        projectPath,
        'project-context.md'
    );

    await fs.writeFile(
        outputFile,
        content,
        'utf8'
    );

    const stats = await fs.stat(outputFile);

    console.log('\n Contexto gerado com sucesso');

    console.log(`Tamanho: ${(stats.size / 1024).toFixed(2)} KB`);
}