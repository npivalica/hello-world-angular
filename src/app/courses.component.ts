import { Component } from "@angular/core";

import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
            {{ text | summary }}
        `
})
export class CoursesComponent {
    text = `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quasi alias veritatis enim saepe vero ratione iure nisi, veniam nihil eius dolores vel nemo magnam aut similique tempore odio doloremque nostrum? Quo et harum cupiditate quidem, labore architecto iure necessitatibus?
    `    
}
