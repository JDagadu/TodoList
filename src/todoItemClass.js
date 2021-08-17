import {rand} from './randomnumbergenerator'
class TodoItem {

    constructor(title,description,dueDate,priority=1,subTask=[],project='Default',completed=false,createdOn=new Date()){
        this.id = Math.floor(Date.parse(createdOn)+(rand(10,100)));
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.subTask = subTask;
        this.project = project;
        this.completed = completed;
        this.createdOn = createdOn;

    }

    get id(){
        return this._id;
    }

    set id(data){
        this._id = data;
    }

    get title(){
        return this._title;
    }

    set title(data){
        this._title = data
    }

    get description(){
        return this._description;
    }

    set description(data){
        this._description = data
    }

    get dueDate(){
        return this._dueDate;
    }

    set dueDate(data){
        this._dueDate = data
    }

    get priority(){
        return this._priority;
    }

    set priority(data){
        this._priority = data
    }

    get project(){
        return this._project;
    }

    set project(data){
        this._project = data
    }

    get completed(){
        return this._completed;
    }

    set completed(data){
        this._completed = data
    }

    get subTask(){
        return this._subTask
    }

    set subTask(data){
        this._subTask = data;
    }

    addsubTask(data){
        this._subTask = this.subTask.concat(data)

    }

    removesubTask(data){
        this.subTask.splice(this.getsubTaskIndex(data),1)
    }

    getsubTaskIndex(data){
        let index;
        for (let i = 0;i<this.subTask.length;i++){
            
            if(this.subTask[i].id == data){
                index = i;
                break;
            }
            
        }
        return index;
    }

    

}

export {TodoItem};