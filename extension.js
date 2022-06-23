// The module 'vscode' contains the VS Code extensibility API
const vscode = require('vscode');
// const path_util = require('path')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {

	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "python--gitignore" is now active!');

	let disposable = vscode.commands.registerCommand('python--gitignore.generate', async function () {
		try {
			const workspaces = vscode.workspace.workspaceFolders;
			// if more than one workspace is present
			if (workspaces.length > 1) {
				// prompt the user to choose the name of the workspace
				let arr1 = [];
				let arr2 = [];
				for (let x of workspaces) {
					//array containing only the names of workspaces to display them as quickpicks
					arr1.push(x.name)
					//array containing the names and paths of workspaces for creating the file
					arr2.push([x.name, x.uri.path])
				}
				// eslint-disable-next-line no-unused-vars 
				const pick = await vscode.window.showQuickPick(arr1)
				for (let [x, y] of arr2) {
					if (x == pick) {
						// eslint-disable-next-line no-unused-vars 
						const pathToWorkspace = y
					}
				}
			} else {
				await vscode.window.showInformationMessage("Creating .gitignore")

			}

		}
		catch (error) {
			// if no workspaces found 
			vscode.window.showErrorMessage("No Folder Is Opened , Please Open A Folder")
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

