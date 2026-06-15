#!/usr/bin/env node

import {Command} from 'commander'

import {exportCommand} from './commands/export'

const program = new Command();

program
    .name('iacontext')
    .version('1.1.6')
    .description('Gera contexto de projetos para IA');

program
    .command('export [path]')
    .description(
        'Gera o arquivo project-context.md'
    )
    .action((path:string) => {
        exportCommand(path);
    });


program.parse();



