function solve(input) {
    let n = Number(input.shift());
    let assigneesWithTasks = {};
    let tasksByIds = {};

    while (n > 0) {
        let [assignee, taskId, title, status, estimatedPoints] = input.shift().split(":");
        if (!assigneesWithTasks.hasOwnProperty(assignee)) {
            assigneesWithTasks[assignee] = [];
        }

        assigneesWithTasks[assignee].push(taskId);
        tasksByIds[taskId] = { taskId, title, status, estimatedPoints };
        n--;
    }

    let commandParser = {
        "Add New": addNew,
        "Change Status": changeStatus,
        "Remove Task": removeTask
    }

    for (let i = 0; i < input.length; i++) {
        let [command, ...tokens] = input[i].split(":");
        commandParser[command](...tokens);
    }

    let tasksByStatusAndPoints = {
        "ToDo": 0,
        "In Progress": 0,
        "Code Review": 0,
        "Done": 0
    }

    let totalDone = 0;
    let totalOther = 0;

    Object.values(tasksByIds).forEach((task) => {
        let status = task.status;
        let currentPoints = Number(tasksByStatusAndPoints[status]);
        let pointsToAdd = Number(task.estimatedPoints)
        tasksByStatusAndPoints[status] = currentPoints + pointsToAdd;
        if (status === "Done") {
            totalDone += pointsToAdd;
        } else {
            totalOther += pointsToAdd;
        }

    });

    console.log(`ToDo: ${tasksByStatusAndPoints["ToDo"]}pts`);
    console.log(`In Progress: ${tasksByStatusAndPoints["In Progress"]}pts`);
    console.log(`Code Review: ${tasksByStatusAndPoints["Code Review"]}pts`);
    console.log(`Done Points: ${tasksByStatusAndPoints["Done"]}pts`);

    if (totalDone >= totalOther) {
        console.log("Sprint was successful!")
    } else {
        console.log("Sprint was unsuccessful...")
    }

    function addNew(assignee, taskId, title, status, estimatedPoints) {
        if (!assigneesWithTasks.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`)
        } else {
            assigneesWithTasks[assignee].push(taskId);
            tasksByIds[taskId] = { taskId, title, status, estimatedPoints };
        }
    }

    function changeStatus(assignee, taskId, newStatus) {
        if (!assigneesWithTasks.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`)
        } else if (!assigneesWithTasks[assignee].includes(taskId)) {
            console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
        } else {
            tasksByIds[taskId].status = newStatus;
        }
    }

    function removeTask(assignee, index) {
        if (!assigneesWithTasks.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`)
        } else if (index < 0 || index > assigneesWithTasks[assignee].length - 1) {
            console.log(`Index is out of range!`)
        } else {
            let taskId = assigneesWithTasks[assignee][index];
            assigneesWithTasks[assignee].splice(index, 1);
            delete tasksByIds[taskId];
        }
    }

}

// solve(
//     [
//         '5',
//         'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//         'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//         'Peter:BOP-1211:POC:Code Review:5',
//         'Georgi:BOP-1212:Investigation Task:Done:2',
//         'Mariya:BOP-1213:New Account Page:In Progress:13',
//         'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//         'Change Status:Peter:BOP-1290:ToDo',
//         'Remove Task:Mariya:1',
//         'Remove Task:Joro:1',
//     ]

// );

solve(
    [
        '4',
        'Kiril:BOP-1213:Fix Typo:Done:1',
        'Peter:BOP-1214:New Products Page:In Progress:2',
        'Mariya:BOP-1215:Setup Routing:ToDo:8',
        'Georgi:BOP-1216:Add Business Card:Code Review:3',
        'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
        'Change Status:Georgi:BOP-1216:Done',
        'Change Status:Will:BOP-1212:In Progress',
        'Remove Task:Georgi:3',
        'Change Status:Mariya:BOP-1215:Done',
    ]

)