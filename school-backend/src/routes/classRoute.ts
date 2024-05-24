import { ClassController } from '../controllers/classController';
import express , { Router  } from 'express';
  
export class ClassRoutes{
    public router:Router;
    private classController:ClassController; 
    constructor(){
    this.router= express.Router()
    this.classController= new ClassController();
    this.configRoutes();
    }

    private configRoutes(){
        this.router.get('/',  this.classController.getAll.bind(this.classController));
        this.router.post('/',  this.classController.create.bind(this.classController));
        this.router.get('/:id',  this.classController.getById.bind(this.classController));
        this.router.put('/:id',  this.classController.update.bind(this.classController));
        this.router.delete('/:id',  this.classController.delete.bind(this.classController));

    }
}

 
