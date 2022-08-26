import {
     Api
 } from './api.js'
 
 const Model = ((api, view) => {
     class Course {
         constructor(courseName) {
             this.courseId = courseId;
             this.courseName = courseName;
             this.required = required;
             this.credit = credit;
             this.flag = false;
         }
     }
     class State {
         #courses = [];
 
         get courseList() {
             return this.#courses;
         }
         set courseList(newCourseList) {
             this.#courses = [...newCourseList];
             const availableCourses = document.querySelector(view.blocks.availableCourses);
             const tmp = view.createTmp(this.#courses);
             view.render(availableCourses, tmp);
         }
     }
     const {
         getCourses
     , } = api;
 
     return {
         getCourses
         , selectCourses
         , Course
         , State
     , };
 })(Api, View);
 
 const View = (() => {
     const blocks = {
         availableCourses: '#availableCourses'
         , selectedCourses: '#selectedCourses'
         , courses: '.courses'
         , selectButton: '.selectButton'
     , };
     const render = (ele, tmp) => {
         ele.innerHTML = tmp;
     };
     const createTmp = (arr) => {
         let tmp = '';
         arr.forEach(availableCourses => {
             tmp += '<li> <span>${Course.courseID} - ${Course.courseName} - Credits: ${Course.credit}</span> </li>';
         });
         return tmp;
     }
 
     return {
         blocks
         , render
         , createTmp
     , };
 })();
 
 const Controller = ((model, view) => {
     const state = new model.State();
     let creditHours = 0;
     const selectingCourse = () => {
         view.blocks.courses.addEventListener('click', function onClick()) {
             model.Course.flag = true;
             creditHours += model.Course.credit;
 
 
         }
 
     }
     const deselectCourse = () => {
         view.blocks.courses.addEventListener('click', function onClick) {
             model.Course.flag = false;
             creditHours -= model.Course.credit;
         }
     }
     if (creditHours > 18) {
         alert("You can only choose up to 18 credits in one semester.");
     }
     view.blocks.selectButton.addEventListener('click', function onClick()) {
         if (confirm("You have selected up to ${creditHours}. You cannot change once you click \"OK\".") === true) {
 
             view.blocks.selectButton.disable() = true;
         }
     }
 
 })(Model, View);
 
 Controller.bootstrap();