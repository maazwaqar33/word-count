#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


async function countCw(){
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'para',
            message: 'write your sentence'
        }
    ])

    const paragraph = userInput.para;

    // Remove whitespaces to count characters without spaces
    const charCount = paragraph.replace(/\s+/g, '').length;

    // Count words by splitting the paragraph by whitespaces and filtering out empty strings
    const wordCount = paragraph.split(/\s+/).filter((word: string) => word !== '').length;

    console.log(chalk.blue(`Character count without white space: ${charCount}`));
    console.log(chalk.yellow(`Word count without whitespace: ${wordCount}`));
}

countCw()