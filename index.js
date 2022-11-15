import inquirer from 'inquirer'
import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // password: '', (not sure if we need this since I don't have a pw)
    database: 'sakila'
})

const menuPrompt = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'list', 
            name: 'action',
            message: 'what do you want to do?', 
            choices: ['Search actors', 'Add an actor', 'Update an actor', 'Exit']
        }
    ])
    
    
    console.log(answers)
    if (answers.action === 'Search actors') {
        searchAnswers()
    } else if (answers.action === 'Add an actor') {
        addActor()
    } else if (answers.action === 'Update an actor') {
        updateActor()
    } else {
        process.exit(0)
    }



}

menuPrompt()

