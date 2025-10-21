let projects = ["portfolio website", "Task Tracker"];

function addProjects(projectName){
    projects.push(projectName);
}

function removeLastProject(){
    return projects .pop();
}
console.log(projects);


addProjects("Todo List Application");




console.log(projects);
const lastProject = removeLastProject();
console.log(lastProject);



let Skills = ["HTML","CSS"];

function addSkill(skillName){
    Skills.unshift(skillName);

}
addSkill("js")
      console.log(Skills);

function removeFirstSkill(){
    Skills.shift();
}      
removeFirstSkill();
console.log(Skills)




