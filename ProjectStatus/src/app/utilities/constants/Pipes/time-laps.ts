import { Pipe, PipeTransform } from '@angular/core';

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | TimeLaps:exponent
 * Example:
 *   {{ 2 | TimeLaps:10 }} 
*/

@Pipe({
    name: 'timeLaps' //name of the pipe  
})

export class TimeLaps implements PipeTransform {
    transform(value: Date) {
        console.log(value);
        return this.timeSince(value, new Date());
    }



    timeSince(date: Date, today: Date) {
        // const date = this.time;
        // const today = new Date();
        let seconds = Math.floor((today.valueOf() - date.valueOf()) / 1000);
        const yr = date.getFullYear();
        const mon = date.toLocaleString('en-us', { month: 'short' });
        const day = date.getDate();
        const hr = date.getHours();
        const min = date.getMinutes();
        const sec = date.getSeconds();
        if (seconds > 0) {
            let interval = seconds / 31536000;//year
            if (interval > 1) {
                return `${this.getTwoDigit(day)}-${mon}-${yr} at ${this.getTwoDigit(hr)}:${this.getTwoDigit(min)}`;//6-Oct-2022 at 15:44       
            }
            interval = seconds / 2592000;//month
            if (interval > 1) {
                return `${this.getTwoDigit(day)}-${mon}-${yr} at ${this.getTwoDigit(hr)}:${this.getTwoDigit(min)}`;//6-Oct at 15:44  
            }
            interval = seconds / 86400;//days
            if (interval > 1) {
                if (day === (today.getDate() - 1) && date.getMonth() === today.getMonth()) {
                    return `yesterday at ${this.getTwoDigit(hr)}:${this.getTwoDigit(min)}`;//Today at 15:44 
                }
                else
                    return `${this.getTwoDigit(day)}-${mon}-${yr} at ${this.getTwoDigit(hr)}:${this.getTwoDigit(min)}`;//6-Oct-2022 at 15:44  
            }
            interval = seconds / 3600;//hours
            if (interval > 1) {
                if (day === (today.getDate() - 1) && date.getMonth() === today.getMonth()) {
                    return `yesterday at ${this.getTwoDigit(hr)}:${this.getTwoDigit(min)}`;//Today at 15:44 
                }
                else
                    return `today at ${this.getTwoDigit(hr)}:${this.getTwoDigit(min)}`;//Today at 15:44  
            }
            interval = seconds / 60;//minutes
            if (interval > 1) {
                return `${this.getTwoDigit(Math.ceil(today.getMinutes() - min))} minutes ago`;//Minutes ago  
            }
            if (seconds > 1) {//seconds
                return `${this.getTwoDigit(today.getSeconds() - sec)} seconds ago`;//seconds ago 
            }
            return "just now";
        }
        else//future
        {
            let seconds = Math.floor((date.valueOf() - today.valueOf()) / 1000);
            let interval = seconds / 31536000;//year
            if (interval > 1) {
                return `${this.getTwoDigit(day)}-${mon}-${yr} at ${this.getTwoDigit(hr)}:${this.getTwoDigit(min)}`;//6-Oct-2022 at 15:44       
            }
            interval = seconds / 2592000;//month
            if (interval > 1) {
                return `${this.getTwoDigit(day)}-${mon}-${yr} at ${this.getTwoDigit(hr)}:${this.getTwoDigit(min)}`;//6-Oct at 15:44  
            }
            interval = seconds / 86400;//days
            if (interval > 1) {
                if (day === (today.getDate() + 1) && date.getMonth() === today.getMonth()) {
                    return `tomorrow at ${this.getTwoDigit(hr)}:${this.getTwoDigit(min)}`;//tomorrow at 15:44 
                }
                else
                    return `${this.getTwoDigit(day)}-${mon}-${yr} at ${this.getTwoDigit(hr)}:${this.getTwoDigit(min)}`;//6-Oct-2022 at 15:44  
            }
            interval = seconds / 3600;//hours
            if (interval > 1) {
                if (day === (today.getDate() + 1) && date.getMonth() === today.getMonth()) {
                    return `tomorrow at ${this.getTwoDigit(hr)}:${this.getTwoDigit(min)}`;//Today at 15:44 
                }
                else
                    return `today at ${this.getTwoDigit(hr)}:${this.getTwoDigit(min)}`;//Today at 15:44  
            }
            interval = seconds / 60;//minutes
            if (interval > 1) {
                return `${this.getTwoDigit(Math.ceil(today.getMinutes() - min))} minutes ahead`;//Minutes ago  
            }
            // if (seconds > 10) {//seconds
            //   return `${this.getTwoDigit(Math.ceil(today.getSeconds() - sec))} seconds ahead`;//seconds ago 
            // }
            return "just now";
        }

    }

    private getTwoDigit(e: number): string {
        return e.toString().padStart(2, "0");
    }

}