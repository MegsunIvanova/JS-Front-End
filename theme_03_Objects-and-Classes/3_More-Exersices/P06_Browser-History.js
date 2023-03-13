function browserHistory(browser, commands) {
    const parser = {
        Open(site) {
            browser["Open Tabs"].push(site);
            browser["Browser Logs"].push("Open " + site);
        },

        Close(site) {
            let index = browser["Open Tabs"].indexOf(site);
            if (index !== -1) {
                browser["Open Tabs"].splice(index, 1);
                browser["Browser Logs"].push("Close " + site);
                browser["Recently Closed"].push(site);
            }
        },

        Clear() {
            browser["Open Tabs"] = [];
            browser["Browser Logs"] = [];
            browser["Recently Closed"] = [];
        }
    }

    for (const commandLine of commands) {
        let command = commandLine.split(" ")[0];
        let site = commandLine.split(" ")[1];
        parser[command](site);
    }

    console.log(browser["Browser Name"]);
    console.log(`Open Tabs: ${browser["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${browser["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${browser["Browser Logs"].join(", ")}`);

}

browserHistory(
    {
        "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"]

);

// browserHistory(
//     {
//         "Browser Name": "Mozilla Firefox",
//         "Open Tabs": ["YouTube"],
//         "Recently Closed": ["Gmail", "Dropbox"],
//         "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
//     },
//     ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
// );