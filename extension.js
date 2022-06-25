// The module 'vscode' contains the VS Code extensibility API
const vscode = require('vscode');
const exec = require('child_process')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {

	// This line of code will only be executed once when your extension is activated

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
						const wsPath = y
						// fetching the data from github repo and inserting it into a file
						exec.exec(`curl -o "${wsPath.substring(1) + '/.gitignore'}" https://raw.githubusercontent.com/kareemmahlees/python-gitignore/main/gitignore%20template/.gitignore`, (err, stdout, stderr) => {
							console.log('stdout: ' + stdout);
							console.log('stderr: ' + stderr);
							if (err) {
								console.log('error: ' + err);
							}
						});
					}
				}
				// if only one workspace is opened
			} else {
				const workspaces = vscode.workspace.workspaceFolders[0]
				const wsPath = workspaces.uri.path
				exec.exec(`curl -o "${wsPath.substring(1) + '/.gitignore'}" https://raw.githubusercontent.com/kareemmahlees/python-gitignore/main/gitignore%20template/.gitignore`, (err, stdout, stderr) => {
					console.log('stdout: ' + stdout);
					console.log('stderr: ' + stderr);
					if (err) {
						console.log('error: ' + err);
					}
				});
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

