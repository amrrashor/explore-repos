    export function convertTimeFormat(timeString) {
    // Parse the time string into a Date object.
    const time = new Date(timeString);

    // Calculate the time difference between the current time and the time in the time string.
    const timeDiff = new Date() - time;

    // Convert the time difference to milliseconds.
    const millisecondsDiff = timeDiff;

    // Calculate the number of hours in the time difference.
    const hoursDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60));

    // Calculate the number of days in the time difference.
    const daysDiff = Math.floor(hoursDiff / 24);

    // Calculate the number of weeks in the time difference.
    const weeksDiff = Math.floor(daysDiff / 7);

    // Calculate the number of months in the time difference.
    const monthsDiff = Math.floor(weeksDiff / 4);

    // Calculate the number of years in the time difference.
    const yearsDiff = Math.floor(monthsDiff / 12);

    // If the time difference is less than 1 hour, return "less than an hour ago".
    if (hoursDiff < 1) {
        return "less than an hour ago";
    }

    // If the time difference is less than 24 hours, return the number of hours ago.
    else if (hoursDiff < 24) {
        return `${hoursDiff} ${hoursDiff === 1 ? 'hour' : 'hours'} ago`;
    }

    // If the time difference is less than 7 days, return the number of days ago.
    else if (daysDiff < 7) {
        return `${daysDiff} ${daysDiff === 1 ? 'day' : 'days'} ago`;
    }

    // If the time difference is less than 4 weeks, return the number of weeks ago.
    else if (weeksDiff < 4) {
        return `${weeksDiff} ${weeksDiff === 1 ? 'week' : 'weeks'} ago`;
    }

    // If the time difference is less than 12 months, return the number of months ago.
    else if (monthsDiff < 12) {
        return `${monthsDiff} ${monthsDiff === 1 ? 'month' : 'months'} ago`;
    }

    // If the time difference is less than 1 year, return the number of years ago.
    else if (yearsDiff > 1) {
        return `${yearsDiff} ${yearsDiff === 1 ? 'year' : 'years'} ago`;
    }

    // Otherwise, return the date and time.
    else {
        return time.toLocaleString();
    }
    }
