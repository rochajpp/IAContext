import fs from 'fs/promises';
import path from 'path';

import {ContextBuilder} from '../services/contextBuilder';

export async function exportCommand(pathParameter?:string){

    const basePath = process.cwd();

    let pathString = basePath;

    if(pathParameter != undefined){
        pathString = path.join(basePath, pathParameter);
    };

    const projectPath = pathString;

    const builder = new ContextBuilder();

    console.log(`Obtendo dados de ${projectPath}`);
    
    const content = await builder.build(projectPath);

    let fileName = "project-context.md";

    // Monta o caminho final no caso o path atual mais o nome do arquivo que no caso será project-context.md
    const outputFile = path.join(
        basePath,
        fileName
    );

    // Salva todos os dados vindos de ContextBuilder no output
    await fs.writeFile(
        outputFile,
        content,
        'utf8'
    );


    // Coleta informações do arquivo
    const stats = await fs.stat(outputFile);

    console.log('\nContexto gerado com sucesso');

    console.log(`Tamanho: ${(stats.size / 1024).toFixed(2)} KB`);
}


