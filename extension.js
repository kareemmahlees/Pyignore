// The module 'vscode' contains the VS Code extensibility API
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {

	// This line of code will only be executed once when your extension is activated
	await console.log('Congratulations, your extension "python--gitignore" is now active!');

	let disposable = await vscode.commands.registerCommand('python--gitignore.generate', async function () {
		try {
			// if more than one workspace is present
			if (vscode.workspace.workspaceFolders.length > 1) {
				// prompt the user to input the name of the workspace
				const activeDir = await vscode.window.showInputBox();
				console.log(activeDir);
			} else {
				await vscode.window.showInformationMessage("Creating .gitignore")

			}

		}
		catch (error) {
			// if no workspaces found 
			vscode.window.showErrorMessage("No Folder Is Opened")
		}

	})

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
