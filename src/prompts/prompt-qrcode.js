import chalk from "chalk"


const promptQRCode = [


    {
        name: "link",
        description: chalk.yellow.bold("Digite o link para gerar o QE Code"),
       
    },
    {
        name: "type",
        description: chalk.yellow.bold("Escolha entre o tipo (1- Normal ou 2- Terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,

        
    }


]

export default promptQRCode