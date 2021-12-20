import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses"> 
                {{ course }}
            </li>
        </ul>
        <img [src] = "imageUrl" />
        <table>
            <tr>
            <td [attr.colspan] = "colSpan" > </td>
            </tr>
        </table>

        <hr>
        `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
    imageUrl = "https://picsum.photos/400/200";
    colSpan = 2;
}